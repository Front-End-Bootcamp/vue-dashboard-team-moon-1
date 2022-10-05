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
			<div class="pushRight">
			<div class="inputWrapper">
				<Search class="searchIcon" />
				<input class="txtInput" type="text" placeholder="Search">
			</div>
			<div class="topButtons">
				<Message />
				<Bell />
				<Settings />
			</div>
			<div class="profileInfos">
				<img class="profilePhoto" src="../../assets/png/profile_1.png" alt="profile_photo">
				<div>
					<p class="person">Asfak Mahmudb</p>
					<p class="mail">asfakmahmudb@gmail.com</p>
				</div>
			</div>
			</div>

		</div>
		<div class="bottom">
			<button class="newButton">
				<PlusIcon class="plusIcon" />
				New
			</button>
			<div class="bottombars">
				<div class="filterButtons">
					<button>All</button>
					<button>Inactive</button>
					<button>Active</button>
					<button>On hold</button>
					<button>Completed</button>
					<div class="right">
						<button>Default</button>
						<List />
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<style lang="scss" scoped>
.wrapper {
	display: flex;
	flex-direction: column;
	height: 160px;
	width: 100%;
	padding: 30px 30px 0;

	.top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 28px;

		.pushRight{
			display: flex;
			padding: 0 100px;
			margin-left: auto;
		}

		.sectionHeader {
			font-size: 28px;
			font-weight: 500;
			color: #3C557A;
		}

		.inputWrapper {
			display: flex;
			align-items: center;
			height: 48px;
			width: 442px;
			background-color: #F1F2F7;
			border-radius: 8px;

			.searchIcon {
				margin-left: 22px;
				margin-right: 16px;
			}

			.txtInput {
				outline: none;
				background-color: #F1F2F7;
				// background-color: #00db9900;
				width: 80%;
			}
		}

		.topButtons {
			display: flex;
			align-items: center;
			gap: 39px;
			margin-left: 148px;
		}

		// .profilePhoto {
		// 	margin-left: 54px;
		// 	margin-right: 15px;
		// }

		.profileInfos {
			display: flex;
			gap: 16px;
			align-items: center;
			margin-left: 54px;

		.profilePhoto {
			width: 40px;
		}
			.person {
				font-size: 16px;
				font-weight: 500;
				color: #25364F;
			}

			.mail {
				font-size: 12px;
				font-weight: 400;
				// color: #8B8B8B;
			}
		}
	}

	.bottom {
		display: flex;
		align-items: flex-end;
		gap: 30px;
		height: 50%;
		color: #8b8b8b;

		.newButton {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: .8rem 1.9rem;
			// height: 52px;
			// min-width: 127px;
			border-radius: 26px;
			background-color: #00DB99;
			color: white;
			font-size: 18px;
			font-weight: 500;
			// font-family: 'Roboto', sans-serif;
			gap: 15px;
		}

		.bottombars {
			display: flex;
			width: 100%;
			height: 52px;
			padding: 0 20px;
			// margin-left: 30px;
			border-radius: 8px;
			border: 1px solid #F1F2F7;

			.filterButtons {
				display: flex;
				flex: 1;
				justify-content: flex-start;
				align-items: center;
				gap: 48px;
				margin-left: 20px;
				font-family: 'Roboto', sans-serif;
				font-size: 14px;
				font-weight: 400;
				// color: #8B8B8B;

				.right {
					justify-self: end;
					margin-left: auto;
					// width: 100%;
					display: flex;
					// justify-content: flex-end;
					align-items: center;
					gap: 18px;
					// margin-right: 18px;
					// font-family: 'Roboto', sans-serif;
					font-size: 14px;
					font-weight: 400;
					// color: #8B8B8B;
				}

			}

			// .filterButtonsRight {
			// 	width: 100%;
			// 	display: flex;
			// 	justify-content: flex-end;
			// 	align-items: center;
			// 	gap: 18px;
			// 	margin-right: 18px;
			// 	font-family: 'Roboto', sans-serif;
			// 	font-size: 14px;
			// 	font-weight: 400;
			// 	color: #8B8B8B;
			// }
		}
	}

}
</style>