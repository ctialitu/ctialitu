$(document).ready(function () {

    var last_scroll = 0;
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $('#hidden1').fadeOut(200);
            $('#hidden2').fadeOut(0);
            if (scroll <= 300 || last_scroll > scroll)
                $('#hidden3').fadeIn(200);
            else
                $('#hidden3').fadeOut(200);
        } else {
            $('#hidden1').fadeIn(200);
            $('#hidden2').fadeIn(200);
            $('#hidden3').fadeOut(0);
        }
        last_scroll = scroll;
    });

    $('#menuclick').click(function () {
       $('#menuclick').toggleClass('change');
       $('#leftMenu').animate({width: "toggle"});
    });

	$("#home").click(function() {
    $('html,body').animate({
        scrollTop: $(".header").offset().top},
        'slow');
});
    $("#features").click(function() {
        $('html,body').animate({
                scrollTop: $(".second-sec").offset().top},
            'slow');
    });
    $("#time").click(function() {
        $('html,body').animate({
                scrollTop: $(".third-sec").offset().top},
            'slow');
    });
    $("#price").click(function() {
        $('html,body').animate({
                scrollTop: $(".forth-sec").offset().top},
            'slow');
    });

    $("#home1").click(function() {
        $('html,body').animate({
                scrollTop: $(".header").offset().top},
            'slow');
    });
    $("#features1").click(function() {
        $('html,body').animate({
                scrollTop: $(".second-sec").offset().top},
            'slow');
    });
    $("#time1").click(function() {
        $('html,body').animate({
                scrollTop: $(".third-sec").offset().top},
            'slow');
    });
    $("#price1").click(function() {
        $('html,body').animate({
                scrollTop: $(".forth-sec").offset().top},
            'slow');
    });

    $("#home2").click(function() {
        $('#menuclick').toggleClass('change');
        $('#leftMenu').animate({width: "toggle"});
        $('html,body').animate({
                scrollTop: $(".header").offset().top},
            'slow');
    });
    $("#features2").click(function() {
        $('#menuclick').toggleClass('change');
        $('#leftMenu').animate({width: "toggle"});
        $('html,body').animate({
                scrollTop: $(".second-sec").offset().top},
            'slow');
    });
    $("#time2").click(function() {
        $('#menuclick').toggleClass('change');
        $('#leftMenu').animate({width: "toggle"});
        $('html,body').animate({
                scrollTop: $(".third-sec").offset().top},
            'slow');
    });
    $("#price2").click(function() {
        $('#menuclick').toggleClass('change');
        $('#leftMenu').animate({width: "toggle"});
        $('html,body').animate({
                scrollTop: $(".forth-sec").offset().top},
            'slow');
    });
// 		$("#maintx2").click(function() {
//     $('html,body').animate({
//         scrollTop: $(".sec2").offset().top},
//         'slow');
// });
// 			$("#maintx3").click(function() {
//     $('html,body').animate({
//         scrollTop: $(".sec3").offset().top},
//         'slow');
// });
});