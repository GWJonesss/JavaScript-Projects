var X = 10;// put the var outside of the function so it is global
function Add_numbers_1 () {
    // if we put 'var X = 10' here it does't show in function Add_number_2 because it is local to this function
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
        document.write(X+100);
}

Add_numbers_1();
Add_numbers_2();

function get_Date() {  //Time_function() 
    if (new Date().getHours() < 19) { //switched 18 to 19 so that it would work based on what time I am coding this
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

//Lucky number game that works with 'if', 'else if', and 'else' statements //

function am_I_Lucky() { //IF STATEMENT ASSIGNMENT//
    var lucky_Number;
    lucky_Number = document.getElementById("lucky_Number").value;

    if (lucky_Number == 7) // if they guess 7 they win!
    document.getElementById("number").innerHTML = lucky_Number + " "+ "is the lucky number, YOU WIN!";
        else if(lucky_Number > 10 || lucky_Number < 1 )// makes sure their guess is withing the parameters of being between 1-10
        document.getElementById("number").innerHTML = "Please guess a number between 1 and 10";
        else
        document.getElementById("number").innerHTML = lucky_Number+ " " + "is not the lucky number";

}