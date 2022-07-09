<template>
	<div class="h-[200vh]">
		<div class="center h-screen w-full bg shadow-md">
			<div class="line bg-[#ffffff7b] fixed h-0 w-0.5 z-10 md:left-16 left-5"/>
			<div class="line bg-[#ffffff7b] fixed h-0 w-0.5 z-10 md:right-16 right-5"/>
  <Loader  />
  		</div>
	</div>
</template>

<script setup lang="ts">
import Loader from './components/Loader.vue'
</script>

<style scoped>
.line{
    animation: grow 1.5s 1.5s 1 forwards;
}
.bg {
	   background: #958e69;
     transition: 0.8s ease-out;
}
.bg:before {
     content: "";
     position: absolute;
     background: #212143;
     bottom: 0;
     left: 0;
     right: 100%;
     top: 0;
     transition: top 0.65s ease-out;
      animation: flow 1.5s 1 forwards;
}

</style>
