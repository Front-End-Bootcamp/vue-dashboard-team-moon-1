<script setup>
import Logo from '@/components/Shared/Logo.vue';

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
		gap: 22px;
		margin-left: 20px;

	}

	.brand{
		font-weight: bold;
		font-size: 20px;
		color: black;
	}
</style>