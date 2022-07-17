<template>
	<section id="about">
		<h2 class="numbered-heading chakra">About Me</h2>

		<div class="inner">
			<div class="styledText">
				<div>
					<p>
						Ohayo! 👋🏾 My name is Anthony Akpan. I am a Frontend Engineer who loves building crazy ideas and trying out new things.
						I got into programming in 2015 when I found a Python e-book and then switched from Python to Web Development in 2017.
					</p>

					<p>
						Over the years, I have had the opportunity to work with amazing companies and people, and on diverse projects.
						<br />I recently started a YouTube channel which is focused on documenting my Passion Projects (open source projects I work on) and my journey in tech.
						<br />When I am not writing code, I am usually binging an anime/TV series.
						<br />PS: I looove One Piece. It's all you want in an anime (interesting and non-ending😂).
					</p>
				</div>

				<p class="italic mt-2 chakra">Below are a list of my tools and languages</p>
				<ul class="flex gap-2.5 items-center mt-1.5 flex-wrap">
					<li v-for="skill in skills" :key="skill" class="pill">{{skill}}</li>
				</ul>
			</div>

			<!-- <div class="imgContainer">
				<img class="img" src="../assets/images/me.png" alt="Headshot" />
			</div>-->
		</div>
	</section>
</template>

<script setup lang="ts">
let skills = [
	"Javascript",
	"Vue & Vuex",
	"Ionic",
	"React",
	"Python",
	"Tensorflow.js",
	"Figma",
	"Adobe XD",
	"Android Studio",
	"Firebase",
	"Mongodb",
	"WebSockets",
	"WebRTC",
	"Animations",
	"APIs"
];
</script>

<style scoped lang="scss">
#about {
	max-width: 900px;
	color: var(--secondary);
	.inner {
		display: grid;
		grid-template-columns: 3fr 2fr;
		grid-gap: 50px;
		place-items: center;

		@media (max-width: 768px) {
			display: block;
		}
	}
}
</style>
