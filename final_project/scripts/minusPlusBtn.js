// function - increase number
function minusOne(id) {
    let number = parseInt(document.getElementById(id).value);
    if (number > 0) {
        number -= 1;
        document.getElementById(id).value = number;
    }
}

// function - decrease number
function plusOne(id) {
    let number = parseInt(document.getElementById(id).value) + 1;
    document.getElementById(id).value = number;
}