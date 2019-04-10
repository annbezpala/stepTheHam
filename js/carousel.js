$(".indicators-item:first-child").addClass("active");

function slide(target) {
    $(".indicators-item").removeClass("active").eq(target).addClass("active");
    // $("#slider ul li").animate({
    $(".slider-comments-block").animate({
        'right': + 1060 * target + 'px'
    }, 250);
}

$(".indicators-item").click(function() {
    var target = $(this).index();
    slide(target);

    //Stopped auto slide when user clicked
    clearInterval(timer);
    //Then started auto slide again
    timer = setInterval(function() {
        $('#next').trigger('click');
    }, 2500);

});

$("#next").click(function() {
    var target = $(".indicators-item.active").index();
    if (target === $(".indicators-item").length - 1) {
        target = -1;
    }
    target = target + 1;
    slide(target);

    //Stopped auto slide when user clicked
    clearInterval(timer);
    //Then started auto slide again
    timer = setInterval(function() {
        $('#next').trigger('click');
    }, 2500);

});

$("#prev").click(function() {
    var target = $(".indicators-item.active").index();
    if (target === 0) {
        target = $(".indicators-item").length;
    }
    target = target - 1;
    slide(target);

});
