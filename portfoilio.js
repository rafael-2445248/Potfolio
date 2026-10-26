const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

menuToggle.addEventListener('click', () => {
	const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
	menuToggle.setAttribute('aria-expanded', String(!isOpen));
	menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
	siteNav.classList.toggle('is-open', !isOpen);
});

siteNav.addEventListener('click', (event) => {
	if (event.target.closest('a')) {
		menuToggle.setAttribute('aria-expanded', 'false');
		menuToggle.setAttribute('aria-label', 'Open navigation');
		siteNav.classList.remove('is-open');
	}
});

document.querySelector('#year').textContent = new Date().getFullYear();

const revealObserver = new IntersectionObserver((entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('is-visible');
			observer.unobserve(entry.target);
		}
	});
}, { threshold: 0.12 });

document.querySelectorAll('.project, .about-content, .contact-row').forEach((element) => {
	element.classList.add('reveal');
	revealObserver.observe(element);
});
