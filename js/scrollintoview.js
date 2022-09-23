const observer = new IntersectionObserver(entries => {
    //console.log(entries);
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("revealhidden");
            entry.target.classList.add("revealshown");
        }
        else {
            entry.target.classList.add("revealhidden");
            entry.target.classList.remove("revealshown");
        }
    });
});

for (const element of document.querySelectorAll(".reveal")) {
    observer.observe(element);
}

    