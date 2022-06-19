export default function animateInOnScroll(element: Element) {
    const {top, bottom} = element.getBoundingClientRect();
    if (top > 0.75 * window.innerHeight || bottom < .25 * window.innerHeight) {
        element.classList.add('hide')
    }
    else {
        element.classList.remove('hide')
    }
}