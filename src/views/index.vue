<template>
	<DefaultLayout>
		<Hero />
		<About />
		<Experience />
		<Work />
		<Contact />
	</DefaultLayout>
</template>

<script setup lang="ts">
import Hero from '@/components/Hero.vue';
import About from '@/components/About.vue';
import Experience from '@/components/Experience.vue';
import Work from '@/components/Work.vue';
import Contact from '@/components/Contact.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
</script>

<style scoped></style>
