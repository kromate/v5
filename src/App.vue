<template>
	<DefaultLayout>
		<Loader />
		<Hero />
	</DefaultLayout>
</template>

<script setup lang="ts">
import Loader from './components/Loader.vue';
import Hero from './components/Hero.vue';
import DefaultLayout from './layouts/DefaultLayout.vue';
</script>

<style scoped></style>
