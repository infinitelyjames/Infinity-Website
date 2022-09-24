const observer = new IntersectionObserver(entries => {
    //console.log(entries);
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("revealhiddenright");
            entry.target.classList.add("revealshown");
        }
        else {
            entry.target.classList.add("revealhiddenright");
            entry.target.classList.remove("revealshown");
        }
    });
});

for (const element of document.querySelectorAll(".reveal")) {
    observer.observe(element);
}

    