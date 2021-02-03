$(document).ready(function () {
    //слайдер
    let owl = $('#team');
    owl.owlCarousel({
        loop: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        margin:10,
        responsiveClass:true,
        responsive:{
            1000:{
                items:3,
                nav:true,
                loop:true,
            },
            365:{
                items:2,
                nav:false
            },
            0:{
                items:1,
                nav:true
            },
        }
        // autoplayHoverPause: true
    });

// Go to the next item
    $('.customNext').click(function () {
        owl.trigger('next.owl.carousel');
    });
// Go to the previous item
    $('.customPrev').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    });
    $('.header__burger').on('click', function () {
        $('.header__burger').toggleClass('header__burger_active');
        $('.nav-menu').toggleClass('nav-menu_active');
    });



    $(window).scroll(function () {
        if($(this).scrollTop() > 500){
            $('.up_arrow').fadeIn();
        } else {
            $('.up_arrow').fadeOut();
        }
    });
// слайдер2
    let owl2 = $('#events');
        owl2.owlCarousel({
            items: 1,
            loop: false,
            // autoplay: true,
            // autoplaySpeed: 2000,
            margin:10,
            dots: false,
            responsiveClass:true,
            responsive:{
                1000:{
                    items:3,
                    nav:false,
                    loop:true
                },
                365:{
                    items:1,
                    nav:false,
                    loop: true
                },
                0:{
                    items:1,
                    nav:true
                },
            }
        });
});

