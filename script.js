let stars  = document.getElementsByClassName('star');

let flowerBox = document.getElementById('flower-box');
let petal = document.getElementsByClassName('petal');

let cube = document.getElementsByClassName('cube');
let r = 360 / cube.length;
for(let i = 0; i < cube.lenght; i++){
	r *= i;
	//cube[i].style.transform = `rotate()`;
}
function rotor() {
	flowerBox.style.opacity = 1;
	cube[0].style.transform = `rotate(0deg)`;
	cube[1].style.transform = `rotate(60deg)`;
	cube[2].style.transform = `rotate(120deg)`;
	cube[3].style.transform = `rotate(180deg)`;
	cube[4].style.transform = `rotate(240deg)`;
	cube[5].style.transform = `rotate(300deg)`;
	cube[6].style.transform = `rotate(360deg)`;
	for(let i = 0; i < cube.lenght; i++){
		cube[i].style.zIndex = i +1;
	}

}
function otor() {
	cube[0].style.transform = `rotate(10deg)`;
	cube[1].style.transform = `rotate(50deg)`;
	cube[2].style.transform = `rotate(110deg)`;
	cube[3].style.transform = `rotate(190deg)`;
	cube[4].style.transform = `rotate(250deg)`;
	cube[5].style.transform = `rotate(310deg)`;
	cube[6].style.transform = `rotate(370deg)`;
}

let position = 0;

let text = document.getElementById('text');
let circle = document.getElementById('circle-box');
let sunMoon = 'sun';
function circleMove(){
	if(sunMoon == 'sun'){
		if(wrapper.offsetWidth == 340){
			circle.style.left = 200 + `px`;
		} else {
			circle.style.left = 140 + `px`;
		}
		for(let i = 0; i< stars.length; i++){
			stars[i].style.opacity = 1;
		}
		backgroundMove();
		cloudMove();
		sunMoon = 'moon';
	} else if(sunMoon == 'moon'){
		circle.style.left = 10 + `px`;
		for(let i = 0; i< stars.length; i++){
			stars[i].style.opacity = 0;
		}
		
		backgroundMove();
		cloudMove();
		sunMoon = 'sun';
	}
	function getRandomInt(min, max) {
  		main = Math.ceil(min); // Округляем минимальное значение вверх
  		max = Math.floor(max); // Округляем максимальное значение вниз
  		return Math.floor(Math.random() * (max - min + 1)) + min; // Возвращаем случайное целое число в диапазоне [min, max]
	}
	position += getRandomInt(5,10);
	if(position > 30){
		body[0].style.backgroundColor = '#7ad0ff';
		wrapperRemove();
		text.style.opacity = 1;
		text.style.fontSize = 30 + `px`;
	}
	console.log(position);
};

function wrapperRemove(){
	for(let i = 0; i < wrapper.children.length; i++){
		wrapper.children[i].remove();
		wrapper.remove();
		rotor();
		for(let i = 0; i< stars.length; i++){
			stars[i].remove();
		}
	}
}

let cloud = document.getElementById('cloud-box');
function cloudMove(){
	if(sunMoon == 'sun'){
		cloud.style.bottom = -200 + `px`;
		cloud.style.opacity = 0;
	} else if(sunMoon == 'moon'){
		cloud.style.bottom = -60 + `px`;
		cloud.style.opacity = 1;
	}
};

let body = document.getElementsByTagName('body');
let sun = document.getElementById('circle-4');
let krator = document.getElementsByClassName('krator');
let ligth = document.getElementsByClassName('ligthing');
function backgroundMove(){
	if(sunMoon == 'sun'){
		body[0].style.backgroundColor = '#4d4d4f';
		sun.style.backgroundColor = '#9fadb0';
		sun.style.boxShadow = ' 0 0 8px 2px white';
		krator[0].style.opacity = 1;
		krator[1].style.opacity = 1;
		krator[2].style.opacity = 1;

	} else if(sunMoon == 'moon'){
		body[0].style.backgroundColor = '#3f86cc';
		sun.style.backgroundColor = '#ffdc32';
		sun.style.boxShadow = 'inset 0 0 8px 2px #ff9a30';
		for(let i = 0; i < krator.length; i++){
			krator[0].style.opacity = 0;
			krator[1].style.opacity = 0;
			krator[2].style.opacity = 0;
		}
	}
};

let wrapper = document.getElementById('wrapper');
wrapper.addEventListener('click', circleMove);

console.log(wrapper.offsetWidth == 340, wrapper.style.width);