function play(id) {
    let cpu = Math.floor(Math.random() * 3);;

    if(id == 0 && cpu == 0) {
        document.getElementById("result").innerHTML = "Rock, It's a tie!";
    } else if(id == 0 && cpu == 1) {
        document.getElementById("result").innerHTML = "Paper, You lose!";
    } else if(id == 0 && cpu == 2) {
        document.getElementById("result").innerHTML = "Scissors, You win!";
    } else if(id == 1 && cpu == 0) {
        document.getElementById("result").innerHTML = "Rock, You win!";
    } else if(id == 1 && cpu == 1) {
        document.getElementById("result").innerHTML = "Paper, It's a tie!";
    } else if(id == 1 && cpu == 2) {
        document.getElementById("result").innerHTML = "Scissors, You lose!";
    } else if(id == 2 && cpu == 0) {
        document.getElementById("result").innerHTML = "Rock, You lose!";
    } else if(id == 2 && cpu == 1) {
        document.getElementById("result").innerHTML = "Paper, You win!";
    } else if(id == 2 && cpu == 2) {
        document.getElementById("result").innerHTML = "Scissors, It's a tie!";
    }
}