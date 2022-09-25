<template>
	<section id="about">
		<h2 class="numbered-heading chakra" data-num="01.">About Me</h2>

		<div
			class="inner items-start justify-items-end"
			data-aos="fade-in"
			data-aos-duration="3500"
			data-aos-easing="linear"
		>
			<div class="styledText">
				<div>
					<p>
						Ohayo! 👋🏾 My name is Anthony Akpan. I am a Frontend Engineer who
						loves building crazy ideas and trying out new things. I got into
						programming in 2017 when I found a Python e-book and then switched
						from Python to Web Development in 2018.
					</p>

					<p>
						Over the years, I have had the opportunity to work with amazing
						companies and people, and on diverse projects.
						<br />I recently started a
						<a
							href="https://www.youtube.com/c/Kromate_24"
							class="text-orange"
							target="_blank"
							rel="noopener noreferrer"
							>YouTube channel</a
						>
						which is focused on documenting my Passion Projects (open source
						projects I work on) and my journey in tech. <br />When I am not
						writing code, I am usually binging an anime/TV series. <br />PS: I
						looove One Piece. It's all you want in an anime (interesting and
						non-ending😂).
					</p>
				</div>

				<p class="italic my-3 chakra text-orange ">
					Below are a list of my tools and languages
				</p>
				<ul class="flex  items-center gap-2.5 mt-1.5 flex-wrap">
					<li v-for="skill in skills" :key="skill" class="pill m-1">{{ skill }}</li>
				</ul>
			</div>

			<div class="flex flex-col gap-4 mt-1 md:mt-0">
				<img
					class="img w-[270px] rounded-md"
					src="../assets/images/me.png"
					alt="Headshot"
				/>
				<span class="w-[270px] text-sm text-center"
					>This bitmoji would have to do till I can take a proper headshot
					😅</span
				>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ref } from '@vue/reactivity';

const skills = ref([
	'Javascript',
	'Vue & Vuex',
	'Ionic',
	'React',
	'Python',
	'Tensorflow.js',
	'Figma',
	'Adobe XD',
	'Android Studio',
	'Firebase',
	'Mongodb',
	'WebSockets',
	'WebRTC',
	'Animations',
	'APIs',
	'plugins',
	'chrome extensions',
	'Testing (unit and E2E)',
	'System Design',
]);
</script>

<style scoped lang="scss">
#about {
	color: var(--secondary);
	.inner {
		display: grid;
		grid-template-columns: 3fr 2fr;
		grid-gap: 50px;

		@media (max-width: 768px) {
			@apply flex flex-col justify-center items-center;
		}
	}
}
</style>
