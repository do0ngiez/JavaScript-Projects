let br = "<br>"
document.write(typeof "Word");
document.write(typeof 4);
document.write("10" + 5);
document.write(br);
document.write("10 == 10 is ");
document.write(10==10); //true
document.write(br);
document.write("3 == 10 is ");
document.write(3==10); //false
document.write(br + "x=10\ny=10 \n so x===y is ")
x = 10;
y = 10;
document.write(x === y);
document.write(br + "5 > 2 && 10 > 4 is ");
document.write(5 > 2 && 10 > 4);
document.write(br + "5 > 2 || 10 > 4 is ");
document.write(5 > 2 && 10 > 4);


function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
}

function not_Function() {
    document.getElementById("Not").innerHTML = !(5>10);
}

document.body.classList.add('fade-out');
window.addEventListener('DOMContentLoaded', () => {
document.body.classList.remove('fade-out');
});

function validateForm() {
    let fname = document.forms["myForm"]["fname"].value;
    let lname = document.forms["myForm"]["lname"].value;
    let phonenum = document.forms["myForm"]["phonenum"].value;

    if (fname == "" || lname == "" || phonenum == "") {
        alert("All fields must be filled out!");
        return false;
    }
}
