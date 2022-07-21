export const scrollControl = () => {
	let html = document.querySelector('html');
	let htmlPosition = html?.style;

	const enableScroll = () => {
		if (htmlPosition) {
			htmlPosition.overflow = 'auto';
		}
	};
	const disableScroll = () => {
		if (htmlPosition) {
			htmlPosition.overflow = 'hidden';
		}
	};

	return { enableScroll, disableScroll };
};

export const scrollpsy = () => {
	const scrollspys = document.querySelectorAll('section');
	const links = document.querySelector('.links ') as HTMLDivElement;
	const linksHeight = links?.offsetHeight;
	const allLinks = links.querySelectorAll('.nav-link>a');

	function scrollspy() {
		scrollspys.forEach((current) => {
			let _ = current;
			let currentElementOffset = _.offsetTop;
			let scrollPosition =
				document.documentElement.scrollTop || document.body.scrollTop;
			if (currentElementOffset <= scrollPosition + linksHeight) {
				allLinks.forEach((currentLink) => {
					if (currentLink.classList.contains('!text-orange')) {
						currentLink.classList.remove('!text-orange');
					}
				});
				const currentID = current.getAttribute('id');
				if (currentID !== 'Hero') {
					const currentLink = document?.querySelector(
						`a[href="/#${currentID}"]`
					);
					currentLink?.classList.add('!text-orange');
				}
			}
		});
	}

	window.addEventListener('scroll', scrollspy);
};

export const topBarScroll = () => {
	let lastKnownScrollY = 100;
	let currentScrollY = 0;
	let ticking = false;
	let idOfHeader = 'header';
	let eleHeader: HTMLElement;
	// (document?.getElementById(idOfHeader) as HTMLElement).classList.add(
	// 	'translate-y-0'
	// );
	const classes = {
		pinned: '!translate-y-0',
		unpinned: '!-translate-y-20',
	};
	function onScroll() {
		currentScrollY = window.pageYOffset;
		requestTick();
	}
	function requestTick() {
		if (!ticking) {
			requestAnimationFrame(update);
		}
		ticking = true;
	}
	function update() {
		if (currentScrollY < lastKnownScrollY) {
			pin();
		} else if (currentScrollY > lastKnownScrollY) {
			unpin();
		}
		lastKnownScrollY = currentScrollY;
		ticking = false;
	}
	function pin() {
		if (eleHeader.classList.contains(classes.unpinned)) {
			eleHeader.classList.remove(classes.unpinned);
			eleHeader.classList.add(classes.pinned);
		}
	}
	function unpin() {
		if (
			eleHeader.classList.contains(classes.pinned) ||
			!eleHeader.classList.contains(classes.unpinned)
		) {
			eleHeader.classList.remove(classes.pinned);
			eleHeader.classList.add(classes.unpinned);
		}
	}
	window.onload = function () {
		eleHeader = document.getElementById(idOfHeader) as HTMLElement;
		document.addEventListener('scroll', onScroll, false);
	};
};
