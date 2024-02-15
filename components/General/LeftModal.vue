<script setup lang="ts">
const emits = defineEmits<{
  (e: 'closeModal'): void;
}>()
defineProps<{isFilterActive: boolean}>()
</script>

<template>
	<div class="block lg:hidden">
		<div :class="[`general-transition left-modal fixed top-0 p-[30px] h-[100%] bg-[var(--fallback-b1,oklch(var(--b1)/1))] z-[11] w-[415px] left-[-415px]`, isFilterActive ? '!left-0' : '']">
			<div class="flex justify-end">
				<button @click="emits('closeModal')" class="left-modal__icon-block p-2 border border-solid border-[#e6e6e6]">
					<Icon class="hover:text-[#f16e36]" name="mi:close" />
				</button>
			</div>
			<slot />
		</div>
		<div @click="emits('closeModal')" :class="['general-transition', isFilterActive ? 'bg-overlay' : '']"></div>
	</div>
</template>

<style scoped>
[data-theme=dark] .left-modal__icon-block {
	border-color: white;
}

</style>