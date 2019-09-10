$(document).ready(function(){
    $(".fa-times").click(function() {
        $(".sidebar_menu").addClass("hide_menu");
        $(".toggle_menu").addClass("opecity_one");
    });

    $(".toggle_menu").click(function(){
        $(".sidebar_menu").removeClass("hide_menu");
        $(".toggle_menu").removeClass("opecity_one");

    });
});

