<template>
	<section id="experience">
		<h2 class="text-center text-white font-bold text-xl uppercase md:text-4xl">
			How it
			<span class="text-flamingo">works</span>
		</h2>
		<div class="relative mt-14">
			<div class="absolute z-0 border-r border-purple ml-4 top-12 bottom-24 md:bottom-12 md:ml-8"></div>
			<div class="relative z-10 flex flex-col gap-4">
				<div class="flex items-center gap-2 md:gap-10" v-for="n in 10" :key="n">
					<div
						class="text-sunglow text-sm font-bold flex items-center justify-center rounded-full bg-purple flex-shrink-0 h-8 w-8 md:text-xl md:h-16 md:w-16"
					>0{{n}}</div>
					<div
						class="w-full rounded-md bg-purple flex flex-col items-center gap-4 justify-between p-4 md:flex-row md:gap-10 md:p-8"
					>
						<div class="flex items-center gap-4 md:gap-10">
							<div>
								<div class="text-white font-medium md:text-xl">Register for FREE</div>
								<div
									class="mt-2 text-heather text-sm md:text-base"
								>Take the first step and sign up for free with your email.</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
