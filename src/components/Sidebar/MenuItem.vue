<script setup>
import Icon from "../Shared/Icon.vue";
const props = defineProps(["name", "icon", "isActive"]);
const emits = defineEmits(["setCategory"])

const activeButtonHandler = () => {
	emits("setCategory")
}

</script>

<template>
	
	<div class="menuitem" @click="activeButtonHandler" :class = "{active: isActive}">
		<Icon :name="props.icon"/>
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
	.menuitem:hover{
		background: #F9F9F9;
		border-radius: 8px;
	}
	.active{
		color:#00DB99;
		background: #F9F9F9 ;
		border-radius: 8px;
	}


</style>