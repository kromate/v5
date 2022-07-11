<template>
	<nav class="absolute top-0 w-full px-4 py-2 z-30 select-none -[72px]">
		<div
			class="container flex flex-wrap items-center justify-between md:py-5 py-3 px-4 mx-auto md:flex-row max-w-7xl"
		>
			<router-link
				to="/"
				class="relative flex items-center w-auto text-xl font-extrabold tracking-widest text-blue select-none"
				><img src="@/assets/images/logo.svg" alt="logo" class="h-8 md:h-auto"
			/></router-link>

			<button @click="showMenu = !showMenu" class="effect1">
				<span></span>
			</button>

			<transition name="slideUp">
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
.slideUp-enter-from,
.slideUp-leave-to {
	opacity: 0;
	transform: translateY(-100px);
}

.slideUp-enter-active,
.slideUp-leave-active {
	transition: all 0.35s ease;
}
</style>
