function info_box_resize(){
	var info_box_height = jQuery('.info-box').height();
	jQuery('.info-box').css({ 'margin-top' : ~info_box_height+5 });
	//jQuery(".info-box").hover(
	jQuery(".info-box").find('img.header-arrow').eq(0).toggle(
	  function () {
		if (!jQuery(this).closest(".info-box").hasClass('opened')) {
			jQuery(this).closest(".info-box").stop().animate({ 'margin-top' : 0 }, 300, 'swing', function() {
				jQuery(this).addClass('opened');
			});
		}
	  },
	  function () {
		if (jQuery(this).closest(".info-box").hasClass('opened')) {
			jQuery(this).closest(".info-box").stop().animate({ 'margin-top' : ~info_box_height+5 }, 300, 'swing', function() {
				jQuery(this).removeClass('opened');
			});
		}
	  }
	);
	jQuery(".info-box").click(
		function() {},
		function() {
			if (jQuery(this).hasClass('opened')) {
				jQuery(this).stop().animate({ 'margin-top' : ~info_box_height+5 },300, 'swing', function() {
				jQuery(this).removeClass('opened');
			});
		}
	  }
	);
	jQuery(".info-box").click(
		function() {},
		function() {
			if (jQuery(this).hasClass('opened')) {
				jQuery(this).stop().animate({ 'margin-top' : ~info_box_height+5 }, 300, 'swing', function() {
					jQuery(this).removeClass('opened');
				});
			}
		}
	);
}
jQuery(document).ready(function(){
	info_box_resize();
	jQuery(window).on("resize.infobox", function(){
		info_box_resize();
	});
});