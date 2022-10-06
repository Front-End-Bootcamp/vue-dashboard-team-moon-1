<script setup>
import { onMounted, ref } from 'vue';
import { getCategories, getProjects, getFilters, getActiveUser } from "@/services/services"
import Sidebar from "./components/Sidebar/Sidebar.vue"
import Header from "./components/Header/Header.vue"
import CardGroup from "./components/CardGroup/CardGroup.vue"
const categories = ref([])
const projects = ref([])
const filters = ref([])
const activeUser = ref({})

onMounted(async () => {
	const categoriesData = await getCategories()
	const projectsData = await getProjects()
	const filtersData = await getFilters()
	const userData = await getActiveUser()
	categories.value = categoriesData
	projects.value = projectsData
	filters.value = filtersData
	activeUser.value = userData
})
</script>

<template>
	<div class="main">
		<Sidebar :categories="categories"/>
		<div class="flex-1 flex flex-col gap-[30px]">
			<Header :filters="filters" :activeUser="activeUser"/>
			<CardGroup :data="projects"/>
		</div>
	</div>
</template>	

<style scoped lang="scss">
	.main{
		@apply flex gap-[30px]
	}
</style>
