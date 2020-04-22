$(document).ready(function () {


    $("h2.good").click(function () {

        $("div#goodnews").animate({
            bottom: -50,
            opacity: '1'
        }, "fast");

        $("div#bad-intro").delay(1000).animate({
            opacity: '1',
            bottom: 0
        }, 3000);

        $("div.link a").css({
            color: "orangered",
            opacity: '1'
        }, "slow");

        $("div#goodnews a").delay(1000).animate({
            fontSize: 40
        }, "fast");

    });



    $("h2.bad").click(function () {

        $("div#badnews").animate({
            bottom: -50,
            opacity: '1'
        }, "slow");

        $("div.link a").css({
            color: "orangered",
            opacity: '1'
        }, "slow");

    });

    $("#market-slide").scroll(function () {
        $(this).css("background-color", "green");

    });

});




//    $("#good-narrative").click(function () {
//        var one = $("#goodinfo");
//
//
//        $("span").delay(1000).animate({
//            fontSize: '30px'
//        }, "slow");
//
//
//        one.animate({
//            opacity: '1',
//            top: '200px'
//        }, 500);
//    });
//
////WHEN YOUR MOUSE LEAVES THE SUB LINK GOES BACK TO HIDING
//    $("#good-narrative").mouseleave(function () {
//
//        $("div#goodinfo").delay(2000).animate({
//            opacity: '0',
//            top: '0px'
//        });
//
//
//    });
//    
//    //    CLICK BAD and
//    $("#bad-narrative").click(function () {
//        var two = $("#badinfo");
//
//        two.animate({
//            opacity: '1',
//            top: '200px'
//        }, 500);
//
//        $("span").delay(1000).animate({
//            fontSize: '30px'
//        }, "slow");
//        $("#badinfo a").css("color", "orangered");
//
//    });
//
//
////WHEN YOUR MOUSE LEAVES THE SUB LINK GOES BACK TO HIDING
//    $("#bad-narrative").mouseleave(function () {
//
//        $("div#badinfo").delay(2000).animate({
//            opacity: '0',
//            top: '0px'
//        });
//
//
//    });
//    
