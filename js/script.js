setInterval(function(){
    $("#slide ul").delay(3000);
    $("#slide ul").animate({
        marginLeft: '-1920px'
    });
    $("#slide ul").delay(3000);
    $("#slide ul").animate({
        marginLeft: '-3840px'
    });
    $("#slide ul").delay(3000);
    $("#slide ul").animate({
        marginLeft: '0px'
    });
});

// submenu
$(".submenu").hide();
$(".gnb li a").mouseenter(function(){
    $(".submenu").stop().slideDown()
});
$("nav").mouseleave(function(){
    $(".submenu").stop().slideUp()
});