$(document).ready(function() {
    $(".aboutme").fadeIn(4000);
    $(".image").fadeIn(4000);
    $(window).resize(function() {
        $(".nav").css("height", $(".openbtn").outerHeight(true));
        $(".nav").css("max-height", $(".openbtn").outerHeight(true));
    });
    // $("#click").click(function() {
    //     $("#cf2 img.profile").toggleClass("transparent");
    //     $("#cf2 img#me").toggleClass("nont");
    // });
});