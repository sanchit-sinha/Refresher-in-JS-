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

// solving for answer
var board = new Array;
for(i = 0 ; i < n ; i++){
    var temp = new Array;
    for(j = 0 ; j < m ; j++) temp.push(0);
    board.push(temp);
}


function placeQueen(x , y){
    cell_id = x + "+" + y;
    var cell_value = document.getElementById(cell_id).value;

    if(cell_value == ""){
        document.getElementById(cell_id).value = "Q";
    }
    else document.getElementById(cell_id).value = "";
}

var i = 0 , j = 0;
str = "<br><br><br>";
for(i = 0 ; i < n ; i++){
    for(j = 0 ; j < m ; j++){
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