var arr = new Array;
str_start = '<br> Lets try out the following games: <br> <ul>';
arr.push(str_start);

str_game2 = '<li><a href = "chessboard_and_queens.html" > CHESSBOARD AND QUEENS</a><br></li>'
arr.push(str_game2);

str_game1 = '<li><a href = "rock_paper_scissor.html" > ROCK PAPER SCISSOR</a><br></li>'
arr.push(str_game1);

str_end = '</ul><br>';
arr.push(str_end);

str_start2 = '<br> Lets try out the following solvers: <br> <ul>';
arr.push(str_start2);

str_solver1 = '<li><a href = "sudoku.html" > SUDOKU SOLVER</a><br></li>'
arr.push(str_solver1);

str_end2 = '</ul><br>';
arr.push(str_end2);


var n = arr.length;
var string = "";
for(var i = 0 ; i < n ; i++){
    string += arr[i];
    string +=  "<br>";
}

document.getElementById("game_container").innerHTML = string;

