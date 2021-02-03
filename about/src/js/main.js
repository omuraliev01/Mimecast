$(window).scroll(function () {
    if($(this).scrollTop() > 500){
        $('.up_arrow').fadeIn();
    } else {
        $('.up_arrow').fadeOut();
    }
});
