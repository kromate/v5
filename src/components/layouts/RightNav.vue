<template>
	<nav
		aria-label="site"
		class="layout-line border-l md:right-0 right-5 chakra flex-col items-center"
	>
		<ul class="gap-5 pt-2">
			<li class="nav-link">
				<a href="/#about">About</a>
			</li>
			<li class="nav-link">
				<a href="/#experience">Experience</a>
			</li>
			<li class="nav-link">
				<a href="/#works">Works</a>
			</li>
			<li class="nav-link">
				<a href="/#contact">Contact</a>
			</li>
		</ul>

		<div class="mt-auto gap-8 flex-col flex">
			<a class="nav-link" href="mailto:akpananthony33@gmail.com"
				>akpananthony33@gmail.com</a
			>
		</div>
	</nav>
</template>

<script setup lang="ts">
import gsap from 'gsap';
import { onMounted } from 'vue';

onMounted(() => {
	gsap.fromTo(
		'.nav-link',
		{ opacity: 0, x: 20 },
		{
			opacity: 1,
			x: 0,
			stagger: 0.2,
			duration: 0.35,
			delay: 1.75,
			ease: 'linear',
		}
	);
});
</script>

<style scoped lang="scss">
a {
	writing-mode: vertical-rl;
}
li {
	display: block;
	margin: 0px 0px 0px 0px;

	writing-mode: vertical-rl;
	a {
		font-family: 'Chakra Petch', sans-serif;
	}
}
li:not(:first-child) {
	padding: 30px 0px 0px 0px;
}
</style>
