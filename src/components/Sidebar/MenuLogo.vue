<script setup>
import Logo from '../../assets/svg/Logo.vue';

</script>
<template>
	<div class="logo">
		<Logo/>
		<span class="brand">ChirKuut</span>
	</div>
</template>

<style scoped>
	.logo{
		display: flex;
		align-items: center;
		gap: 5px;
	}

	.brand{
		font-weight: bold;
		font-size: 20px;
		color: black;
	}
</style>