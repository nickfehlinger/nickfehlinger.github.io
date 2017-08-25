$(document).ready(function(){
	var controller = new ScrollMagic.Controller();

	$('.project').each(function(){
		var projects = new ScrollMagic.Scene({
			triggerElement: this,
			duration: '70%',
			triggerHook: .7
		})
		.setClassToggle(this, 'fade-in')
		.addTo(controller);
	})
});