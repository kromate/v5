<template>
	<section id="experience">
		<h2 class="numbered-heading chakra" data-num="02.">My Experience</h2>
		<div class="relative mt-14">
			<div
				class="absolute z-0 border-r border-orange ml-4 top-14 bottom-14 md:ml-8"
			></div>
			<div class="relative z-10 flex flex-col gap-4">
				<div
					class="flex items-center gap-2 md:gap-10"
					v-for="(experience, n) in experiences"
					:key="n"
				>
					<div class="card-circle" >0{{ n }}</div>
					<div class="card" data-aos="fade-left" data-aos-duration="500">
						<div class="flex items-center gap-4 md:gap-10">
							<div>
								<div class="text-white opacity-90 font-medium md:text-xl">
									{{ experience.title }}
									<span v-if="experience.link">
										(
										<a
											:href="experience.link.url"
											target="_blank"
											rel="noopener noreferrer"
											class="font-bold text-orange"
											>{{ experience.link.name }}</a
										>
										)
									</span>
								</div>
								<div
									class="mt-2 text-sm md:text-base desc"
									v-html="experience.desc"
								></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const experiences = ref([
	{
		title: 'Self Taught',
		desc: 'Began teaching myself programming and how to code around November 2017 the programming language was python but later switched to web dev and javascript early 2018',
	},
	{
		title: 'B.sc in Computer Engineering',
		desc: 'I underwent a B.Sc program in computer Engineering in the university of lagos.',
	},
	{
		title: 'Andela devC training',
		link: { name: 'devC', url: 'https://devctraining.andela.com/' },
		desc: `I Participated in the Andela Learning Community devC program in which I learnt to improve my web development skills and work in a team.`,
	},
	{
		title: 'Google Africa Developer sholarship',
		link: { name: 'GADS', url: 'https://gads.andela.com/' },
		desc: `I qualified for the GADS 2019 program, it was during this program I deepened my frontend development skill and acquired new skills i.e backend development with node.
Later went on to become a Mentor for the program the following year GADS 2020`,
	},
	{
		title: 'Hackacthons',
		desc: `Participated in various Hackacthons ranging from government hosted like
              <a href="https://cchubnigeria.com/datahackathon/"  target="_blank" rel="noopener"
                ><i>D4G</i></a
              >
              to private enterprise types like
              <a href="https://ravepay.co/"  target="_blank" rel="noopener"
                ><i>rave with flutterwave</i></a
              >`,
	},
]);
</script>

<style scoped>
.card {
	@apply w-full rounded-md bg-badge border border-secondary flex flex-col items-center gap-4 justify-between p-4 md:flex-row md:gap-10 md:p-8 text-secondary;
}
.card-circle {
	@apply text-white text-sm font-bold border border-secondary flex items-center justify-center rounded-full bg-badge flex-shrink-0 h-8 w-8 md:text-xl md:h-16 md:w-16;
}
</style>

<style>
.desc a {
	@apply text-orange;
}
</style>
