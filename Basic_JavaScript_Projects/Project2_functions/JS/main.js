function FirstFunction() {
    var str = "This is the btn text!" //defining variable and giving a string value
    document.getElementById("Button_Text").innerHTML = str; //putting value of the var into the HTML elemend from point with "Button_Text" id
}

function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this course!";
    document.getElementById("Concatenate").innerHTML = sentence;
}