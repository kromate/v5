<template>
	<section id="works">
		<h2 class="numbered-heading chakra" data-num="03.">my projects</h2>

		<ul class="grid grid-cols-3">
			<li v-for="n in 10" :key="n">
				<div class="card bg-purple rounded-sm border-">
					<header>
						<img src="../assets/images/logo.png" alt />
					</header>
				</div>
			</li>
		</ul>
	</section>
</template>

<script setup lang="ts"></script>

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
