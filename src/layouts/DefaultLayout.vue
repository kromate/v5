<template>
	<div class="center h-screen w-full">
		<LeftNav />
		<div class="layout-line border-l md:right-0 right-5">
			
		</div>

		<slot />
	</div>
</template>

<script setup lang="ts">
import LeftNav from '../components/layouts/LeftNav.vue';
</script>

<style>
.layout-line {
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
