<template>
	<nav class="absolute top-0 w-full px-4 py-2 z-30 select-none block md:hidden">
		<div
			class="container flex flex-wrap items-center justify-between md:py-5 py-3 px-4 mx-auto md:flex-row max-w-7xl"
		>
			<a
				href="#"
				class="transition-all duration-300"
				:class="[isActive ? 'text-primary' : 'text-secondary', 'z-30']"
			>
				<logo class="h-10 w-10"
			/></a>

			<div
				@click="toggleMenu"
				class="menu-btn z-30"
				:class="{ active: isActive }"
			>
				<span
					:class="[
						isActive
							? 'bg-primary before:bg-primary after:bg-primary'
							: 'bg-secondary before:bg-secondary after:bg-secondary',
					]"
					class=""
				></span>
			</div>

			<transition appear @enter="enter" :css="false">
				<div
					v-if="showMenu"
					class="w-full gap-4 absolute bg-secondary inset-0 h-screen p-4"
				>
					<ul class="flex flex-col items-center pt-36">
						<li class="menu-link">
							<a href="/" class="chakra"> About </a>
						</li>
						<li class="menu-link">
							<a href="/" class="chakra"> Experience </a>
						</li>
						<li class="menu-link">
							<a href="/" class="chakra"> Works </a>
						</li>
						<li class="menu-link">
							<a href="/" class="chakra"> Contact </a>
						</li>
					</ul>
				</div>
			</transition> 

			<div class="pc">
				<a href="#" class="btn-secondary pc hover:text-primary">Home</a>
				<a href="#about" class="btn-secondary pc hover:text-primary"
					>About Us</a
				>
				<a href="#choose" class="btn-secondary pc hover:text-primary"
					>Why Choose Us</a
				>
				<a href="#values" class="btn-secondary pc hover:text-primary"
					>Our Values</a
				>
				<a href="#exp" class="btn-secondary pc hover:text-primary">Expertise</a>
			</div>
		</div>
	</nav>
</template>

<script setup lang="ts">
import { ref } from '@vue/reactivity';
import logo from '@/assets/icons/logo.vue';
import gsap from 'gsap';
import { onMounted } from 'vue';

const timeline = gsap.timeline();
const showMenu = ref(false);
const isActive = ref(false);
const toggleMenu = () => {
	if (!showMenu.value) {
		showMenu.value = true;
	} else {
		close();
	}
};

const enter = (el: any, done: any) => {
	timeline.play(0);
	timeline
		.fromTo(
			el,
			{
				opacity: 0,
				x: -100,
			},
			{
				opacity: 1,
				x: 0,
				duration: 0.25,
				onComplete: () => {
					isActive.value = true;
				},
			}
		)
		.fromTo(
			'li',
			{ opacity: 0, y: 10 },
			{
				opacity: 1,
				y: 0,
				stagger: 0.25,
			}
		);
};

const close = () => {
	timeline.reverse().then(() => {
		showMenu.value = false;
		isActive.value = false;
	});
	// setTimeout(() => {
	// 	showMenu.value = false;
	// 	isActive.value = false;
	// }, 200);
};
onMounted(() => {
	gsap.fromTo(
		'nav',
		{ opacity: 0, y: -20 },
		{
			opacity: 1,
			y: 0,
			duration: 0.35,
			delay: 1.65,
			ease: 'linear',
		}
	);
});
</script>

<style scoped lang="scss">
.menu-link {
	background: -webkit-linear-gradient(
		-86deg,
		#eef85b 5%,
		#7aec8d 53%,
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

// .menu-btn.active {
// 	transform: rotateY(180deg);
// 	transition: 0.5s ease-in-out;
// }

// .slideLeft-enter-from,
// .slideLeft-leave-to {
// 	// opacity: 0;
// 	transform: translatex(-400px);
// }

// .slideLeft-enter-active,
// .slideLeft-leave-active {
// 	transition: all 0.35s ease;
// }
</style>
