

//dictionary function//
function a_Dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark!"
    };
    delete Animal.Sound;// this will delete 'Sound: "Bark!"' from dictionary//
    document.getElementById("Dictionary").innerHTML = Animal.Sound; // will say undefined because we deleted what is being called from the dictionary//
}