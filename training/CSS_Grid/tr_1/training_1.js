// var elem = document.querySelector('.header');
// 	elem.style.width =  document.documentElement.scrollWidth +'px'; //window.innerWidth document.documentElement.clientWidth
// 	elem.style.height = (window.innerHeight)+'px';

// var elem = document.querySelectorAll('.header__button');
// elem[0].addEventListener('mouseover', func_1);
// function func_1() {
// 	elem[0].style.background = '#f37423';
// }

var elem = document.querySelectorAll('.input-form__input');
for(var i = 0; i <= 2; i++) {
	elem[i].addEventListener('click', func_1);
	elem[i].addEventListener('blur', func_2)
}
function func_1() {
	this.style.background = '#fff';
}
function func_2() {
	this.style.background = '#354A56';
}

// $('.input-form__input').click(function() {
// 	$('.input-form__input').animate({background: '#ffffff'}, 1000);
// });
