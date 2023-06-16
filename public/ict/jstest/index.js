function start() {
    document.getElementById("start-button").style.display = "none";
    document.getElementById("question-box").style.display = "block";
}

function submit(id) {
    switch(id) {
        case 1:
            document.getElementById("response").innerText = "That is incorrect.";
            break;
            
        case 2:
            document.getElementById("response").innerText = "That is incorrect.";
            break;
            
        case 3:
            document.getElementById("response").innerText = "That is correct! Hamsters love to run on wheels.";
            break;
    }
}