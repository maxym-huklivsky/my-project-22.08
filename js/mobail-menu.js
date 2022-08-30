(() => {
	const menuOpenBtn = document.querySelector('[data-menu-open]');
	const menuCloseBtn = document.querySelector('[data-menu-close]');
	const menuCloseBtnq = document.querySelector('[data-menu-closeq]');
	const menuCloseBtnw = document.querySelector('[data-menu-closew]');
	const menuCloseBtne = document.querySelector('[data-menu-closee]');

	const mobileMenu = document.querySelector('[data-menu]');
	const body = document.querySelector('body');

	menuOpenBtn.addEventListener('click', openModal);
	menuCloseBtn.addEventListener('click', openModal);
	menuCloseBtnq.addEventListener('click', openModal);
	menuCloseBtnw.addEventListener('click', openModal);
	menuCloseBtne.addEventListener('click', openModal);


	function openModal() {
		mobileMenu.classList.toggle('is-open');
		body.classList.toggle('no-scroll-menu');
	}
})();