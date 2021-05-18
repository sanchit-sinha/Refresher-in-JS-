var input = new Array;
input.push("........");
input.push("........");
input.push("..*.....");
input.push("........");
input.push("........");
input.push(".....**.");
input.push("...*....");
input.push("........");

var n = 8;
var m = 8;
inf = 1e18 + 9;

// solving for answer
var board = new Array;
var paths = new Array;
for(var i = 0 ; i < n ; i++){
    var temp = new Array;
    for(var j = 0 ; j < m ; j++) temp.push(0);
    board.push(temp);
}

for(var i = 0 ; i < n ; i++){
    for(var j = 0 ; j < n ; j++){
        if(input[i][j] == '*') board[i][j] = inf;
    }
}

// debug boards array
function debug(board){
    var temp = "";
    for(var i = 0 ; i < n ; i++){
        for(var j = 0 ; j < m ; j++){
            var strr = board[i][j].toString();
            if(board[i][j] == inf) temp += "-1";
            else temp += strr;
            
            temp += " ";
        }
        temp += "\r\n";
    }

    temp += "\r\n";
    console.log(temp);
}

// placing queens on the board and blocking the other positions 
function block(board , row , col , add){
    var x = row ;
    var y = col;
    for(var i = 0 ; i < n ; i++){
        for(var j = 0 ; j < n ; j++){
            if(i == x) board[i][j] += add;
            else if(j == y) board[i][j] += add;
            else{
                if(Math.abs(i - x) == Math.abs(j - y)) board[i][j] += add;
            }
        }
    }
}

// finding paths for placing queens over a chess board
function place(paths , board , queens){
    if(queens == 0){
        var temp = new Array;
        for(var i = 0 ; i < n ; i++){
            var temp1 = new Array;
            for(var j = 0 ; j < n ; j++){
                if(board[i][j] == 1) temp1.push("Q")
                else temp1.push("0");
            }
            temp.push(temp1);
        }

        paths.push(temp);
        return;
    }
 
    for(var j = 0 ;j < n ; j++){
        if(board[queens - 1][j] == 0){
            block(board , queens - 1 , j , 1);
            place(paths , board , queens - 1);
            block(board , queens - 1 , j , -1);
        }
    }
}

// call place function
place(paths , board , 8);
// console.log(paths.length);

function placeQueen(x , y){
    cell_id = x + "+" + y;
    var cell_value = document.getElementById(cell_id).value;

    if(cell_value == ""){
        document.getElementById(cell_id).value = "Q";
    }
    else document.getElementById(cell_id).value = "";
}

function evaluatefn(){
    var user = new Array;
    for(var i = 0 ; i < n ; i++){
        var temp1 = new Array;
        for(var j = 0 ; j < n ; j++){
            var cell_id = i + "+" + j;
            var cell_value = document.getElementById(cell_id).value;

            if(cell_value == "Q") temp1.push("Q");
            else temp1.push("0");
        }
        user.push(temp1);
    }

    var len = paths.length;

    var found_number = -1;
    for(var k = 0 ; k < len ; k++){
        var ok = 1;
        for(var i = 0 ; i < n ; i++){
            for(var j = 0 ; j < n ; j++){
                if(user[i][j] != paths[k][i][j]) ok = 0;
            }
        }

        if(ok == 1) found_number = k + 1;
    }   

    var stro = "";
    if(found_number == -1) stro += "<h3>Your solution is incorrect.</h3> <br><br> Refer the following 65 possible answers : <br>";
    else stro += "<h3>Your solution matches with the " + found_number.toString() + " numbered case.</h3> <br><br> Refer the following 65 correct possibilties : <br>";

    for(var k = 0 ; k < len ; k++){
        var index = k + 1;
        stro += "<br> Possibility Number " + index.toString() + " : <br>";
        for(var i = 0 ; i < n ; i++){
            for(var j = 0 ; j < n ; j++){
                if(paths[k][i][j] == "Q"){
                    stro += '<input type="button" value="Q" class="btn btn-secondary waves-effect bg-success btn-work btn-empty" readonly>';
                }
                else stro += '<input type="button" value="" class="btn btn-secondary waves-effect bg-secondary btn-work btn-empty" readonly>';
            }
            stro += "<br>";
        }
        stro += "<br><br>";
    } 
 
    document.getElementById("output").innerHTML = stro;

    var elmnt = document.getElementById("output");
    elmnt.scrollIntoView();
}

str = "<br><br><br>";
for(var i = 0 ; i < n ; i++){
    for(var j = 0 ; j < m ; j++){
        if(input[i][j] == '*') {
            str += '<input type="button" value="X" class="btn btn-secondary waves-effect bg-danger btn-work" id = "' + i + "+" + j+  '">';
        }
        else {
            str += '<input type="button" value="" class="btn btn-secondary waves-effect bg-info btn-work btn-empty" id = "' + i + "+" + j+  '" onclick = "placeQueen(' +i +','+ j + ');">';
        }
    }
    str += "<br>";
}

document.getElementById("game").innerHTML = str;