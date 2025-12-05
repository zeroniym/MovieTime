document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add("fade-in");
});

document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e) {
        const href = this.getAttribute("href");
        if(href && !href.startsWith("#")) {
            e.preventDefault();
            document.body.classList.remove("fade-in");
            document.body.classList.add("fade-out");
            setTimeout(() => {
                window.location.href = href;
            }, 1000); // таймер теперь совпадает с 1s анимации
        }
    });
});
