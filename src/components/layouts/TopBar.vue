<template>
	<nav class="absolute top-0 w-full px-4 py-2 z-30 select-none -[72px]">
		<div
			class="container flex flex-wrap items-center justify-between md:py-5 py-3 px-4 mx-auto md:flex-row max-w-7xl"
		>
			<router-link
				to="/"
				class="relative flex items-center w-auto text-xl font-extrabold tracking-widest text-blue select-none"
				><img src="@/assets/images/logo.svg" alt="logo" class="h-10"
			/></router-link>

			<button @click="showMenu = !showMenu" class="effect1">
				<span class="active"></span>
			</button>

			<transition name="slideLeft">
				<div
					v-if="showMenu"
					class="w-full gap-4 absolute bg-[#ffffff] shadow-2xl top-14 inset-x-0 p-4"
				>
					<a
						href="#"
						@click="toggleMenu()"
						class="btn rounded-none py-3 w-full mt-2"
						>Home</a
					>
					<a
						href="#about"
						@click="toggleMenu()"
						class="btn rounded-none py-3 w-full mt-2"
						>About Us</a
					>
					<a
						href="#choose"
						@click="toggleMenu()"
						class="btn rounded-none py-3 w-full mt-2"
						>Why Choose Us</a
					>
					<a
						href="#values"
						@click="toggleMenu()"
						class="btn rounded-none py-3 w-full mt-2"
						>Our Values</a
					>
					<a
						href="#exp"
						@click="toggleMenu()"
						class="btn rounded-none py-3 w-full mt-2"
						>Expertise</a
					>
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
import { useRouter } from 'vue-router';

const router = useRouter();

const showMenu = ref(false);
const toggleMenu = () => {
	showMenu.value = !showMenu.value;
};
const navigate = (link: string) => {
	toggleMenu();
	router.push(link);
};
</script>

<style scoped>
.wrapper {
	max-width: 800px;
	width: 100%;
	margin: 0 auto;
	text-align: center;
}

button {
	width: 45px;
	background: transparent;
	border: none;
	height: 35px;
	padding: 0px;
	overflow: hidden;
}

button:focus {
	outline: none;
}

.effect1 span {
	display: inline-block;
	width: 75%;
	height: 2px;
	border-radius: 50px;
	background: #fff;
	position: relative;
	transition: all 0.2s;
}

.effect1 span:before,
.effect1 span:after {
	content: '';
	position: absolute;
	width: 100%;
	border-radius: 50px;
	background: #fff;
	height: 2px;
	left: 0px;
	transition: all 0.3s;
}

.effect1 span:before {
	top: 10px;
}

.effect1 span:after {
	bottom: 10px;
}

button.effect1:hover span:after {
	left: -5px;
}

button.effect1:hover span:before {
	left: 5px;
}

button.effect1 span.active {
	background: #fff;
}

button.effect1 span.active:after,
button.effect1 span.active:before {
	top: 0px;
	left: 0px;
}

button.effect1 span.active:after {
	transform: rotate(-45deg);
	-webkit-transform: rotate(-45deg);
	-moz-transform: rotate(-45deg);
	-ms-transform: rotate(-45deg);
}

button.effect1 span.active:before {
	transform: rotate(45deg);
	-webkit-transform: rotate(45deg);
	-moz-transform: rotate(45deg);
	-ms-transform: rotate(45deg);
}

.slideLeft-enter-from,
.slideLeft-leave-to {
	opacity: 0;
	transform: translatex(-400px);
}

.slideLeft-enter-active,
.slideLeft-leave-active {
	transition: all 0.35s ease;
}
</style>
