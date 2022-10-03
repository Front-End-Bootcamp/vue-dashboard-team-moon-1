<script setup>
import { onMounted, ref } from 'vue';
import { getCategories, getProjects } from "@/services/services"
const categories = ref([])
const projects = ref([])

onMounted(async () => {
	const categoriesData = await getCategories()
	const projectsData = await getProjects()
	categories.value = categoriesData
	projects.value = projectsData
})
</script>

<template>

</template>

<style lang="scss" scoped>
	
</style>
