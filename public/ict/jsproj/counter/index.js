let count = 0;

function decrease() {
    count--;
    update();
}

function increase() {
    count++;
    update();
}

function reset() {
    count = 0;
    update();
}

function update() {
    document.getElementById("counter").innerHTML = count;

    if(count === 0) {
        document.getElementById("counter").style.color = "black";
    } else if(count > 0) {
        document.getElementById("counter").style.color = "green";
    } else if(count < 0) {
        document.getElementById("counter").style.color = "red";
    }
}