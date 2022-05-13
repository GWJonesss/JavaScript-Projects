//concatenating multiple var into one
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4); //concat all into var 'whole_sentence'
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

//out puts only what is between the positions stated inside the .slice(num, num)
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

// using '.toUpperCase' will make the previous string output all Uppercase letters'
document.getElementById("to_Upper").innerHTML = ('this sentence is in all caps'.toUpperCase()); //out put "THIS SENTENCE IS IN ALL CAPS"


// the search function finds the start position of what is searched inside of the ("")
let text = "this will let us know the position of THIS word"
let position = text.search("THIS"); //output 38 , but if we use case insensitive "/THIS/i" it outputs -1 because it sees the first word is 'this'
document.getElementById("search_Method").innerHTML = position ;


//Turns Var X into a string
function string_Method() {
    var X =182;
    document.getElementById("Number_to_string").innerHTML = X.toString();
}

//shortens var X to 10 spaces
function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

//toFixed() converts a number to a string, rounded to a specified number of decimals
let num = 3.485938;
let n = num.toFixed(3);
document.getElementById("to_Fix").innerHTML = n;

//valueOf() returns the primitive value of a string
let textstring = "This is a string!";
let result = textstring.valueOf();
document.getElementById("value").innerHTML = result;


