<template>
	<div>
		<h4 class="
		text-bold
		text-xl sm:text-2xl md:text-3xl lg:text-4xl 
		mb-5 sm:mb-6 md:mb-8 lg:mb-10 
		
		">
			Начните поиск
		</h4>
		<label class="relative text-gray-400 focus-within:text-gray-600 block">
			<input
			type="text"
			name="header-search"
			id="header-search"
			@input="(event) => searchQuery = event.target.value.trim()"
			placeholder="поиск"
			class="form-input border-none border-gray-900 py-3 px-4 appearance-none w-full block pl-14 text-[var(--fallback-bc,oklch(var(--bc)/1))] focus:outline-none" />
			<Icon class="pointer-events-none w-5 h-5 sm:w-8 sm:h-8 absolute top-1/2 transform -translate-y-1/2 right-3" name="formkit:search" />
		</label>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>