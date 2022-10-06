<script setup>
	import { ref } from "vue";
	import Card from "./Card.vue";
	const props = defineProps(["data"])
	const activeCard = ref(null)
	const activeCardHandler = (id) => {
		activeCard.value = id
	}
	</script>
	
	<template>
		<div class="group">
			<Card v-for="item in props.data" :item="item" @setActive="activeCardHandler" :isActive="activeCard === item.id" :key="item.id" />
		</div>
	</template>
	
	<style scoped lang="scss">
		.group{
			@apply flex flex-wrap gap-[30px]
		}
	</style>