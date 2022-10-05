<script setup>
import { onMounted, ref } from 'vue';
import { getCategories, getProjects } from "@/services/services"
import Sidebar from "./components/Sidebar/Sidebar.vue"
import Header from "./components/Header/Header.vue"
import CardGroup from "./components/CardGroup/CardGroup.vue"
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
	<div class="wrapper flex gap-[30px]">
		<div class="w-[315px]">
			<Sidebar :categories="categories"/>
		</div>
		<div class="flex-1 flex flex-col gap-[30px]">
			<Header/>
			<CardGroup :data="projects"/>
		</div>
	</div>
</template>

<style scoped>
</style>
