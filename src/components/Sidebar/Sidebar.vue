<script setup>
import MenuItem from "./MenuItem.vue";
import MenuLogo from "./MenuLogo.vue";
const props = defineProps(["categories"]);
</script>

<template>
	<div class="wrapper">
		<div class="sidebar">
			<MenuLogo/>
			<div class="sidebar__menu">
				<MenuItem
					v-for="item in props.categories"
					:key="item.name"
					:name="item.name"
					:icon="item.icon"
				/>
			</div>
		</div>
	</div>
</template>
