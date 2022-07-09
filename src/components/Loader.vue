<template>

			<div class="relative center text-white pos text-7xl">
				<img
					src="../assets/images/border.svg"
					alt="border"
					class="logo-border absolute w-40 rotate-45"
				/>

				<span class=" p-10 font-semibold">K</span>
			</div>


</template>

<script setup lang="ts">

</script>

<style >
body{
    background: #212143;
}

.logo-border {
	animation: spin 1.5s 1;

}
.pos{
    animation: fade 0.5s 1.5s 1 forwards;
}

@keyframes grow {
    from{opacity:0; height: 0;}
    to{ opacity:1; height: 100%;}
}
@keyframes fade {
    from{opacity:1;}
    to{ opacity:0; display: none; transform: scale(0.2);}
}

@keyframes flow {
    from{right: 100%;}
    to{right: 0;}
}

@keyframes spin {
	0% {transform: rotate(45deg) scale(1);}
    50%{transform: rotate(135deg) scale(1.5);}
    100%{transform: rotate(225deg) scale(1); }
}
</style>


