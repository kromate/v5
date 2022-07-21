<template>
	<section id="contact" class="text-secondary">
		<h2 class="numbered-heading chakra" data-num="04.">Contact</h2>
		<div class="flex-col center mt-44">
			<p class="chakra text-center max-w-xl flex flex-col text-xl items-center">
				<span class="chakra">That's all folks</span>

				<br />
				<span class="text-4xl md:text-6xl font-bold text-orange chakra">Get in Touch</span>
				<br />If you would love to work with me, collaborate on a project or just say "Hi"
				<span
					class="chakra"
					v-if="!show"
				>
					click the links on the
					<b class="text-white">sidebar</b>
				</span>

				<span v-else target="_blank" rel="noreferrer">
					click the button bellow
					<br />
					<br />
					<a class="big-btn !mt-5" href="mailto:akpananthony33@gmail.com">say hello</a>
				</span>
			</p>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ref } from "vue";
const mql = window.matchMedia("(max-width: 700px)");

const show = ref(mql.matches);
</script>

<style scoped></style>
