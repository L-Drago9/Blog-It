const responsive = {
    0: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    },
}
$(document).ready(function() {
    $('.toggle-collapse').click(function() {
        $('.nav').toggleClass('collapse');
    });

    // owl-carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });

    // animation on scroll
    AOS.init();
});