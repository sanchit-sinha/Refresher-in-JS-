var n = 9;
var m = n;
var N = n;

var color = "danger";
var grid = new Array;
for(var i = 0 ; i < n ; i++){
    var temp = new Array;
    for(var j = 0 ; j < m ; j++) temp.push(0);
    grid.push(temp);
}

// debug array
function debug(grid){
    var temp = "";
    for(var i = 0 ; i < n ; i++){
        for(var j = 0 ; j < m ; j++){
            var strr = grid[i][j].toString();
            temp += strr;
            temp += " ";
        }
        temp += "\r\n";
    }

    temp += "\r\n";
    console.log(temp);
}

// increases cell value 
function increment(x , y){
    cell_id = x + "+" + y;
    var cell_value = document.getElementById(cell_id).value;

    var num = Number(cell_value);
    num += 1;
    if(num == 10){
        document.getElementById(cell_id).value = "0";
    }
    else document.getElementById(cell_id).value = num.toString();
}

function isSafe(grid, row, col, num){
    for (var x = 0; x <= 8; x++){
        if (grid[row][x] == num) return 0;
    }

    for (var x = 0; x <= 8; x++){
        if(grid[x][col] == num) return false;
    }
 
    var startRow = row - row % 3;
    var startCol = col - col % 3;
   
    for (var i = 0; i < 3; i++)
        for(var j = 0; j < 3; j++)
            if (grid[i + startRow][j + startCol] == num)
                return 0;
 
    return 1;
}

function sudoku(grid , row,  col){
    if (row == N - 1 && col == N)
        return 1;
 
    if (col == N) {
        row++;
        col = 0;
    }
   
    if (grid[row][col] > 0)
        return sudoku(grid, row, col + 1);
 
    for (var num = 1; num <= n; num++){
        if (isSafe(grid, row, col, num) == 1){
            grid[row][col] = num;
            if (sudoku(grid, row, col + 1))
                return 1;
        }
       
        grid[row][col] = 0;
    }
    return 0;
}

function evaluatefn(grid){
    for(var i = 0 ; i < n ; i++){
        for(var j = 0 ; j < n ; j++){
            var cell_id = i + "+" + j;
            var cell_value = document.getElementById(cell_id).value;
            var num = Number(cell_value);
            grid[i][j] = num;
        }
    }

    var stro = "<br><br>";
    if(sudoku(grid , 0 , 0) == 1){
        for(var i = 0 ; i < n ; i++){
            for(var j = 0 ; j < n ; j++){
                if(i < 3 && j < 3) color = "success";
                else if(i >= 6 && j < 3) color = "success";
                else if(i >= 6 && j >= 6) color = "success";
                else if(i < 3 && j >= 6) color = "success";
                else if(i >= 3 && i < 6 && j >= 3 && j < 6) color = "success";
                else color = "danger";
                
                var val = grid[i][j].toString();
                stro += '<input type="button" value= '+val+' class="btn btn-secondary waves-effect bg-' + color + ' btn-work btn-empty" id = "' + i + "+" + j+  '" onclick = "increment(' +i +','+ j + ');">';
            }
            stro += "<br>";
        }
        stro += "<br><br>";
    }
    else{
        stro += "<p>Solution does not exits!</p>";
    }

    document.getElementById("output").innerHTML = stro;

    var elmnt = document.getElementById("output");
    elmnt.scrollIntoView();
}

str = "<br><br><br>";
for(var i = 0 ; i < n ; i++){
    for(var j = 0 ; j < m ; j++){
        if(i < 3 && j < 3) color = "success";
        else if(i >= 6 && j < 3) color = "success";
        else if(i >= 6 && j >= 6) color = "success";
        else if(i < 3 && j >= 6) color = "success";
        else if(i >= 3 && i < 6 && j >= 3 && j < 6) color = "success";
        else color = "danger";
        str += '<input type="button" value= "0" class="btn btn-secondary waves-effect bg-' + color + ' btn-work btn-empty" id = "' + i + "+" + j+  '" onclick = "increment(' +i +','+ j + ');">';
    }
    str += "<br>";
}

document.getElementById("game").innerHTML = str;