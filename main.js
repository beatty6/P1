$(document).ready(function () {

    $("h2.good").animate({
        top: 0,
        opacity: '1'
    }, 2000);
    $("div#goodnews").delay(2000).animate({
        right: 0,
        opacity: '1'
    }, 2000);

    $("h2.bad").delay(4500).animate({
        top: 0,
        opacity: '1'
    }, 2000);


    $("div#badnews").delay(7500).animate({
        left: 0,
        opacity: '1'
    }, 2000);


    $("div.continue").delay(15000).animate({
        height: 20
    }, 500);

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop < $("div").offset().top) {
            $("div").css({
                "color": "red";
            });
        }
    });
   
});
