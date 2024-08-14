let display = document.getElementById("display");

function appendCharacter(char) {
    display.value += char;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
