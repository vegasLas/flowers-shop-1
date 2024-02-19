<script setup lang="ts">
const emits = defineEmits<{
  (e: 'closeModal'): void;
}>()
defineProps<{isFilterActive: boolean}>()
</script>

<template>
	<div @click="emits('closeModal')" class=" central-modal flex items-center justify-center fixed top-0 p-[30px] w-[100%] h-[100%] z-[11] bg-overlay">
		<div class="relative">
			<button @click="emits('closeModal')" class="absolute right-[-30px] ">
				<Icon size="28"  class="hover:text-[#f16e36] text-white" name="mi:close" />
			</button>
			<slot />
		</div>
	</div>
</template>

<style>
[data-theme=dark] .central-modal__icon-block {
	border-color: white;
}

</style>