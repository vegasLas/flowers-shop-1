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
	<div class="group text-center md:w-1/4 sm:">
		<div class="relative mb-2">
			<img :src="`./${img}.jpeg`" class="object-cover h-full w-full" />
			<ul class="hidden group-hover:block absolute bottom-5 w-full left-1/2 translate-x-[-50%]">
				<li class="mr-2 tooltip" data-tip="Добавить в корзину">
					<button class="btn rounded-full">
						<Icon name="mi:shopping-cart-add"/>
					</button>
				</li>
				<li class="mr-2 tooltip" data-tip="Быстрый просмотр">	
					<button class=" btn rounded-full">
						<Icon name="pajamas:search"/>
					</button>
				</li>
				<li class="mr-2 tooltip" data-tip="Добавить в желаемое">
					<button class="btn rounded-full">
						<Icon name="pajamas:heart"/>
					</button>
				</li>
			</ul>
		</div>
		<h4 class="mb-2">
			{{ title }}
		</h4>
		<span class="text-amber-500">
			{{ price }}
		</span>
	</div>
</template>

<style>

</style>