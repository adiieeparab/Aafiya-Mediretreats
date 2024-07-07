$(document).ready(function() {
    // Hide the loading screen after 5 seconds
    setTimeout(function(){
        $('#loading').fadeOut('slow');
    }, 5000);

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

    // Initialize Owl Carousel
      $("#carousel").owlCarousel({
        lazyLoad: true,
        items: 3,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });
});
