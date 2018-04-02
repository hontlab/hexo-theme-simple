$(window).scroll(function() {
	// 1200px 이상에서 사용할 JavaScript
	if (matchMedia("screen and (min-width: 1200px)").matches) {
  		$(window).scrollTop() > $(window).height()*0.5 ? $("#rocket").addClass("show") : $("#rocket").removeClass("show");
	}
});

$("#rocket").click(function() {
    $("#rocket").addClass("launch");
    $("html, body").animate({
        scrollTop: 0
    }, 1000, function() {
        $("#rocket").removeClass("show launch");
    });
    return false;
});