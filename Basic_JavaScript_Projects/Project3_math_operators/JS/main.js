//math addition operator
function addFunc() {
    var solution = 2+2;
    document.getElementById("MathAdd").innerHTML = "2 + 2 = " + solution;
}

//subtraction operator
function subFunc() {
    var solution = 5-2;
    document.getElementById("MathSub").innerHTML = "5 - 2 = " + solution;
}

//multiplication opertaor
function mulFunc() {
    var solution = 7*8;
    document.getElementById("MathMul").innerHTML = "7 x 8 = " + solution;
}

//division operator
function divFunc() {
    var solution = 50/2;
    document.getElementById("MathDiv").innerHTML = "50 / 2 = " + solution;
}

//uses all operators into one
function moreFunc() {
    var solution = (1+5)*10/2-5;
    document.getElementById("moreMath").innerHTML = "(1 + 5) * 10 / 2 - 5 = " + solution;
}

//gets remainder
function remainderFunc() {
    var solution = 25 % 6;
    document.getElementById("remainderMath").innerHTML = "When you divide 25 by 6 you have a remainder of = " + solution;
}

//does negation
function negFunc() {
    var solution = 10;
    document.getElementById("negMath").innerHTML = -solution;
}

// increments 1 from original number 10
function incFunc() {
    var solution = 10;
    solution++;
    document.getElementById("incMath").innerHTML = "10 to " + solution;
}

// decrements 1 from original number 10
function decFunc() {
    var solution = 10;
    solution--;
    document.getElementById("decMath").innerHTML = "10 to " + solution;
}

//does window alert with a random number
window.alert(Math.random());
window.alert(Math.random() * 100);