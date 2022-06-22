jQuery(document).ready(function ($) {
    window.onscroll = function () {
        if (window.pageYOffset > 140) {
            $('#header').addClass('active');
        } else {
            $('#header').removeClass('active');
        }
    };

    // Isotop Config
    let buttons = $('#servicos .button-group button');

    // filter elements with class on data-filter button
    buttons.click(function (e) {
        $('#servicos .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('#servicos .grid').isotope({
            filter: selector,
        });
    });

    // fix filter on page load
    $(window).on('load', function () {
        $('#servicos .grid').isotope({
            filter: '*',
        });
    });

    // Magnific-Popup Config
    $('.grid .popup-link').magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
            tPrev: "Anterior",
            tNext: "Próxima",
            tCounter: "%curr% de %total%"
        }
    });

    // Owl Carousel
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 6000,
        dots: true,
        lazyLoad: true,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 2,
            },
        },
    });
});

/*
Filter Layout:
https://isotope.metafizzy.co/

Light Box Effect:
https://dimsemenov.com/plugins/magnific-popup/

Owl Carousel
https://owlcarousel2.github.io/OwlCarousel2/
*/