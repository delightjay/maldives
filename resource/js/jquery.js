$(document).ready(function(){
        $('.main-slide').slick({
        infinite: true,
        arrows: false,
        accessibility: false,
        autoplay: true,
        autoplaySpeed: 4000,
        draggable: false,
        fade: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        touchMove: false
        });
        $('#info').click(function(){
        var offset = $('#info-section').offset();
        $('html').animate({scrollTop : offset.top}, 400);
        });
        $('#things').click(function(){
        var offset = $('#things-section').offset();
        $('html').animate({scrollTop : offset.top}, 400);
        });
        $('#spot').click(function(){
        var offset = $('#spot-section').offset();
        $('html').animate({scrollTop : offset.top}, 400);
        });
});
$(window).scroll(function() {
  	if($(this).scrollTop() > 824) {
        $("header").css({'position':'fixed','top':'0px'});
	}
	else {
        $("header").css({'position':'','top':''});
	}
});