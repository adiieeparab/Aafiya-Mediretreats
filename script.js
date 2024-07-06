document.addEventListener('DOMContentLoaded', function () {
    // Page loader
    setTimeout(function() {
        document.getElementById('page-loader').style.display = 'none';
    }, 2000); // Adjust time as necessary

    // Initialize Owl Carousel
    $("#carousel").owlCarousel({
        lazyLoad: true,
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });

    // Lazy loading images
    let lazyImages = document.querySelectorAll('img.lazyload');
    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove('lazyload');
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    }

    // Mobile menu toggle
    document.getElementById('mobile-menu').addEventListener('click', function() {
        let menu = document.getElementById('menu');
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    });
});
