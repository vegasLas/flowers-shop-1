<script setup lang="ts">
const data = [
	{section: 'Помощь & информация', subsections: [
		{title: 'пример', link: ''},
		{title: 'пример', link: ''},
		{title: 'пример', link: ''},
		{title: 'пример', link: ''},
		{title: 'пример', link: ''},
	]},
	{section: 'О нас', subsections: [
		{title: 'пример', link: ''},
		{title: 'пример', link: ''},
		{title: 'пример', link: ''},
		{title: 'пример', link: ''},
		{title: 'пример', link: ''},
	]},
	{section: 'Категории', subsections: [
		{title: 'пример', link: ''},
		{title: 'пример', link: ''},
		{title: 'пример', link: ''},
		{title: 'пример', link: ''},
		{title: 'пример', link: ''},
	]}
]

</script>

<template>
	<footer class="footer p-10 text-base-content">
	<aside>
		<h4 class="text-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl">LasFlores</h4>
		<div class="">
			<a href="#" target="_blank"><Icon class="" size="30px" name="bxl:instagram"></Icon></a>
			<a href="#" target="_blank"><Icon class="" size="30px" name="bxl:whatsapp"></Icon></a>
			<a href="#" target="_blank"><Icon class="" size="30px" name="icon-park-outline:telegram"></Icon></a>
		</div>
	</aside> 
	<nav>
		<h6 class="footer-title">Заголовок</h6> 
		<a class="cursor-pointer duration-300 hover:text-[#f16e36]">подзаголовок</a>
		<a class="cursor-pointer duration-300 hover:text-[#f16e36]">подзаголовок</a>
		<a class="cursor-pointer duration-300 hover:text-[#f16e36]">подзаголовок</a>
		<a class="cursor-pointer duration-300 hover:text-[#f16e36]">подзаголовок</a>
	</nav> 
	<nav>
		<h6 class="footer-title">Заголовок</h6> 
		<a class="cursor-pointer duration-300 hover:text-[#f16e36]">подзаголовок</a>
		<a class="cursor-pointer duration-300 hover:text-[#f16e36]">подзаголовок</a>
		<a class="cursor-pointer duration-300 hover:text-[#f16e36]">подзаголовок</a>
		<a class="cursor-pointer duration-300 hover:text-[#f16e36]">подзаголовок</a>
	</nav> 
</footer>
</template>

<style scoped>
</style>