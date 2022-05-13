function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout (tick, 1000);
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time)
            timer.innerHTML == "";
        }
    }
    tick();
}

var slideIndex = 1;
showSlides(slideIndex);

// next and prev button controls
function plusSlides(n) {
  showSlides(slideIndex += n); //create a loop so if we define n as 1 in our html its adds 1 and moves to the next
}                              //but if we define n as -1 it will go to the previous slide

// image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {    
  var i;
  var slides = document.getElementsByClassName("Slides");
  var dot = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}// start by setting it to show the first slide by setting index to 1
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) { // if the slide 'n' isn't the last slide it will add one and will display the next img
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", ""); // this changes the class name so that it goes from "dot"
    }                                                            // to "".active, .dot:hover" to change the color of a specific dot 
  slides[slideIndex -1].style.display = "block";                // depending what we feed in for (n) in our html
  dot[slideIndex - 1].className += " active";
}