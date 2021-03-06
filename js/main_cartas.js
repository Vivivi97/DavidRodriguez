$(document).ready(function() {
	
	/* ANIMACION DE SCROLL */
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