function isElementInViewport(element, percent) {
    const rect = element.getBoundingClientRect();
    const height = rect.bottom - rect.top;
    percent /= 100;
    percent = 1 - percent;

    let isInViewport = (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom - (percent * height) <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );

    return isInViewport;
}

export default function detectScroll() {
    const fadeElements = document.querySelectorAll('.fade-element');
  
    fadeElements.forEach((element) => {
        let delay = 0;
        let percent = 0;

        for(let i = 0; i < element.classList.length; i++) {
            if(element.classList[i].startsWith('delay-')) {
                delay = parseInt(element.classList[i].split('-')[1]);
                break;
            }
        }

        for(let i = 0; i < element.classList.length; i++) {
            if(element.classList[i].startsWith('percent-')) {
                percent = parseInt(element.classList[i].split('-')[1]);
                break;
            }
        }

        if(element.classList.contains('fade-element')) {
            if(isElementInViewport(element, percent)) {
                setTimeout(() => {
                    element.classList.add('fade-in');
                }, delay)
            }
        }

        element.addEventListener("transitionend", (event) => {
            element.classList.remove('fade-element');
        });
    });
}