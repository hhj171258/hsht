// JavaScript Document
$(function(){
	menu("#header .depth1 li", ".depth2");
	
	var mySwiper = new Swiper ('.swiper-container', {
		autoplay: true						   
	});
	
	familySite("#footer .footer-inner div > a","#footer .footer-inner div ul" )
})

function menu(e1, e2){
	$(e1).on("mouseover", function(){
		$(this).find(e2).stop().slideDown(180);
	})
	$(e1).on("mouseleave",function(){
		$(this).find(e2).stop().slideUp(180);
	})
}

function familySite(btn, e){
	$(btn).on("click", function(){
		$(btn).toggleClass("on");
		$(e).fadeToggle(180);
	})
}