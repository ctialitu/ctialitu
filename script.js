$(document).ready(function () {
    $("#new_id").click(function () {
        $("#new_id").toggleClass("clickMenuTow");
        $("#opening").toggleClass("opened");
    });
    $("#nav2").click(function () {
        $('html,body').animate({
                scrollTop: $("#point1").offset().top
            },
            'slow');
    });
    $("#nav3").click(function () {
        $('html,body').animate({
                scrollTop: $("#point2").offset().top
            },
            'slow');
    });
    $("#nav4").click(function () {
        $('html,body').animate({
                scrollTop: $("#point3").offset().top
            },
            'slow');
    });
    $("#nav5").click(function () {
        $('html,body').animate({
                scrollTop: $("#point4").offset().top
            },
            'slow');
    });
    $("#nav6").click(function () {
        $('html,body').animate({
                scrollTop: $("#point5").offset().top
            },
            'slow');
    });
    $("#nav21").click(function () {
        $('html,body').animate({
                scrollTop: $("#point1").offset().top
            },
            'slow');
    });
    $("#nav31").click(function () {
        $('html,body').animate({
                scrollTop: $("#point2").offset().top
            },
            'slow');
    });
    $("#nav41").click(function () {
        $('html,body').animate({
                scrollTop: $("#point3").offset().top
            },
            'slow');
    });
    $("#nav51").click(function () {
        $('html,body').animate({
                scrollTop: $("#point4").offset().top
            },
            'slow');
    });
    $("#nav61").click(function () {
        $('html,body').animate({
                scrollTop: $("#point5").offset().top
            },
            'slow');
    });

    $("#mail").blur(function () {
        var string1 = $("#mail").val();
        var string_mass = string1.match(/[a-z][a-z0-9\.]+[a-z]+\@[a-z]+\.[a-z]{2,}/ig);
        if (string_mass !== null) {
            var string_filter = string_mass.join();
            if (string_filter === string1) {
                $("#mail").removeClass('red');
            } else {
                $("#mail").addClass('red');
            }
        } else {
            $("#mail").addClass('red');
        }
    });
    $("#mail").focus(function () {
        $("#mail").removeClass('red');
    })

});
