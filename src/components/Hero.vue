<template>
	<section id="Hero" class="flex flex-col items-start h-screen justify-center">
		<div class="leading-[5rem]">
			<h1 class="animate text-xl text-green chakra">Hi, my name is</h1>
			<h2 class="animate text-large text-[#ccd6f6]">Anthony Akpan.</h2>
			<h3 class="animate text-large text-secondary">
				I solve problems and create magic.
			</h3>
		</div>
		<p class="animate text-secondary max-w-2xl mt-2">
			I'm a software engineer specialized in building Frontend applications,
			occasionally backend and rarely design. I take pride in my work and ensure
			I deliver the fastest, most accessible and most responsive application
			possible.
		</p>

		<router-link class="animate big-btn mt-5" target="_blank" rel="noreferrer">
			Resume
		</router-link>
	</section>
</template>

<script setup lang="ts">
import gsap from 'gsap';
import { onMounted } from 'vue';

onMounted(() => {
	gsap.fromTo(
		'.animate',
		{ opacity: 0, y: 20 },
		{ opacity: 1, y: 0, stagger: 0.2, duration: 0.4, delay: 2.5 }
	);
});
</script>

<style scoped></style>
