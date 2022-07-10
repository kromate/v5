<template>
	<nav
		aria-label="site"
		class="layout-line border-l md:right-0 right-5 chakra flex-col items-center"
	>
		<ul class="gap-5 pt-2">
			<li class="nav-link">
				<a href="/"> About </a>
			</li>
			<li class="nav-link">
				<a href="/"> Experience </a>
			</li>
			<li class="nav-link">
				<a href="/"> Works </a>
			</li>
			<li class="nav-link">
				<a href="/"> Contact </a>
			</li>
		</ul>

		<div class="mt-auto gap-8 flex-col flex">
			<span class="nav-link chakra">akpananthony33@gmail.com</span>
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
span {
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
