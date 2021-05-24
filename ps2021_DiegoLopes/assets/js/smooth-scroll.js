document.querySelectorAll('a[href^="#"]').forEach(function (element) {
    if (!element.hash) return;
    if (element.origin + element.pathname !== self.location.href) return;
    
    (function (destination) {
        element.addEventListener('click', function (event) {
            window.scrollTo({
                top: destination.offsetTop,
                behavior: 'smooth'
            });
            event.preventDefault();
        }, false);
    })(document.querySelector(element.hash));
});