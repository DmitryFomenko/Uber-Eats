'use strict';

var limit     = $(window).height()/3,
    $backToTop = $('#toTop');
$(window).scroll(function () {
    if ( $(this).scrollTop() > limit ) {
        $backToTop.fadeIn();
    } else {
        $backToTop.fadeOut();
    }
});
$backToTop.click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 400);
    return false;
});
