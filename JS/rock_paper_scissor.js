var arr = new Array;
arr.push("ROCK");
arr.push("PAPER");
arr.push("SCISSOR");

var color = new Array;
color.push("primary");
color.push("success");

originalclass = "btn-primary btn-block px-4 py-4  mx-5 my-4";
newclass = "btn-success btn-block px-4 py-4  mx-5 my-4";

function choose(n){
    //str1 clicked button; str2 and str3 are other buttons 
    str1 = "user" + n;
    str3 = "user";
    str2 = "user";

    if(n == "1"){
        str2 += "2";
        str3 += "3";
    }
    else if(n == "2"){
        str2 += "1";
        str3 += "3";
    }
    else{
        str2 += "2";
        str3 += "1";
    }

    oc1 = document.getElementById(str1).className;
    

    if(oc1 == originalclass){
        document.getElementById(str1).className = newclass;
        document.getElementById("myText").value = n;
    }
    else{
        document.getElementById(str1).className = originalclass;
        document.getElementById("myText").value = "-";
    }
    
    document.getElementById(str2).className = originalclass
    document.getElementById(str3).className = originalclass

    // output
    n--;
    users_choice = arr[n];
    var random_number = Math.floor(Math.random() * 3); // genrates random number from 0 to 3
    computers_choice = arr[random_number];
    
    stro = "Your choice : " + users_choice + "\r\n";
    stro += "Computer's choice : " + computers_choice +"\r\n";
    
    // winner out of user and computer
    var winner = ""
    mtie = "MATCH TIED!";
    mlost = "YOU LOST!";
    mwon = "YOU WON!";

    if(users_choice == "ROCK"){
        if(computers_choice == "ROCK") winner = mtie;
        else if(computers_choice == "PAPER") winner = mlost; 
        else if(computers_choice == "SCISSOR") winner = mwon;
    }
    else if(users_choice == "PAPER"){
        if(computers_choice == "ROCK") winner = mwon;
        else if(computers_choice == "PAPER") winner = mtie;
        else if(computers_choice == "SCISSOR") winner = mlost;
    }
    else if(users_choice == "SCISSOR"){
        if(computers_choice == "ROCK") winner = mlost;
        else if(computers_choice == "PAPER") winner = mwon;
        else if(computers_choice == "SCISSOR") winner = mtie;
    }
    stro += winner + "\r\n";
    alert(stro);
}


// '<input type="button" id = "user1" class = "btn-primary" value = "ROCK" onclick="choose(1)"> <br>';

var str = "<br><br><br><h3> Make your choice :</h3> ";
for(var i = 1 ; i <= 3 ; i++){
    str += '<input type = "button" id = "user' + i + '" class = "' + originalclass + '" value = "' + arr[i - 1] + '"onclick="choose(' + i + ')"> ';
}

document.getElementById("game1").innerHTML = str ;

