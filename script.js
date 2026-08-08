const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        button.blur();
        const buttonValue = button.textContent;

        if (buttonValue === "C") {
            display.value = "";
        }
        else if (buttonValue === "⌫") {
            display.value = display.value.slice(0, -1);
        }
        else if (buttonValue === "=") {
            try {
                display.value = eval(display.value);
            }
            catch {
                display.value = "Error";
            }
        }
        else {
            display.value += buttonValue;
        }
    });
});

document.addEventListener("keydown", event => {
    const key = event.key;

    if (
        (key >= "0" && key <= "9") ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "."
    ) {
        display.value += key;
    }
    else if (key === "Enter") {
        try {
            display.value = eval(display.value);
        }
        catch {
            display.value = "Error";
        }
    }
    else if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }
    else if (key === "Escape") {
        display.value = "";
    }
});