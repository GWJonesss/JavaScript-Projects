
function Ride_function() { //this utilizes a ternary operation using input from the browser//
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"; // the ? operator puts out the strings as if they were true or false//
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";

}


function Vehicle (Make, Model, Year, Color) { //here is a constructor function that uses the “new” and “this” keywords//
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); // 'new' Lets us use the previously set up 'Vehicle' constructor to house identifiable arguments to call later on //
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
        document.getElementById("New_and_This").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + " -colored " + Erik.Vehicle_Model + // calling a specific argument string associated to 'Erik'
        " manufactured in " + Erik.Vehicle_Year;                                    // by its relative position to "Vehicle_Model" in the 'Vehicle' constructor//
}


function Nested_Function() { //Here is a function with nested function inside it//
    document.getElementById("Nested_Function").innerHTML = Nested()
            function Nested() {
                var Starting_point = 9;
                function Plus_one() {Starting_point += 1;} //this function is inside the {} of the previous functions stated so it will act on previous var//
                Plus_one();
                return Starting_point;
            }
        }