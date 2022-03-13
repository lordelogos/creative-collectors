let el = document.querySelector(".nft-showcase");

//setup cursor

const glider = new Glider(el, {
	slidesToShow: 1,
	slidesToScroll: 1,
	// exactWidth: true,
	draggable: true,
	duration: 1,
	// scrollLock: true,
	responsive: [
		{
			// screens greater than >= 775px
			breakpoint: 0,
			settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 1,
				slidesToScroll: 1,
				itemWidth: 488,
				duration: 0.25,
			},
		},
		{
			// screens greater than >= 775px
			breakpoint: 500,
			settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 1.5,
				slidesToScroll: 1,
				itemWidth: 488,
				duration: 0.25,
			},
		},
		{
			// screens greater than >= 775px
			breakpoint: 880,
			settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 1,
				itemWidth: 488,
				duration: 0.25,
			},
		},
		{
			// screens greater than >= 775px
			breakpoint: 1024,
			settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2.5,
				slidesToScroll: 1,
				itemWidth: 488,
				duration: 0.25,
			},
		},
		,
		{
			// screens greater than >= 775px
			breakpoint: 1200,
			settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 3,
				slidesToScroll: 1,
				itemWidth: 488,
				duration: 0.25,
			},
		},
		{
			// screens greater than >= 1024px
			breakpoint: 1600,
			settings: {
				slidesToShow: 4,
				exactWidth: true,
				slidesToScroll: 1,
				itemWidth: 488,
				duration: 0.25,
			},
		},
	],
});

let autoplayDelay = 3000;

let timeout = -1;
let hovering = false;
function startTimeout() {
	clearTimeout(timeout);
	timeout = setTimeout(() => {
		if (!hovering) glider.scrollItem((glider.slide + 1) % glider.slides.length);
	}, autoplayDelay);
}

let animID = 0;
const isAnimating = () => glider.animate_id !== animID;
el.addEventListener("glider-animated", () => {
	animID = glider.animate_id;
	if (!hovering) startTimeout();
});

el.addEventListener("mouseover", () => {
	hovering = true;
	clearTimeout(timeout);
});

el.addEventListener("mouseout", () => {
	hovering = false;
	if (!isAnimating()) startTimeout();
});

startTimeout();

// setting up navbar
const menu = document.querySelector(".mobile-menu");
const menuOpenBtn = document.querySelector(".mobile-navIcon");
const menuCloseBtn = document.querySelector(".mobile-menuClose");

const toggleMenu = (action) => {
	if (action === "open") {
		menu.classList.add("active-menu");
	} else if (action === "close") {
		menu.classList.remove("active-menu");
	}
};

menuOpenBtn.addEventListener("click", () => toggleMenu("open"));
menuCloseBtn.addEventListener("click", () => toggleMenu("close"));

gsap.registerPlugin("ScrollTrigger");

// setting up locomotive scroll
const locoScroll = new LocomotiveScroll({
	el: document.querySelector(".smooth-scroll"),
	smooth: true,
	smartphone: {
		smooth: true,
	},
	tablet: {
		smooth: true,
	},
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".smooth-scroll", {
	scrollTop(value) {
		return arguments.length
			? locoScroll.scrollTo(value, 0, 0)
			: locoScroll.scroll.instance.scroll.y;
	}, // we don't have to define a scrollLeft because we're only scrolling vertically.
	getBoundingClientRect() {
		return {
			top: 0,
			left: 0,
			width: window.innerWidth,
			height: window.innerHeight,
		};
	},
	// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
	pinType: document.querySelector(".smooth-scroll").style.transform
		? "transform"
		: "fixed",
});

// preloader animation
let preload_tl = gsap.timeline({ defaults: { ease: "power4.inOut" } });

preload_tl
	.from("#preloader div", { yPercent: 100, duration: 2, opacity: 0 })
	.from("#preloader > p", { yPercent: 100, opacity: 0, duration: 1 }, "-=1");

let loadCounter = gsap.timeline({ defaults: { ease: "power4.inOut" } });

loadCounter
	.from("#preloader > h2", { opacity: 0, duration: 1, opacity: 0 })
	.from("#preloader h2 span", {
		textContent: 0,
		duration: 2,
		ease: "power2.in",
		snap: { textContent: 5 },
	});
loadCounter.pause();

let preloadEnd = gsap.timeline({ defaults: { ease: "power4.inOut" } });
preloadEnd.to("#preloader", { yPercent: -100, duration: 1.5 });
preloadEnd.to("#preloader", { opacity: 0 });
preloadEnd.pause();

//header animations
let header_tl = gsap.timeline({
	defaults: { ease: "power4.inOut", duration: 2 },
});

header_tl
	.from("header .main-header", { yPercent: 100, opacity: 0, delay: 0.5 })
	.from(".main-desc", { yPercent: 100, opacity: 0 }, "-=1.5")
	.from(
		".header-stats, .explore-animation, .quote-swap",
		{ yPercent: 100, opacity: 0, stagger: 0.2 },
		"-=1.5"
	)
	.from(".right-circle, .left-circle", { xPercent: -100, opacity: 0 }, "-=1.5");
header_tl.pause();
locoScroll.stop();

// initialize animations on pageload
window.addEventListener("load", () => {
	loadCounter.paused(false);
	setTimeout(() => {
		preloadEnd.paused(false);
		header_tl.paused(false);
		locoScroll.start();
	}, 3000);
});
