$(document).ready(function(){
		$(".menu a, .header_hover a").mPageScroll2id({
			scrollSpeed: 800,
			offset: -1
		});
	// $("a[rel='m_PageScroll2id']").mPageScroll2id();
		$('.owl-carousel').owlCarousel({
  		// singleItem: true,
  		autoplay: true,
  		autoplayTimeout: 5000,
  		autoplaySpeed: 1000,
  		loop: true,
  		items: 1
 		});
});
// .the_team-footer

// Percent animation for scroll on this object
var show = true;
var target = $('.circle_progress');
var targetPos = target.offset().top;
var winHeight = $(window).height();
var scrollToElem = targetPos - winHeight;
$(window).scroll(function() {
  var winScrollTop = $(this).scrollTop();
  if ((winScrollTop > scrollToElem) && show==true) {
  	show=false;
    //сработает когда пользователь доскроллит к элементу
    $('.circle_progress').css('animation-play-state', 'running');
    //'spincrement'
    for(var i=1; i<4; i++) {
    	var elem = document.querySelector('.'+'span_percent_'+i);
    	$('.'+'span_percent_'+i).spincrement({
    		from: 0,
    		to: elem.innerText,
    		duration: 1300
    	});
    }
  }
});

//OnScreen
var os = new OnScreen({
    tolerance: 0,
    debounce: -50,
    container: window
});
os.on('enter', '._onScreen', (element, event) => {  
   		element.style.top = '80px';
   		element.style.opacity = '1';
   		element.style.transition = '.5s';
   	});
os.on('enter','._image_p', (element,event) => {
			element.style.top = '150px';
			element.style.opacity = '1';
			element.style.transition = '.5s';
});
os.on('leave','._image_p', (element,event) => {
			element.style.top = '200px';
			element.style.opacity = '0';
			element.style.transition = '.5s';
});
//the portfolio
var portfolio_first_layer = new OnScreen({
    tolerance: 0,
    debounce: 100,
    container: window
});
portfolio_first_layer.on('enter','.first_layer', (element,event) => {
			element.style.margin = '0px';
			element.style.opacity = '1';
			element.style.transition = '.5s';
});
var portfolio_second_layer = new OnScreen({
    tolerance: 0,
    debounce: 200,
    container: window
});
portfolio_second_layer.on('enter','.second_layer', (element,event) => {
			element.style.margin = '0px';
			element.style.opacity = '1';
			element.style.transition = '.5s';
});
var portfolio_third_layer = new OnScreen({
    tolerance: 0,
    debounce: 300,
    container: window
});
portfolio_third_layer.on('enter','.third_layer', (element,event) => {
			element.style.margin = '0px';
			element.style.opacity = '1';
			element.style.transition = '.5s';
});
var portfolio_fourth_layer = new OnScreen({
    tolerance: 0,
    debounce: 400,
    container: window
});
portfolio_fourth_layer.on('enter','.fourth_layer', (element,event) => {
			element.style.margin = '0px';
			element.style.opacity = '1';
			element.style.transition = '.5s';
});
//.the_team-stat animation
 var show_1 = true;
 var target_1 = $('.line_progress');
 var targetPos_1 = target_1.offset().top;
 var winHeight_1 = $(window).height();
 var scrollToElem_1 = targetPos_1 - winHeight_1;
$(window).scroll(function() {
  var winScrollTop_1 = $(this).scrollTop();
  if ((winScrollTop_1 > scrollToElem_1) && show_1==true) {
  	show_1=false;
    //сработает когда пользователь доскроллит к элементу
    $('.line_progress').css('animation-play-state', 'running');
    //'spincrement'
    for(var i=1; i<4; i++) {
    	var elem = document.querySelector('.'+'line_percent_'+i);
    	$('.'+'line_percent_'+i).spincrement({
    		from: 0,
    		to: elem.innerText,
    		duration: 1000
    	});
    }
  }
});

// the_team-cube
var cube = document.querySelector('.cube');
var _circle = document.getElementsByClassName('team_circle');
for(var i = 0; i < _circle.length; i++) {
  _circle[i].addEventListener('click', changeSide);
}
var currentClass = '';


function changeSide() {
  var showClass = 'show-' + this.id;
  if(currentClass) {
    cube.classList.remove(currentClass);
  }
  cube.classList.add(showClass);
  currentClass = showClass;
  for(var i = 0; i < _circle.length; i++) {
    _circle[i].style = "fill: #d2d3d6";
  }
  this.style = "fill: #19bd9a";
}




// var cube = document.querySelector('.cube');
var radioGroup = document.querySelector('.radio_group');
// var currentClass = '';

function changeSide1() {
  var checkedRadio = radioGroup.querySelector(':checked');
  var showClass = 'show-' + checkedRadio.value;
  if ( currentClass ) {
    cube.classList.remove( currentClass );
  }
  cube.classList.add( showClass );
  currentClass = showClass;
}
// set initial side
changeSide1();

radioGroup.addEventListener( 'change', changeSide1 );



