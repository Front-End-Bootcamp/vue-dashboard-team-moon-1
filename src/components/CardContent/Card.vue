<script setup>
import { computed } from 'vue';
import { getImage } from '@/services/services';
import Plus from '../../assets/svg/Plus.vue';
import More from '../../assets/svg/More.vue';
import Status from './Status.vue';

const props = defineProps(["item"])
const notOnHold = computed(() => props.item.status !== "On Hold")
const dateLabel = computed(() => notOnHold.value ? "Start Date" : "Started")
const progressWidth = computed(() => `${props.item.progress}%`)
/**
 * * TODO proje title renkleri tailwindcss'e eklenecek #3C557A
 * * TODO icon renkleri tailwindcss'e eklenecek #8B8B8B
 * * TODO divider renk tailwind #CDDCEE
 * * Todo genel text #717986 main.scss global verilebilir color olarak
 */
</script>
<template>
	<div class="card">
		<div class="card__header">
			<span class="title">{{item.title}}</span>
			<div class="icons">
				<More />
			</div>
		</div>
		<div v-show="notOnHold">
			<Status class="description" :status="props.item.status" />
		</div>
		<div class="card__info">
			<div class="date">
				<h6 class="label">{{dateLabel}}</h6>
				<span class="description">{{item.startDate}}</span>
			</div>
			<div v-show="!notOnHold" class="status">
				<h6 class="label">Status</h6>
				<Status class="description" :status="props.item.status" />
			</div>
			<div class="members">
				<div class="members__badge">
					<span class="value">
						{{item.tasks}}
					</span>
					<span class="label">Tasks</span>
				</div>
				<div class="members__badge">
					<span class="value">
						{{item.users}}
					</span>
					<span class="label">Members</span>
				</div>
			</div>
		</div>
		<div class="card__members ">
			<div class="header">
				<span class="description">Members</span>
			</div>
			<div class="images">
				<span v-for="member in item.members">
					<img :src="getImage(member.photo)" alt="Member Photo">
				</span>
				<button class="add-btn">
					<Plus color="#8b8b8b" />
				</button>
			</div>
		</div>
		<div class="progress">
			<div class="progress__header">
				<span class="description">Progress</span>
				<span class="label">{{progressWidth}}</span>
			</div>
			<div class="progress__bar">
				<div class="width" :style="{width: progressWidth}"></div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.card {
	@apply w-[495px] h-[300px] border border-border p-6 flex flex-col justify-evenly rounded-lg gap-3;

	.label {
		@apply text-xs;
	}

	.description {
		@apply text-[13px] font-medium;
	}

	&__header {
		@apply flex justify-between items-center;

		.title {
			@apply text-lg font-medium text-[#3C557A];
		}

		.icons {
			@apply flex;
		}
	}

	&__info {
		@apply flex justify-between text-center items-center mt-1.5;


		.members {
			@apply grid grid-cols-2 p-1 py-3.5 bg-gray text-center divide-x divide-[#CDDCEE] w-[148px] rounded-md;

			&__badge {
				@apply flex flex-col;

				.value {
					@apply text-lg text-[#3C557A] font-bold;
				}

				.label {
					@apply text-xs;
				}
			}
		}
	}

	&__members {
		@apply flex flex-col gap-3 -mt-5;

		.header {
			@apply block;
		}

		.images {
			@apply flex gap-1;

			.add-btn {
				@apply border border-[#8b8b8b] h-8 w-8 rounded-full flex items-center justify-center;
			}
		}
	}

	.progress {
		@apply w-full mt-auto;

		&__header {
			@apply flex justify-between mb-2;
		}

		&__bar {
			@apply bg-gray-dark rounded-lg;

			.width {
				@apply h-2 bg-green rounded-md
			}
		}
	}
}
</style>