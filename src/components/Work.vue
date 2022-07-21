<template>
	<section id="works" class="flex flex-col">
		<h2 class="numbered-heading chakra" data-num="03.">my projects</h2>
		<router-link to="/archive" class="text-orange -mt-3"
			>View a full list of my projects</router-link
		>
		<transition-group
			appear
			class="grid grid-cols-3"
			@before-enter="beforeEnter"
			@enter="enter"
			tag="ul"
		>
			<li v-for="n in 5" :key="n">
				<div class="card bg-badge rounded-sm border-">
					<header class="w-full">
						<div class="flex items-center justify-between w-full">
							<folder class="text-4xl text-orange" />
							<div class="flex items-center">
								<redirect class="text-sm text-secondary" />
							</div>
						</div>

						<h2 class="text-white font-semibold text-2xl mt-5 mb-2">
							Stranerd
						</h2>
						<p class="text-secondary">
							Worked on a variety of projects from the landing page to the main
							application, were i worked with other developers to deliver timely
							updates and bug fixes when neccessary and meeting both business
							and custom demands on time
						</p>
					</header>
					<footer class="flex gap-2 mt-5 flex-wrap">
						<span class="pill !py-1" v-for="n in 5" :key="n">firebase</span>
					</footer>
				</div>
			</li>
		</transition-group>
		<!-- <router-link to="/archive" class="big-btn mt-5"
			>View Project Archive</router-link
		> -->
	</section>
</template>

<script setup lang="ts">
import folder from '@/assets/icons/folder.vue';
import redirect from '@/assets/icons/redirect.vue';
import { gsap } from 'gsap';

const beforeEnter = (el: any) => {
	el.style.opacity = '0';
	el.style.transform = 'translateY(100px)';
};
const enter = (el: any, done: () => void) => {
	gsap.to(el, {
		opacity: 1,
		y: 0,
		duration: 0.5,
		onComplete: done,
		delay: parseInt(el.dataset.index as string) * 0.1,
	});
};
</script>

<style scoped>
ul {
	list-style: none;
	padding: 0px;
	margin: 50px 0px 0px;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 15px;
	position: relative;
}
.card {
	box-shadow: 0 10px 30px -15px var(--primary);
	display: flex;
	-webkit-box-pack: justify;
	justify-content: space-between;
	-webkit-box-align: center;
	flex-direction: column;
	align-items: flex-start;
	position: relative;
	height: 100%;
	padding: 2rem 1.75rem;
	overflow: auto;
}
</style>
