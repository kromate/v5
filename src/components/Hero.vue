<template>
	<section id="hero" class="flex flex-col items-start justify-center">
		<div class="sm:leading-[5rem] leading-[3rem]">
			<h1 class="animate text-xl text-orange chakra">Hi, my name is</h1>
			<h2 class="animate text-large text-white">Anthony Akpan.</h2>
			<h3 class="animate text-large text-secondary">I solve problems and create magic.</h3>
		</div>
		<p class="animate text-secondary max-w-2xl mt-2">
			I'm a software engineer specialized in building Frontend applications,
			occasionally backend and rarely design. I take pride in my work and ensure
			I deliver the fastest, most accessible and most responsive application
			possible.
		</p>

		<a href="https://docs.google.com/document/d/1trkAjxyYv9xF7cXyCfz2BebI3CnuZmhlSsHeRf9_fyQ/edit?usp=sharing" class="animate big-btn mt-5" target="_blank" rel="noreferrer">Resume</a>
	</section>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { onMounted } from "vue";
const mql = window.matchMedia("(max-width: 700px)");
// console.log();
onMounted(() => {
	gsap.fromTo(
		".animate",
		{ opacity: 0, y: 20 },
		{
			opacity: 1,
			y: 0,
			stagger: 0.25,
			duration: 0.5,
			delay: mql.matches ? 2 : 3.35,
			ease: "powerOut"
		}
	);
});
</script>

<style scoped></style>
