<template>
	<div class="flex-col center w-full">
		<TopBar />
		<LeftNav />
		<RightNav />

		<slot />
	</div>
</template>

<script setup lang="ts">
import LeftNav from '@/components/layouts/LeftNav.vue';
import RightNav from '@/components/layouts/RightNav.vue';
import TopBar from '@/components/layouts/TopBar.vue';
</script>

<style>
.layout-line {
	animation: grow 0.65s 1.5s 1 forwards;
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
