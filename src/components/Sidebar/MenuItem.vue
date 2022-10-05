<script setup>

import { defineAsyncComponent } from "vue";

const IconComp = defineAsyncComponent(() => import(/* @vite-ignore */`/src/assets/svg/${props.icon}.vue`));

const props = defineProps(["name", "icon"]);

</script>

<template>
	<div class="sidebarmenuitem">
		<IconComp />
		<button>{{ props.name }}</button>
	</div>
</template>
