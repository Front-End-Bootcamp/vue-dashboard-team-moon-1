<script setup>
import PlusIcon from '../../assets/svg/Plus.vue';
import List from '../../assets/svg/List.vue';
import Search from '../../assets/svg/Search.vue';
import Message from '../../assets/svg/Message.vue';
import Bell from '../../assets/svg/Bell.vue';
import Settings from '../../assets/svg/Settings.vue';

</script>
<template>
	<div class="wrapper">
		<div class="top">
			<h1 class="sectionHeader">Projects</h1>
			<div class="inputWrapper">
				<Search class="searchIcon" />
				<input class="txtInput" type="text" placeholder="Search">
			</div>
			<div class="topButtons">
				<Message />
				<Bell />
				<Settings />
			</div>
			<img class="profilePhoto" src="../../assets/png/profile_1.png" alt="profile_photo">
			<div class="profileInfos">
				<p class="person">Asfak Mahmudb</p>
				<p class="mail">asfakmahmudb@gmail.com</p>
			</div>
		</div>
		<div class="bottom">
			<button class="newButton">
				<PlusIcon class="plusIcon" />
				New
			</button>
			<div class="bottombars">
				<div class="filterButtonsLeft">
					<button>All</button>
					<button>Inactive</button>
					<button>Active</button>
					<button>On hold</button>
					<button>Completed</button>
				</div>
				<div class="filterButtonsRight">
					<button>Default</button>
					<List />
				</div>
			</div>
		</div>
	</div>

</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
//font-family: 'Roboto', sans-serif;


.wrapper {
	display: flex;
	flex-direction: column;
	height: 160px;
	width: 100%;
	background-color: azure;

	.top {
		display: flex;
		align-items: center;
		height: 65%;


		.sectionHeader {
			font-family: 'Roboto', sans-serif;
			font-size: 24px;
			font-weight: 500;
			margin-left: 30px;
			color: #3C557A;
		}

		.inputWrapper {
			display: flex;
			align-items: center;
			height: 48px;
			width: 442px;
			background-color: #F1F2F7;
			border-radius: 8px;
			margin-left: 384px;

			.searchIcon {
				margin-left: 22px;
				margin-right: 16px;
			}

			.txtInput {
				outline: none;
				background-color: #00db9900;
				width: 80%;
			}
		}

		.topButtons {
			display: flex;
			align-items: center;
			gap: 29px;
			margin-left: 145px;
		}

		.profilePhoto{
			margin-left: 54px;
			margin-right: 15px;
		}
		.profileInfos {
			.person {
				font-size: 16px;
				font-weight: 500;
				color: #25364F;
			}

			.mail {
				font-size: 12px;
				font-weight: 400;
				color: #8B8B8B;
			}
		}

	}

	.bottom {
		display: flex;
		align-items: flex-end;
		height: 50%;

		.newButton {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 52px;
			width: 127px;
			border-radius: 26px;
			background-color: #00DB99;
			color: white;
			margin-left: 30px;
			font-size: 18px;
			font-weight: 500;
			font-family: 'Roboto', sans-serif;
			gap: 5px;
		}

		.bottombars {
			display: flex;
			width: 100%;
			height: 52px;
			margin-left: 30px;

			.filterButtonsLeft {
				display: flex;
				justify-content: center;
				align-items: center;
				gap: 48px;
				font-family: 'Roboto', sans-serif;
				font-size: 14px;
				font-weight: 400;
				color: #8B8B8B;

				
			}

			.filterButtonsRight {
				width: 100%;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				gap: 18px;
				margin-right: 18px;
				font-family: 'Roboto', sans-serif;
				font-size: 14px;
				font-weight: 400;
				color: #8B8B8B;
			}
		}
	}

}
</style>