(function ($) {
    "use strict";

    $(window).on('load', function(){
        // ------- Prealoder ------
        $("#preloader").delay(300).fadeOut("slow");
    });

    $(document).ready(function () {


        // ------------- sticky header --------------

        function sticky_header(){
            var wind = $(window);
            var sticky = $('header');
            wind.on('scroll', function () {
                var scroll = wind.scrollTop();
                if (scroll < 100) {
                    sticky.removeClass('sticky');
                } else {
                    sticky.addClass('sticky');
                }
            });
        }
        sticky_header();

        
        

        // ------------- back to top --------------

        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 600) {
                $('.back-to-top').fadeIn(200)
            } else {
                $('.back-to-top').fadeOut(200)
            }
        });

        $('.back-to-top').on('click', function (event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: 0,
            }, 1500);
        });




        // ------------- Hamburger menu --------------

        $('.hamburger-menu').on('click', function () {
            $('.hamburger-menu .line-top, .offcanvs_menu').toggleClass('current');
            $('.hamburger-menu .line-center').toggleClass('current');
            $('.hamburger-menu .line-bottom').toggleClass('current');
        });




        // ------------- partner logos slider --------------

        $('.partner_logos_slider').owlCarousel({
            autoWidth: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 1500,
            autoplayHoverPause: true,
            smartSpeed: 700,
            nav: false,
            dots: false,
        });




        // ------------- accordion background toggle --------------

        $('.accordion_button').click(()=>{
            $('.accordion_button').parent().removeClass('open');
            $('.accordion_button:not(.collapsed)').parent().addClass('open');
        });



        // ------------- popup-youtube --------------

        $('.popup-youtube').magnificPopup({
            disableOn: 0,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
    
            fixedContentPos: false
        });



        // ------------- partner logos slider 1 --------------

        $('.partner_logos_slider1').owlCarousel({
            autoWidth: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 1500,
            autoplayHoverPause: true,
            smartSpeed: 700,
            nav: false,
            dots: false,
        });



        // ------------- testimonial slider --------------

        $('.testimonial_slider').owlCarousel({
            loop: true,
            margin: 30,
            items: 1,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            smartSpeed: 1500,
            nav: false,
            dots: true,
        });




        // ------------- client testimonial slider --------------

        $('.client_testimonial_slider').owlCarousel({
            loop: true,
            margin: 30,
            items: 1,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            smartSpeed: 1500,
            nav: false,
            dots: true,
        });
        $('.owl-carousel.stylis_caro').owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            smartSpeed: 1500,
            nav: true,
            dots: false,
            stagePadding: 10,
            navText: [
                '<img src="img/caro_left.svg" alt="">',
                '<img src="img/caro_right.svg" alt="">'
            ],
        });

        $('.owl-carousel.customer_review_slider').owlCarousel({
            loop: true,
            margin: 30,
            items: 2,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            smartSpeed: 1500,
            nav: false,
            dots: false,
            stagePadding: 15,
            responsive: {
                0: {
                    items: 1
                },
                390: {
                    items: 1
                },
                575: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 2
                }
            }
        });
        // niceNumber
        $('input[type="number"]').niceNumber();
        
        $(".range-slider").ionRangeSlider({
            min: 0,
            max: 200,
            from: 0,
            to: 89,
            skin: "round",
            type: "double",
        });


        // ------------- slider --------------

        $('.usel').owlCarousel({
            loop: true,
            margin: 30,
            items: 5,
            autoplay: true,
            autoplayTimeout: 1500,
            autoplayHoverPause: true,
            nav: false,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                390: {
                    items: 2
                },
                575: {
                    items: 3
                },
                768: {
                    items: 4
                },
                992: {
                    items: 5
                }
            }
        });
        
    });

})(jQuery);

$(document).ready(function () {
    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 5;
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: false,
        autoplay: false,
        dots: false,
        loop: true,
        responsiveRefreshRate: 200,
        // navText: ['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function () {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            margin: 25,
            dots: false,
            nav: false,
            items: 3,
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: slidesPerPage,
            responsiveRefreshRate: 100,
            responsive:{
                0:{
                    margin: 15,
                },
                576:{
                    margin: 25,
                }
            }
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }
        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });
});