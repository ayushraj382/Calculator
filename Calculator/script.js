var display = document.getElementById("display");

function number(num) {
    display.value += num;
}

function result() {
    display.value = eval(display.value);
}

function clearResult() {
    display.value = "";
}

function deleteChar() {
    let char = document.getElementById("display");
    let remove = char.value;
    remove = remove.slice(0, -1);
    char.value = remove;
}