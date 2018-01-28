var screenwidth= $(window).width();

if (screenwidth > 480) {
    // Animate image and text of home page
    $(document ).ready(() => {
        $('.me').addClass('magictime puffIn');
        $('aside h1').addClass('magictime slideLeftReturn');
        $('.about').addClass('magictime slideRightReturn');
    });	

    // Skills menu button
    $("#skills").on("click", () => {
        $("#h-container").css("display","none")
        $("#c-container").css("display","none")
        $("#s-container").css("display","flex")
        $('#s-container h1').addClass('magictime slideLeftReturn');
        $('#s-container p').addClass('magictime slideRightReturn');
    });

    // Home menu button
    $("#home").on("click", () => {
        $("#h-container").css("display","flex")
        $("#c-container").css("display","none")
        $("#s-container").css("display","none")
    });

    // Contact me menu button
    $("#contact").on("click", () => {
        $("#h-container").css("display","none")
        $("#c-container").css("display","flex")
        $("#s-container").css("display","none")
        $('#c-container p').addClass('magictime puffIn');
    });
} else {
    // Animate image and text of home page
    $(document ).ready(() => {
        $('.me').addClass('magictime puffIn');
        $('aside h1').addClass('magictime slideLeftReturn');
        $('.about').addClass('magictime slideRightReturn');
    });	

    // Skills menu button
    $("#skills").on("click", () => {
        $("#h-container").css("display","none")
        $("#c-container").css("display","none")
        $("#s-container").css("display","block")
        $('#s-container h1').addClass('magictime slideLeftReturn');
        $('#s-container p').addClass('magictime slideRightReturn');
    });

    // Home menu button
    $("#home").on("click", () => {
        $("#h-container").css("display","block")
        $("#c-container").css("display","none")
        $("#s-container").css("display","none")
    });

    // Contact me menu button
    $("#contact").on("click", () => {
        $("#h-container").css("display","none")
        $("#c-container").css("display","block")
        $("#s-container").css("display","none")
        $('#c-container p').addClass('magictime puffIn');
    });
}