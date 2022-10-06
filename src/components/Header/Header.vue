<script setup>
import Icon from '../Shared/Icon.vue';

</script>
<template>
	<div class="wrapper">
		<div class="top">
			<h1 class="sectionHeader">Projects</h1>
			<div class="pushRight">
				<div class="inputWrapper">
					<Icon name="Search" class="searchIcon"/>
					<input class="txtInput" type="text" placeholder="Search">
				</div>
				<div class="topButtons">
					<Icon name="Message"/>
					<Icon name="Bell"/>
					<Icon name="Settings"/>
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
				<Icon name="HeaderPlus"/>
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
						<Icon name="List"/>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<style lang="scss" scoped>
.wrapper {
	@apply flex flex-col h-40 w-full pt-[30px] px-[30px];

	// display: flex;
	// flex-direction: column;
	// height: 160px;
	// width: 100%;
	// padding: 30px 30px 0;

	.top {
		@apply flex items-center justify-between mb-7;

		// display: flex;
		// align-items: center;
		// justify-content: space-between;
		// margin-bottom: 28px;

		.pushRight {

			@apply flex px-[100px] ml-auto;
			// display: flex;
			// padding: 0 100px;
			// margin-left: auto;
		}

		.sectionHeader {
			@apply text-[28px] font-medium text-navy;
			// font-size: 28px;
			// font-weight: 500;
			// color: #3C557A;
		}

		.inputWrapper {
			@apply flex items-center h-12 w-[442px] bg-gray rounded-lg;
			// display: flex;
			// align-items: center;
			// height: 48px;
			// width: 442px;
			// background-color: #F1F2F7;
			// border-radius: 8px;

			.searchIcon {
				@apply ml-[22px] mr-4;
				// margin-left: 22px;
				// margin-right: 16px;
			}

			.txtInput {
				@apply outline-none bg-gray w-4/5;
				// outline: none;
				// background-color: #F1F2F7;
				// // background-color: #00db9900;
				// width: 80%;
			}
		}

		.topButtons {
			@apply flex items-center gap-[39px] ml-[148px];
			// display: flex;
			// align-items: center;
			// gap: 39px;
			// margin-left: 148px;
		}

		// .profilePhoto {
		// 	margin-left: 54px;
		// 	margin-right: 15px;
		// }

		.profileInfos {
			@apply flex gap-4 items-center ml-[54px];
			// display: flex;
			// gap: 16px;
			// align-items: center;
			// margin-left: 54px;

			.profilePhoto {
				@apply w-10;
				// width: 40px;
			}

			.person {
				@apply text-[16px] font-medium text-navy;
				// font-size: 16px;
				// font-weight: 500;
				// color: #25364F;
			}

			.mail {
				@apply text-[12px] font-normal text-gray-deep;
				// font-size: 12px;
				// font-weight: 400;
				// color: #8B8B8B;
			}
		}
	}

	.bottom {
		@apply flex items-end gap-[30px] h-1/2;
		// display: flex;
		// align-items: flex-end;
		// gap: 30px;
		// height: 50%;
		// color: #8b8b8b;

		.newButton {
			@apply flex justify-center items-center px-[1.9rem] py-[0.8rem];
			@apply rounded-[26px] bg-green text-white fill-white; 
			@apply text-[18px] font-medium gap-[15px];
			// display: flex;
			// justify-content: center;
			// align-items: center;
			// padding: .8rem 1.9rem;
			// // height: 52px;
			// // min-width: 127px;
			// border-radius: 26px;
			// background-color: #00DB99;
			// color: white;
			// font-size: 18px;
			// font-weight: 500;
			// // font-family: 'Roboto', sans-serif;
			// gap: 15px;
		}

		.bottombars {
			@apply flex flex-1 h-[52px] px-5 rounded-lg border border-gray ;
			// display: flex;
			// width: 100%;
			// height: 52px;
			// padding: 0 20px;
			// // margin-left: 30px;
			// border-radius: 8px;
			// border: 1px solid #F1F2F7;

			.filterButtons {
				@apply flex flex-1 justify-start items-center gap-12 ml-5 text-[14px] font-normal text-gray-deep;
				// display: flex;
				// flex: 1;
				// justify-content: flex-start;
				// align-items: center;
				// gap: 48px;
				// margin-left: 20px;
				// font-family: 'Roboto', sans-serif;
				// font-size: 14px;
				// font-weight: 400;
				// color: #8B8B8B;

				.right {
					
					@apply flex justify-self-end ml-auto items-center gap-[18px] text-[14px] font-normal;
					// justify-self: end;
					// margin-left: auto;
					// display: flex;
					// align-items: center;
					// gap: 18px;
					// font-size: 14px;
					// font-weight: 400;
				}

			}

		}
	}

}
</style>