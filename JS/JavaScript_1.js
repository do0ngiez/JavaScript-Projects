function color_function() {
    var color_output;
    var colors = document.getElementById("color_input").value;
    var color_string = " is a great color!";
    switch(colors) {
        case "red":
            color_output = "red" + color_string;
        break;
        case "yellow":
            color_output = "yellow" + color_string;
        break;
        case "green":
            color_output = "green" + color_string;
        break;
        case "blue":
            color_output = "blue" + color_string;
        break;
        case "pink":
            color_output = "pink" + color_string;
        break;
        case "purple":
            color_output = "purple" + color_string;
        break;
        default:
        color_output = "please enter a color exactly as written on the above list.";
    }
    document.getElementById("output").innerHTML = color_output;
}

//hello world func-- utilizing getElementByClassName
function hello_world_func() {
    var a = document.getElementsByClassName("click");
    a[0].innerHTML = "The text has changed!";
}

//canvas text
window.onload = function() { //used window.onload to ensure <canvas> is fully loaded before below runs
    var c = document.getElementById("id_name"); 
    var ctx = c.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillText("Hello World", 10, 50);
};

window.onload = function() {
    const canvas = document.getElementById("id_name");
    const ctx = canvas.getContext("2d");

    //gradient
    const grd = ctx.createLinearGradient(0, 0, 170, 0);
    grd.addColorStop(0, "black");
    grd.addColorStop(1, "white");

    //rectangle
    ctx.fillStyle = grd;
    ctx.fillRect(20, 20, 150, 100);
}