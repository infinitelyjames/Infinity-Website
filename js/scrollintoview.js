const observer = new IntersectionObserver(entries => {
    //console.log(entries);
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("revealhidden");
        }
        else {
            entry.target.classList.add("revealhidden");
        }
    });
});

for (const element of document.querySelectorAll(".reveal")) {
    observer.observe(element);
}

    