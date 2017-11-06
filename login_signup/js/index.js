$("#login-link").click(function() {
    $("#login-form").delay(105).fadeIn(100);
    $("#register-form").fadeOut(100);
    $("#login-link").css("color", "#7BE5A0");
    $("#register-link").css("color", "#4E5166");
    $(this).addClass("active");
});

$("#register-link").click(function() {
    $("#register-form").delay(105).fadeIn(100);
    $("#login-form").fadeOut(100);
    $("#login-link").removeClass("active");
    $("#login-link").css("color", "#4E5166");
    $("#register-link").css("color", "#7BE5A0");
    $(this).addClass("active");
});