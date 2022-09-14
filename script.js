console.log('hello from script.js');
const screen = document.querySelector('#screen');
const buttons = document.querySelectorAll('.keyboard-grid-item');
let firstNumber = 0;
let secondNumber = 0;
let result = 0;
let action = '';
let entered = false;
const onScreenShow = (text = firstNumber) => {
	screen.innerHTML = text;
};
const onEnter = () => {
	switch (action) {
		case '+':
			firstNumber = +secondNumber + +firstNumber;
			break;
		case '-':
			firstNumber = +secondNumber - +firstNumber;
			break;
		case '*':
			firstNumber = +secondNumber * +firstNumber;
			break;
		case '/':
			firstNumber = +secondNumber / +firstNumber;
			break;
		default:
			console.log('default onEnter');
			break;
	}
};
const onClick = (event) => {
	const btn = event.target.id;
	switch (btn) {
		case 'DEL':
			if (firstNumber.length > 1) {
				firstNumber = firstNumber.slice(0, -1);
			} else {
				firstNumber = 0;
			}
			break;
		case 'RESET':
			firstNumber = 0;
			secondNumber = 0;
			action = '';
			break;
		case '+':
		case '-':
		case '*':
		case '/':
			action = btn;
			secondNumber = firstNumber;
			firstNumber = 0;
			break;
		case 'ENTER':
			onEnter();
			break;
		default:
			if ((btn >= 0 && btn <= 9) || btn === '.') {
				firstNumber += btn;
				break;
			}
			console.log('default');
			break;
	}
	onScreenShow();
};

buttons.forEach((button) => {
	button.addEventListener('click', (e) => onClick(e));
});

//theme switcher
const toggleBtns = document.querySelectorAll('.check-button');
const body = document.querySelector('body');
const toggle = document.querySelector('.toggle');
const toggleF = document.querySelector('.toggleForm');
const keyboard = document.querySelector('.keyboard');
const keyboardGIs = document.querySelectorAll('.keyboard-grid-item');
const res = document.getElementById('RESET');
const del = document.getElementById('DEL');
const enter = document.getElementById('ENTER');
toggleBtns.forEach((item) => {
	item.addEventListener('click', () => changeClass(item.id));
});

function addClass(theme) {
	body.classList.add(`body-${theme}`);
	toggle.classList.add(`toggle-${theme}`);
	toggleF.classList.add(`toggleForm-${theme}`);
	screen.classList.add(`screen-${theme}`);
	keyboard.classList.add(`keyboard-${theme}`);
	keyboardGIs.forEach((item) => item.classList.add(`keyboard-grid-item-${theme}`));
	res.classList.add(`res-${theme}`);
	del.classList.add(`del-${theme}`);
	enter.classList.add(`enter-${theme}`);
}
function removeClass(arr) {
	arr.forEach((item) => {
		console.log(item);
		body.classList.remove(`body-${item}`);
		toggle.classList.remove(`toggle-${item}`);
		toggleF.classList.remove(`toggleForm-${item}`);
		screen.classList.remove(`screen-${item}`);
		keyboard.classList.remove(`keyboard-${item}`);
		keyboardGIs.forEach((el) => el.classList.remove(`keyboard-grid-item-${item}`));
		res.classList.remove(`res-${item}`);
		del.classList.remove(`del-${item}`);
		enter.classList.remove(`enter-${item}`);
	});
}
function changeClass(theme) {
	switch (theme) {
		case 't1':
			removeClass(['t2', 't3']);
			break;
		case 't2':
			addClass(theme);
			removeClass(['t3', 't1']);
			break;
		case 't3':
			addClass(theme);
			removeClass(['t2', 't1']);
			break;
	}
}
