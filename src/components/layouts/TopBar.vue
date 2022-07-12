<template>
	<nav class="absolute top-0 w-full px-4 py-2 z-30 select-none block md:hidden">
		<div
			class="container flex flex-wrap items-center justify-between md:py-5 py-3 px-4 mx-auto md:flex-row max-w-7xl"
		>
			<a
				href="#"
				:class="[showMenu ? 'text-primary' : 'text-secondary', 'z-30']"
			>
				<logo class="h-10 w-10"
			/></a>

			<div
				@click="showMenu = !showMenu"
				class="menu-btn z-30"
				:class="{ active: showMenu }"
			>
				<span
					:class="[
						showMenu
							? 'bg-primary before:bg-primary after:bg-primary'
							: 'bg-secondary before:bg-secondary after:bg-secondary',
					]"
					class=""
				></span>
			</div>

			<transition name="slideLeft">
				<div
					v-if="showMenu"
					class="w-full gap-4 absolute bg-secondary text-secondary inset-0 h-screen p-4"
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

const showMenu = ref(false);
const toggleMenu = () => {
	showMenu.value = !showMenu.value;
};
</script>

<style scoped lang="scss">
.menu-link {
	-webkit-text-stroke: 2.5px;
	-webkit-text-stroke-color: red;
	color: transparent;
	font-size: 3rem;
	font-weight: 700;
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
	width: 30px;
	height: 3px;
	margin-top: 13px;
	border-radius: 50px;
	transform: rotateY(180deg);
	transition: 0.5s ease-in-out;
}
.menu-btn span::before {
	margin-top: -10px;
	width: 40px;
}
.menu-btn span::after {
	margin-top: 10px;
	width: 40px;
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

.slideLeft-enter-from,
.slideLeft-leave-to {
	// opacity: 0;
	transform: translatex(-400px);
}

.slideLeft-enter-active,
.slideLeft-leave-active {
	transition: all 0.35s ease;
}
</style>
