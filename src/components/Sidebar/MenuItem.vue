<script setup>

import { defineAsyncComponent } from "vue";
const IconComp = defineAsyncComponent(() => import(/* @vite-ignore */`/src/assets/svg/${props.icon}.vue`));
const props = defineProps(["name", "icon", "isActive"]);
const emits = defineEmits(["setCategory"])

const activeButtonHandler = () => {
	emits("setCategory")
}

</script>

<template>
	
	<div class="menuitem" @click="activeButtonHandler" :class = "{active: isActive}">
		<IconComp />
		<button>{{ props.name }}</button>
	</div>
</template>

<style scoped>
	.menuitem{
		display: flex;
		gap: 18.5px;
		padding: 16px 30px;		
		align-items: center;
	}

	.active{
		color:#00DB99;
		background: #F9F9F9 ;
		border-radius: 8px;
	}


</style>