$('.mobile-btn').click(
	function () {					
		$('.mobile-menu').slideToggle('fast');
	}
);
$('.mobile-menu a').click(function(){
	$('.mobile-menu').slideToggle('fast');	
})

$('a[href^="#"]').bind('click.smoothscroll',function (e) { //scroll to block when you click on menu
    e.preventDefault();
    var target = this.hash,
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 500, 'swing', function () {
        window.location.hash = target;
    });
 });

var menu_selector = ".main-menu"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню. 
function onScroll(){
	var scroll_top = $(document).scrollTop();
	$(menu_selector + " a").each(function(){
		var hash = $(this).attr("href");
		var target = $(hash);
		if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
			$(menu_selector + " a.active").removeClass("active");
			$(this).addClass("active");
		} else {
			$(this).removeClass("active");
		}
	});
}
