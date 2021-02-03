$(window).scroll(function () {
    if($(this).scrollTop() > 500){
        $('.up_arrow').fadeIn();
    } else {
        $('.up_arrow').fadeOut();
    }
});
// more btn
$('.block9__moreBtn').each(function (i) {
    $(this).on('click', function (e) {
        e.preventDefault();
        $('.block9__item').eq(i).removeClass('block9__click_active');
        $('.block9__itemMore').eq(i).removeClass('block9__itemMore_active');
    })
});
// $('.block9__backBtn').each(function (i) {
//     $(this).on('click', function (e) {
//         e.preventDefault();
//         $('.block9__item').eq(i).addClass('block9__click_active');
//         $('.block9__itemMore').eq(i).removeClass('block9__itemMore_active');
//     })
// });
// back btn
$('.block9__backBtn').each(function (i) {
    $(this).on('click', function (e) {
        e.preventDefault();
        $('.block9__item').eq(i).addClass('block9__click_active');
        $('.block9__itemMore').eq(i).addClass('block9__itemMore_active');
    })
});
$('.calendar-container').calendar({
    date: new Date() // today
});