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
					<div class="card-circle">0{{ n }}</div>
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
		desc: `I Participated in various Hackacthons ranging from government hosted like
              <a href="https://cchubnigeria.com/datahackathon/"  target="_blank" rel="noopener"
                ><i>D4G</i></a
              >
              to private enterprise types like
              <a href="https://ravepay.co/"  target="_blank" rel="noopener"
                ><i>rave with flutterwave</i></a
              >`,
	},
	{
		title: 'Founded Kromtech',
		desc: `I Founded the company Kromtech early 2019, the main goal of the company was to build and create open-source softwares that would be beneficial to students at all levels`,
	},
	{
		title: 'Engineering Career Expo',
		link: { name: 'ECX', url: 'http://ecx.website/' },
		desc: `I Was accepted as a Tutor for the ECX 2020 program where I taught web development to various students from various departments and spheres of life`,
	},
	{
		title: 'Developer Student Club',
		link: { name: 'DSC', url: 'https://developers.google.com/community/dsc' },
		desc: `A member of the developer student club UNILAG and also a two time volunteered tutor teaching web technologies`,
	},
	{
		title: 'Ambassadorship and community roles',
		desc: `I started to take on more Ambassadorship and community role. some of this roles include <a href="https://education.github.com/experts"  target="_blank" rel="noopener"> <i>Github Campus Expert</i> </a>,
		<a href="https://angelhack.com/ambassadors/"  target="_blank" rel="noopener"> <i>AngelHack Ambassador</i> </a>, <a href="https://ieeextreme.org/ambassadors/"  target="_blank" rel="noopener"> <i>IEEEXtreme Ambassador</i> </a>, and many others. `,
	},
	{
		title: 'Frontend Developer at Scelloo',
		link: { name: 'Scelloo', url: 'https://scelloo.com/' },
		desc: `I Got employed as a Frontend developer at Scelloo, a business and staff management company where I was assigned lead frontend developer for certain projects i.e Quantum`,
	},
	{
		title: 'Lead Frontend developer at Stranerd',
		link: { name: 'Stranerd', url: 'https://stranerd.com/' },
		desc: `I Was contacted by the Stranerd team to join them to build an amazing product, this was mostly due to my previous projects on kromtech i.e edu-tech which was also in-line with what they were trying to build. fell in love with the product and team`,
	},
	{
		title: 'Active Open-sourcer',
		link: {
			name: 'Youtube playlist',
			url: 'https://www.youtube.com/playlist?list=PLKQ0g8HhSxnfPgVu8c3IgMVkZOqrv9USy',
		},
		desc: `I started a youtube channel which led to me building more open-source project i.e built about 10+ projects within 3 months`,
	},
	{
		title: 'Lead Frontend developer at Wirepay',
		link: { name: 'Wirepay', url: 'https://sendwirepay.com/' },
		desc: `I Joined wirepay to build a financial service that enabled users to Receive, hold, and make payments in multiple currencies, create virtual and physical cards, and pay bills seamlessly.`,
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
