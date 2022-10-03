<script setup>
import { onMounted, ref } from 'vue';
import { getCategories, getProjects } from "@/services/services"
import Sidebar from "./components/Sidebar/Sidebar.vue"
import Header from "./components/Header/Header.vue"
import CardContent from "./components/CardContent/CardContent.vue"
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
	<div class="wrapper flex">
		<div class="w-1/5">
			<Sidebar :categories="categories"/>
		</div>
		<div class="flex-1">
			<Header/>
			<CardContent :data="projects"/>
		</div>
	</div>
</template>

<style scoped>
</style>
