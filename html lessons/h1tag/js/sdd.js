(function (window, document, undefined) {
    window.onload = init;

    function init() {
        let answers = document.getElementsByClassName("answer");

        for(let i = 0; i < answers.length; i++) {
            answers[i].style.display = "none";
        }
    }

})(window, document, undefined);

function reveal(element, question) {
    if (element.innerHTML == "Reveal Answer") {
        element.innerHTML = "Hide Answer";
        document.getElementById("q" + question + "a").style.display = "block";
    } else {
        element.innerHTML = "Reveal Answer";
        document.getElementById("q" + question + "a").style.display = "none";
    }
}