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
					v-for="(experience, n) in experiencesArray"
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
import { experiencesArray } from '@/composibles/experience';

</script>

<style scoped>
@import url('@/assets/styles/experience.css');
</style>

<style>
.desc a {
	@apply text-orange;
}
</style>
