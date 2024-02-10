<script setup lang="ts">
const data = [
	{title: 'пример', img_src: 'hot_deal_1', link: '', price: 1000},
	{title: 'пример', img_src: 'hot_deal_2', link: '', price: 1000},
	{title: 'пример', img_src: 'hot_deal_3', link: '', price: 1000},
	{title: 'пример', img_src: 'hot_deal_4', link: '', price: 1000},
	{title: 'пример', img_src: 'hot_deal_5', link: '', price: 1000},
	{title: 'пример', img_src: 'hot_deal_6', link: '', price: 1000},
	{title: 'пример', img_src: 'hot_deal_7', link: '', price: 1000},
	{title: 'пример', img_src: 'hot_deal_8', link: '', price: 1000}
]
</script>

<template>
	<section class="bestseller text-center">
		<h3 class="relative bestseller__title pb-[10px] mb-5 text-2xl md:text-4xl text-bold uppercase w-fit m-auto">
			Хиты продаж
		</h3>
		<p class="text-dark-gray mb-[38px]">Бестселлеры недели</p>
		<div class="flex gap-[15px] md:gap-[15px] lg:gap-[30px] flex-wrap px-[15px] justify-center">
			<GeneralProductItem v-for="item in data" :key="item.img_src" :img="item.img_src" :title="item.title" :link="item.link" :price="item.price" 
			class="w-[48%]  md:w-[30%] lg:w-[23%]"
			 />
		</div>
	</section>
</template>

<style>
.bestseller__title::before {
    content: "";
    width: 50%;
    height: 2px;
    background: #f16e36;
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translate(-50%);
    bottom: -10px;
}
</style>