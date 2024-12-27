! function(e) {
    "use strict";
    e('.navbar-sidenav [data-toggle="tooltip"]').tooltip({
        template: '<div class="tooltip navbar-sidenav-tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
    }), e("#sidenavToggler").click(function(o) {
        o.preventDefault(), e("body").toggleClass("sidenav-toggled"), e(".navbar-sidenav .nav-link-collapse").addClass("collapsed"), e(".navbar-sidenav .sidenav-second-level, .navbar-sidenav .sidenav-third-level").removeClass("show")
    }), e(".navbar-sidenav .nav-link-collapse").click(function(o) {
        o.preventDefault(), e("body").removeClass("sidenav-toggled")
    }), e("body.fixed-nav .navbar-sidenav, body.fixed-nav .sidenav-toggler, body.fixed-nav .navbar-collapse").on("mousewheel DOMMouseScroll", function(e) {
        var o = e.originalEvent,
            a = o.wheelDelta || -o.detail;
        this.scrollTop += 30 * (a < 0 ? 1 : -1), e.preventDefault()
    /*}), e(document).scroll(function() {
        e(this).scrollTop() > 100 ? e(".scroll-to-top").fadeIn() : e(".scroll-to-top").fadeOut() */
    }), e('[data-toggle="tooltip"]').tooltip(), e(document).on("click", "a.scroll-to-top", function(o) {
        var a = e(this);
        e("html, body").stop().animate({
            scrollTop: e(a.attr("href")).offset().top
        }, 1e3, "easeInOutExpo"), o.preventDefault()
    }),
	$('#myTab a').on('click', function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	})
	
}(jQuery);