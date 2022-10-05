<template>
	<div class="logo">
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="12" cy="12" r="10" stroke="#0075FF" stroke-width="4" />
		</svg>

		<svg class="small" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="8" cy="8" r="6" stroke="#1BE3A7" stroke-width="4" />
		</svg>
	</div>
</template>

<style scoped lang="scss">
.logo {
	display: flex;
	align-items: flex-end;

	.small {
		transform: translateX(-60%) translateY(45%);
	}
}
</style>