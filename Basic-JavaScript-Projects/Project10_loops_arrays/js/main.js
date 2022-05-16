function Call_Loop(){
    var Digit = "";
    var X = 1;
    while (X < 11){
        Digit += "<br>" + X;
        X++
    }
    document.getElementById("Loop").innerHTML = Digit;
}


let text = "Hello World!";
let length = text.length;
document.getElementById("sLength").innerHTML = length;

var Instruments = ["Guitar", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++){
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var Cat_Picture = [];
    Cat_Picture[0] = " sleeping";
    Cat_Picture[1] = " playing";
    Cat_Picture[2] = " eating";
    Cat_Picture[3] = " purring";
    document.getElementById("Array").innerHTML = " In this picture, the cat is" +
        Cat_Picture[2] + ".";
}

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.color + " " +
            Musical_Instrument.type + " was " + Musical_Instrument.price;
}

var X = 82;
document.getElementById("let").innerHTML = X;

function let_function(){ 
    let X = 33;
    document.getElementById("let").innerHTML = X;
}
document.getElementById("let").innerHTML = X;



let B = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  B += "The number is " + i + "<br>";
}

document.getElementById("break").innerHTML = B;

let C = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    C += "The number is " + i + "<br>";
  }

document.getElementById("contin").innerHTML = C;