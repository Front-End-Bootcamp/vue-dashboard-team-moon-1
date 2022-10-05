<script setup>
	const props = defineProps(["name"])
</script>

<template>
	<div>
		<img :src="`/src/assets/svg/${props.name}.svg`" alt="icon">
	</div>
</template>	