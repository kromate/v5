<template>
	<section id="experience">
		<h2 class="numbered-heading chakra" data-num="02.">My Experience</h2>
		<div class="relative mt-14">
			<div class="absolute z-0 border-r border-purple ml-4 top-12 bottom-24 md:bottom-12 md:ml-8"></div>
			<div class="relative z-10 flex flex-col gap-4">
				<div class="flex items-center gap-2 md:gap-10" v-for="(experience, n) in experiences" :key="n">
					<div class="card-circle">0{{n}}</div>
					<div class="card">
						<div class="flex items-center gap-4 md:gap-10">
							<div>
								<div class="text-white opacity-90 font-medium md:text-xl">{{experience.title}}</div>
								<div class="mt-2 text-heather text-sm md:text-base">{{experience.desc}}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const experiences = ref([
	{
		title: "Self Taught",
		desc:
			"Began teaching myself programming and how to code around November 2017 the programming language was python but later switched to web dev and javascript early 2018"
	},
	{
		title: "",
		desc: ""
	},
	{
		title: "",
		desc: ""
	}
]);
</script>

<style scoped>
.card {
	@apply w-full rounded-md bg-purple border border-secondary flex flex-col items-center gap-4 justify-between p-4 md:flex-row md:gap-10 md:p-8 text-secondary;
}
.card-circle {
	@apply text-white text-sm font-bold border border-secondary flex items-center justify-center rounded-full bg-purple flex-shrink-0 h-8 w-8 md:text-xl md:h-16 md:w-16;
}
</style>
