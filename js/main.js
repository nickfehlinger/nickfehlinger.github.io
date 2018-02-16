document.addEventListener("DOMContentLoaded", function(){
	// Nav section JS
	var navSection = document.querySelector("#nav"),
		color,
		navBar = document.querySelector("#nav .nav"),
		navButtons = [
		{
			name: 'Home',
			id: 'homeNav',
			href: '#home',
			color: '#444C5C'
		},
		{
			name: 'Bio',
			id: 'bioNav',
			href: '#bio',
			color: '#CE5A57'
		},
		{
			name: 'Portfolio',
			id: 'portfolioNav',
			href: '#portfolio',
			color: '#78A5A3'
		},
		{
			name: 'Contact',
			id: 'contactNav',
			href: '#contact',
			color: '#E1B16A'
		}
		];
		
	function LoadNav(){
		for(i=0; i < navButtons.length; i++ ){
			navBar.innerHTML += "<li id='" + navButtons[i]['id'] + "'><a href = '" + navButtons[i]['href'] + "'>" + navButtons[i]['name'] + "</a></li>";
		}
	}
	LoadNav();
	navSection.onmouseover = function(e){
		var current;
		if(e.target.tagName === 'LI'){
			current = e.target;
			console.log(e.target);
		}else if(e.target.tagName === 'A'){
			current = e.target.parentNode;
		}
		for (i=0; i < navButtons.length; i++){
			if(navButtons[i]['id'] === current.id){
				color = navButtons[i]['color'];
				navSection.style.backgroundColor = color;
				current.childNodes[0].style.color = '#fff';
			}else{
				document.querySelector('#' + navButtons[i]['id']).childNodes[0].style.color = navButtons[i]['color'];
			}
		}
		document.querySelectorAll('#nav li').forEach(function(btn){
			btn.style.color = '#fff';
		})
	}
	navSection.onmouseleave = function(){
		navSection.style.backgroundColor = '#fff';
		document.querySelectorAll('#nav .nav li a').forEach(function(e){
			e.style.color = '#444';
		});
	}
	// Home page JS
	var thing = document.querySelector('#things'),
		i = 0,
		things = [
						'apps',
						'ideas',
						'platforms',
						'connections',
						'skills',
						'code',
						'change',
						'goals',
						'websites',
						'things'
					],
		currentThing,
		setTime = setInterval(newThing, 750);
	function newThing(){
		if ( i > (things.length - 1) ){
			i = 0;
			currentThing = things[i];
			thing.innerText = currentThing;
			i++;
		}else{
			currentThing = things[i];
			thing.innerText = currentThing;
			i++;
		}
	};
	// Bio JS

	// Portfolio JS
	var portHeight = document.querySelector('#portfolio').clientHeight,
		windowHeight = window.innerHeight;
	console.log("portfolio height is: " + portHeight + " and window height is: " + windowHeight)

	// Contact JS

	// ScrollMagic JS
	if ( (portHeight - 50) < windowHeight ) {
		var controller = new ScrollMagic.Controller({
			globalSceneOptions: {
				triggerHook: 'onLeave'
			}
		});
		var controller1 = new ScrollMagic.Controller({container: '#portfolio'});

		var slides = document.querySelectorAll('.row.section');
		for (var i = 0; i < slides.length; i++ ){
			new ScrollMagic.Scene({
				triggerElement: slides[i]
			}).setPin(slides[i]).addTo(controller);
		}
	}else{
		document.querySelectorAll('.row.section').forEach(function(section){
			section.style.marginBottom = 0;
		});
	}
})
