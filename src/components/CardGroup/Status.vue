<script setup>
import { computed } from 'vue';

	const props = defineProps(["status"])
	const statusColor = computed(() => Object.keys(statusClasses).find(key => statusClasses[key] === true))
	const statusClasses = {
	"green": props.status === "Active",
	"onhold": props.status === "On Hold",
	"inactive": props.status === "Inactive",
}
</script>

<template>
	<span class="status">
		<span class="status__circle" :class="`bg-${statusColor}`"></span>
		<strong :class="`text-${statusColor}`">{{props.status}}</strong>
	</span>
</template>

<style scoped lang="scss">
	.status{
		@apply inline-flex gap-2 justify-center items-center;

		&__circle{
			@apply h-2 w-2 rounded-full
		}
	}
</style>