<template>
	<div class="fixed inset-0 h-screen w-screen z-50" v-if="show">
		<div class="center h-screen w-screen bg-primary logo-container !bg-black">
			<div class="relative center text-white pos text-7xl">
				<img src="../assets/images/border.svg" alt="border" class="logo-border absolute w-40 rotate-45" />
				<span class="p-10 font-semibold">K</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { scrollControl } from "@/composibles/controls";

const { enableScroll } = scrollControl();
const show = ref(true);
onMounted(() => {
	setTimeout(() => {
		show.value = false;
		enableScroll();
	}, 2500);
});
</script>

<style scoped>
.logo-container {
	animation: fade 0.67s 2s 1 forwards;
}
.logo-border {
	animation: spin 1.5s 1;
}
.pos {
	animation: fadeScale 0.5s 1.5s 1 forwards;
}

@keyframes fade {
	from {
		opacity: 1;
		display: flex;
	}
	to {
		opacity: 0;
		display: none;
		z-index: -1;
	}
}
@keyframes fadeScale {
	from {
		opacity: 1;
	}
	to {
		opacity: 0;
		display: none;
		transform: scale(0.2);
	}
}

@keyframes spin {
	0% {
		transform: rotate(45deg) scale(1);
	}
	50% {
		transform: rotate(135deg) scale(1.5);
	}
	100% {
		transform: rotate(225deg) scale(1);
	}
}
</style>
