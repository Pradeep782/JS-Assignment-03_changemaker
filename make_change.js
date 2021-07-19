"use strict";

// creating the $ function which fetches the html element by its id
var $ = function (id) {
    return document.getElementById(id);
};


// the processEntries function is used to evaluate the inputs and gives the alert if it isn't valid
function processEntries() {
    var cents = $("cents").value;
    // comparing the cents based on the value entered
    if (cents >= 0 && cents <= 99) {
       
       
        // makeChange function is used to convert the entered cents to quarters, dimes, nickles and pennies.

        makeChange(cents);
    } else {
        // giving alert to the user if entered input is not valid
        alert("value should be between 0 and 99");
        $("quarters").value = "";
        $("dimes").value = "";
        $("nickels").value = "";
        $("pennies").value = "";
        $("cents").focus();
        $("cents").select();
    }
}

// makeChange function is used to convert the entered cents to quarters, dimes, nickles and pennies.
function makeChange(cents) {
    var quarters = parseInt(cents / 25);
    cents = cents % 25;
    var dimes = parseInt(cents / 10);
    cents = cents % 10;
    var nickels = parseInt(cents / 5);
    cents = cents % 5;
    var pennies = parseInt(cents / 1);
    $("quarters").value = quarters;
    $("dimes").value = dimes;
    $("nickels").value = nickels;
    $("pennies").value = pennies;
    $("cents").focus();
}

//   when window loads the processEntries function in  it will be executed if user clicks on calculate button
window.onload = function () {
    $("calculate").onclick = processEntries;
    // the below focus method is used to focus on the input box 
    $("cents").focus();
};