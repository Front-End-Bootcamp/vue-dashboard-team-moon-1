<script setup>

import { defineAsyncComponent } from "vue";
const IconComp = defineAsyncComponent(() => import(/* @vite-ignore */`/src/assets/svg/${props.icon}.vue`));
const props = defineProps(["name", "icon"]);

</script>

<template>
	<div class="menuitem">
		<IconComp />
		<button>{{ props.name }}</button>
	</div>
</template>

<style scoped>
	.menuitem{
		display: flex;
		gap: 18.5px;
	}
</style>