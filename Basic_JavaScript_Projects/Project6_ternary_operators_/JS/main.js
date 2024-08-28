function VoterFunc() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

//keyword function for vehicle
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunc() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

//keyword function fr a gadget
function Gadget(Brand, Model, Year, Color) {
    this.Brand = Brand;
    this.Model = Model;
    this.Year = Year;
    this.Color = Color;
}

var gadget = new Gadget("Apple", "iPhone 14", 2023, "Midnight");

function gadgetInfoFunc() {
    document.getElementById("New_and_This").innerHTML =
    "This gadget is a " + gadget.Color + " " + gadget.Model + " by " + gadget.Brand +
    ", released in " + gadget.Year + ".";
}

//nested function. adds 1 to 9
function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    
    function Count() {
        var Starting_point = 9;
        
        function Plus_one() {
            Starting_point += 1;
        }
        
        Plus_one();
        return Starting_point;
    }
}