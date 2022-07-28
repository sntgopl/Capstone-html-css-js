document.addEventListener('DOMContentLoaded', () => {
	const burger = document.querySelector('#hamburger');
	const menu = document.querySelector('#menu');
	const cross = document.querySelector('#cross');
	//toggle menu function
	function openMenu () {
    menu.style.display = 'block';
	}

	function closeMenu () {
    menu.style.display = 'none';
	}

	burger.addEventListener('click', openMenu);

	cross.addEventListener('click', closeMenu);
})