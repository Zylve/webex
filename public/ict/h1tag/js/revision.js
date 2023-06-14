let revealed = false;

function revealQuestion() {
    if(revealed === false) {
        revealed = true;
        document.getElementById("q1").innerText = "What does CPU stand for?";
        document.getElementById("q1b").innerText = "Hide Question";
    } else {
        revealed = false;
        document.getElementById("q1").innerText = "Question Hidden";
        document.getElementById("q1b").innerText = "Reveal Question";
    }
}