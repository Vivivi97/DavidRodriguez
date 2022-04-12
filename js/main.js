$(document).ready(function() {
	var typed = new Typed('.typed-1', {
		strings: ['Web developer.', 'Web designer.', 'content creator.', 'programmer.'],
		typeSpeed:45,
		backSpeed:0,
		startDelay:200,
		backDelay:2200,
		loop:true,
		loopCount:false,
		showCursor:true,
		cursorChar:"_",
		attr:null
	});
	
	/* ANIMACION DE SCROLL */
	$("#nav").click(function() {
		$([document.documentElement, document.body]).animate({
			scrollTop: $("#sobremi").offset().top
		}, 600);
	});
	$("#nav2").click(function() {
		$([document.documentElement, document.body]).animate({
			scrollTop: $("#habilidades").offset().top
		}, 600);
	});
	$("#nav3").click(function() {
		$([document.documentElement, document.body]).animate({
			scrollTop: $("#educacion").offset().top
		}, 800);
	});
	$("#nav4").click(function() {
		$([document.documentElement, document.body]).animate({
			scrollTop: $("#colaboraciones").offset().top
		}, 900);
	});
	$("#nav5").click(function() {
		$([document.documentElement, document.body]).animate({
			scrollTop: $("#cursos").offset().top
		}, 900);
	});
	jQuery('.scroll-body').on('click', function(event) {
		event.preventDefault();
		jQuery('html, body').animate({scrollTop: $(".contenedor-general").offset().top}, 600);
		return false;
	});
	
	/* MENU RESPONSIVE */
	$('.barra-menu-span').on('click',function(){
		$('.header-menu').slideToggle();
	});
	
	/*DETECTAR SCROLL*/
	var windowHeight = 694;
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if(scroll > windowHeight){
			$('.contenedor-arrow').addClass('display-block');
		} else{
			$('.contenedor-arrow').removeClass('display-block');
		}
	});
	
	/*PAGINA DE CARGA*/
	$(".contenedor-loading").fadeOut("slow");
});