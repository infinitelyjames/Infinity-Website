function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}

function reveal() {
    console.log("Scrolling");
    var items = document.querySelectorAll('.reveal');
    for (var i = 0; i < items.length; i++) {
        if (isScrolledIntoView(items[i])) {
            //items[i].classList.add('element-visible');
            items[i].classList.remove('default-hidden');
        } else {
            items[i].classList.add('default-hidden');
            //items[i].classList.remove("element-visible");
        }
    }
}

window.addEventListener("scroll", reveal);