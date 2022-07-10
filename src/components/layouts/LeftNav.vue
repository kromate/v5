<template>
	<nav
		aria-label="social links"
		class="layout-line border-r md:left-0 left-5 flex-col"
	>
		<logo class="nav-icon !h-10 w-8" />

		<div class="mt-auto gap-8 flex-col flex">
			<a href="http://" target="_blank" rel="noopener noreferrer">
				<github class="nav-icon" />
			</a>
			<a href="http://" target="_blank" rel="noopener noreferrer">
				<twitter class="nav-icon" />
			</a>
			<a href="http://" target="_blank" rel="noopener noreferrer">
				<youtube class="nav-icon" />
			</a>
			<a href="http://" target="_blank" rel="noopener noreferrer">
				<linkedin class="nav-icon" />
			</a>
		</div>
	</nav>
</template>

<script setup lang="ts">
import logo from '@/assets/icons/logo.vue';
import github from '@/assets/icons/github.vue';
import twitter from '@/assets/icons/twitter.vue';
import youtube from '@/assets/icons/youtube.vue';
import linkedin from '@/assets/icons/linkedin.vue';
import gsap from 'gsap';
import { onMounted } from 'vue';

onMounted(() => {
	gsap.fromTo(
		'.nav-icon',
		{ opacity: 0, x: -20 },
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

<style scoped></style>
