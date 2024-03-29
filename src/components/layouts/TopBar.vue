<template>
	<nav
		id="header"
		class="bg-[#211e25c6] top-0 w-full px-4 py-2 z-30 select-none block md:hidden fixed shadow-xl transition-all duration-500"
	>
		<div
			class="container flex flex-wrap items-center justify-between md:py-5 py-3 px-4 mx-auto md:flex-row max-w-7xl"
		>
			<a href="#" class="transition-all duration-300 text-secondary z-30">
				<logo class="h-10 w-10" />
			</a>

			<div
				@click="toggleMenu"
				class="menu-btn z-30"
				:class="{ active: showMenu }"
			>
				<span
					class="bg-secondary before:bg-secondary after:bg-secondary"
				></span>
			</div>
		</div>
	</nav>

	<transition appear @enter="enter" @before-enter="beforeEnter" :css="false">
		<div
			v-if="showMenu"
			class="navMenu w-full gap-4 fixed bg-primary inset-0 h-full p-4 z-20"
		>
			<ul class="flex flex-col items-center pt-36 h-full">
				<li class="menu-link">
					<a href="/#about" class="chakra" @click="close">About</a>
				</li>
				<li class="menu-link">
					<a href="/#experience" class="chakra" @click="close">Experience</a>
				</li>
				<li class="menu-link">
					<a href="/#works" class="chakra" @click="close">Works</a>
				</li>
				<li class="menu-link">
					<a href="/#contact" class="chakra" @click="close">Contact</a>
				</li>
				<span class="menu-link">
					<li class="mt-20 gap-6 items-center flex">
						<span>
							<a
								href="https://github.com/kromate"
								target="_blank"
								rel="noopener noreferrer"
							>
								<github class="nav-icon" />
							</a>
						</span>

						<span>
							<a
								href="https://twitter.com/kromate_24"
								target="_blank"
								rel="noopener noreferrer"
							>
								<twitter class="nav-icon" />
							</a>
						</span>
						<span>
							<a
								href="https://www.instagram.com/kromate_24/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<instagram class="nav-icon" />
							</a>
						</span>
						<span>
							<a
								href="https://www.youtube.com/c/Kromate_24"
								target="_blank"
								rel="noopener noreferrer"
							>
								<youtube class="nav-icon" />
							</a>
						</span>
						<span>
							<a
								href="https://www.linkedin.com/in/kromate/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<linkedin class="nav-icon" />
							</a>
						</span>
						<span>
							<a
				href="https://api.whatsapp.com/send?phone=2348146923944"
				target="_blank"
				rel="noopener noreferrer"
			>
				<whatsapp class="nav-icon " />
			</a>
						</span>
					</li>
				</span>
			</ul>
		</div>
	</transition>
</template>

<script setup lang="ts">
import { ref } from '@vue/reactivity';
import logo from '@/assets/icons/logo.vue';
import github from '@/assets/icons/github.vue';
import twitter from '@/assets/icons/twitter.vue';
import youtube from '@/assets/icons/youtube.vue';
import linkedin from '@/assets/icons/linkedin.vue';
import instagram from '@/assets/icons/instagram.vue';
import whatsapp from '@/assets/icons/whatsapp.vue';
import gsap from 'gsap';
import { onMounted } from 'vue';
import { scrollControl, topBarScroll } from '@/composibles/controls';

const { enableScroll, disableScroll } = scrollControl();

const showMenu = ref(false);
const toggleMenu = () => {
	if (!showMenu.value) {
		showMenu.value = !showMenu.value;
		disableScroll();
	} else {
		close();
	}
};
const beforeEnter = (el: any) => {
	el.style.opacity = 0;
	el.style.transform = 'translateX(-100px)';
};
const enter = (el: any, done: any) => {
	gsap
		.to(el, {
			opacity: 1,
			x: 0,
			duration: 0.25,
			onComplete: done(),
		})
		.then(() => {
			gsap.fromTo(
				'li',
				{ opacity: 0, y: 10 },
				{ opacity: 1, y: 0, stagger: 0.25, ease: 'linear', duration: 0.25 }
			);
		});
};

const close = () => {
	gsap.to('.navMenu', { opacity: 0, x: -100, duration: 0.25 }).then(() => {
		showMenu.value = false;
		enableScroll();
	});
};
onMounted(() => {
	// gsap.fromTo(
	// 	'nav',
	// 	{ opacity: 0, y: -20 },
	// 	{
	// 		opacity: 1,
	// 		y: 0,
	// 		// duration: 0.35,
	// 		delay: 1.65,
	// 		ease: 'linear',
	// 	}
	// );

	topBarScroll();
});
</script>

<style scoped lang="scss">
li {
	opacity: 0;
}
.nav-icon {
	transform: scale(1.5);
	color: var(--orange);
}
.menu-link {
	background: -webkit-linear-gradient(
		-86deg,
		darkorange 5%,
		#ccd6f6 53%,
		#09e5c3 91%
	);
	text-transform: uppercase;
	background-clip: text;
	-webkit-text-stroke: 4px transparent;
	color: #111111;
	font-size: 3rem;
	letter-spacing: 3px;
	font-weight: 700;
	animation: hue 7.5s infinite linear;
}

@keyframes hue {
	from {
		-webkit-filter: hue-rotate(0deg);
	}
	to {
		-webkit-filter: hue-rotate(360deg);
	}
}

.menu-btn {
	height: 32px;
	width: 30px;
	cursor: pointer;
}

.menu-btn span,
.menu-btn span::before,
.menu-btn span::after {
	content: '';
	position: absolute;
	width: 25px;
	height: 3px;
	margin-top: 13px;
	border-radius: 50px;
	transform: rotateY(180deg);
	transition: all 0.5s ease-in-out;
}
.menu-btn span::before {
	margin-top: -10px;
	width: 35px;
}
.menu-btn span::after {
	margin-top: 10px;
	width: 35px;
}
.menu-btn.active span {
	background: transparent;
}

.menu-btn.active span::before {
	margin-top: 0;
	transform: rotate(45deg);
}

.menu-btn.active span::after {
	margin-top: 0;
	transform: rotate(-45deg);
}
</style>
