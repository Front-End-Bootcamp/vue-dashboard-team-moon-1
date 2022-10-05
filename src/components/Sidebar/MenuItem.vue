<script setup>
import Home from "@/assets/svg/Home.vue";
import Projects from "@/assets/svg/Projects.vue";
import Modules from "@/assets/svg/Modules.vue";
import Sprint from "@/assets/svg/Sprint.vue";
import Members from "@/assets/svg/Members.vue";
import Reports from "@/assets/svg/Reports.vue";

const props = defineProps(["name", "icon"]);
</script>

<template>
	<div class="sidebarmenuitem">
		<component :is="props.icon" />
		<button>{{ props.name }}</button>
	</div>
</template>
