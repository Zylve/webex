function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    const height = rect.bottom - rect.top;
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom - (0.3 * height) <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

export default function detectScroll() {
    const fadeElements = document.querySelectorAll('.fade-element');
  
    fadeElements.forEach((element) => {
        if (isElementInViewport(element)) {
            element.classList.add('fade-in');
        }
    });
}