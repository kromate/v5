<template>
	<div class="h-[200vh]">
		<div class="center h-screen w-full bg shadow-md">
			<div class="line bg-[#ffffff] fixed h-0 w-px z-10 md:left-16 left-5" />
			<div
				class="line bg-[#ffffff] fixed h-0 w-px z-10 md:right-16 right-5"
			/>

			<Loader />

			<div id="Hero">
				<h1>Hi, my name is</h1>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import Loader from './components/Loader.vue';
</script>

<style scoped>
.line {
	animation: grow 1.5s 1.5s 1 forwards;
}
.bg {
	background: #000;
	transition: 0.8s ease-out;
}
.bg:before {
	content: '';
	position: absolute;
	background: #212143;
	bottom: 0;
	left: 0;
	right: 100%;
	top: 0;
	transition: top 0.65s ease-out;
	animation: flow 1.5s 1 forwards;
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
@keyframes flow {
	from {
		right: 100%;
	}
	to {
		right: 0;
	}
}
</style>
