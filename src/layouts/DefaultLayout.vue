<template>
	<div class="center h-screen w-full">
		<div class="layout-line border-r md:left-0 left-5 flex-col">
			<img
				src="../assets/images/logo.svg"
				alt="border"
				class="logo-border w-8"
			/>
			<div class="text-white mt-auto gap-8 flex-col flex">
				<a href="http://" target="_blank" rel="noopener noreferrer">
					<github class="nav-icon" />
				</a>
				<a href="http://" target="_blank" rel="noopener noreferrer"
					><img src="../assets/icons/twitter.svg" class="h-5" alt=""
				/></a>
				<a href="http://" target="_blank" rel="noopener noreferrer"
					><img src="../assets/icons/youtube.svg" class="h-5" alt=""
				/></a>
				<a href="http://" target="_blank" rel="noopener noreferrer"
					><img src="../assets/icons/linkedin.svg" class="h-5" alt=""
				/></a>
			</div>
		</div>
		<div class="layout-line border-l md:right-0 right-5"></div>

		<slot />
	</div>
</template>

<script setup lang="ts">
import github from '../assets/icons/github.vue';
</script>

<style scoped>
yout-line {
	animation: grow 1.5s 1.5s 1 forwards;
}
@keyframes grow {
	from {
		opacity: 0;
		height: 0;
	}
	to {
		opacity: 1;
		height: 100%;
	}
}

@keyframes show {
	from {
		z-index: 0;
	}
	to {
		z-index: 3;
	}
}
</style>
