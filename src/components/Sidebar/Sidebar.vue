<script setup>
import MenuItem from "./MenuItem.vue";
import MenuLogo from "./MenuLogo.vue";
const props = defineProps(["categories"]);
</script>

<template>
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
			<div class="logout">Logout</div>
		</div>
</template>

<style>
	.sidebar{
		display: flex;
		flex-direction: column;
		height: 100vh;
		padding: 42px 20px;
	}

	.logout{
		margin-top: auto;
	}
</style>