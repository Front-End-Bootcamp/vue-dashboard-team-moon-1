<script setup>
import Icon from '../Shared/Icon.vue';
import User from './User.vue';
import Search from './Search.vue';
import Filters from './Filters.vue';
import { ref } from 'vue';

const props = defineProps(["activeUser", "filters"])
const activeFilter = ref(null)

const handleActiveFilter = (filter) => {
	activeFilter.value = filter
}
const searchText = ref("")
const user = ref({
	fullname: "Asfak Mahmud",
	email: "asfakmahmudbd@gmaill.com",
	photo: "profile_1.png"
})

const filters = ref([
	{
		"id": 1,
		"name": "All"
	},

	{
		"id": 2,
		"name": "Inactive"
	},

	{
		"id": 3,
		"name": "Active"
	},

	{
		"id": 4,
		"name": "On hold"
	},

	{
		"id": 5,
		"name": "Completed"
	}
])
</script>
<template>
	<div class="wrapper">
		<div class="top">
			<h1 class="sectionHeader">Projects</h1>
			<div class="pushRight">
				<Search v-model="searchText" />
				<div class="topButtons">
					<Icon name="Message" />
					<Icon name="Bell" />
					<Icon name="Settings" />
				</div>
				<User :user="user" />
			</div>
		</div>
		<div class="bottom">
			<button class="newButton">
				<Icon name="HeaderPlus" />
				New
			</button>
			<Filters :filters="filters" @setActiveFilter="handleActiveFilter" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.wrapper {
	@apply flex flex-col h-40 w-full pt-[30px] px-[30px];

	.top {
		@apply flex items-center justify-between mb-7;

		.pushRight {
			@apply flex px-[100px] ml-auto;
		}

		.sectionHeader {
			@apply text-[28px] font-medium text-navy;
		}

		.topButtons {
			@apply flex items-center gap-[39px] ml-[148px];
		}
	}

	.bottom {
		@apply flex items-end gap-[30px] h-1/2;

		.newButton {
			@apply flex justify-center items-center px-[1.9rem] py-[0.8rem];
			@apply rounded-[26px] bg-green text-white fill-white;
			@apply text-[18px] font-medium gap-[15px];
		}

		.bottombars {
			@apply flex flex-1 h-[52px] px-5 rounded-lg border border-gray;

			.filterButtons {
				@apply flex flex-1 justify-start items-center gap-12 ml-5 text-[14px] font-normal text-gray-deep;

				.right {
					@apply flex justify-self-end ml-auto items-center gap-[18px] text-[14px] font-normal;
				}
			}
		}
	}
}
</style>