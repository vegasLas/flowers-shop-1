<script setup lang="tsx">
import { Icon } from '#components';
const data = [
	{	img_src: 'hot_deal_5', title: 'Люблю тебя', price: '1000'},
	{	img_src: 'hot_deal_6', title: 'Любовная история', price: '1000'},
	{	img_src: 'hot_deal_7', title: 'Любовная песня', price: '1000'},
	{	img_src: 'hot_deal_8', title: 'Маленькая вещь', price: '1000'}
]
defineProps<{img: string, price: string, title: string}>()
</script>

<template>
	<div class="group text-center md:w-1/4">
		<div class="relative mb-2">
			<img :src="`./${img}.jpeg`" class="object-cover h-full w-full" />
			<ul class="hidden
					md:flex
					gap-2
					md:gap-3
					justify-center
					opacity-0
					duration-500
					transition-all
					delay-0
					ease-linear
					group-hover:opacity-100
					absolute
					bottom-5
					group-hover:bottom-8
					w-full
					left-1/2
					translate-x-[-50%]">
				<li class="tooltip" data-tip="Добавить в корзину">
					<button class="hover:text-white border-0 hover:bg-amber-500 btn rounded-full">
						<Icon name="mi:shopping-cart-add"/>
					</button>
				</li>
				<li class="tooltip" data-tip="Быстрый просмотр">	
					<button class="hover:text-white border-0 hover:bg-amber-500  btn rounded-full">
						<Icon name="pajamas:search"/>
					</button>
				</li>
				<li class="tooltip" data-tip="Добавить в желаемое">
					<button class="hover:text-white border-0 hover:bg-amber-500 btn rounded-full">
						<Icon name="pajamas:heart"/>
					</button>
				</li>
			</ul>
		</div>
		<h4  class="m-auto cursor-pointer w-fit hover:text-[#f16e36] mb-2">
			{{ title }}
		</h4>
		<span class="text-amber-500">
			{{ price }}
		</span>
	</div>
</template>

<style>

</style>