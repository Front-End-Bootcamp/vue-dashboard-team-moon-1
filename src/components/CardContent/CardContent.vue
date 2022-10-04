<script setup>
import { ref } from "vue";
import Card from "./Card.vue";
const props = defineProps(["data"])
const activeCard = ref(null)

</script>

<template>
	<div class="group">
		<Card v-for="item in props.data" :key="item" :item="item"/>
	</div>
</template>

<style scoped lang="scss">
	.group{
		@apply flex flex-wrap gap-[30px]
	}
</style>