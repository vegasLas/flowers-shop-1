<script setup lang="tsx">
import { Icon } from '#components';
import { Good } from '~/types/Good';
defineProps<{
	good: Good
}>()
const quickViewCard = useQuickViewCard()
</script>

<template>
	<NuxtLink class="inline-block group text-center" :to="good.link">
		<div class="relative mb-2">
			<img :src="`./${good.img_src[0]}.jpeg`" class="object-cover h-full w-full" />
			<ul class="
					hidden
					md:flex
					gap-2
					md:gap-3
					justify-center
					opacity-0
					group-hover:opacity-100
					duration-300
					transition-all
					delay-0
					ease-linear
					absolute
					bottom-2
					md:bottom-3
					lg:bottom-5
					group-hover:bottom-4
					md:group-hover:bottom-5
					lg:group-hover:bottom-8
					w-full
					left-1/2
					translate-x-[-50%]">
				<li class="tooltip" data-tip="Добавить в корзину">
					<button class="hover:text-white border-0 hover:bg-amber-500 btn rounded-full">
						<Icon name="mi:shopping-cart-add"/>
					</button>
				</li>
				<li class="tooltip" data-tip="Быстрый просмотр">	
					<button @click="quickViewCard.good = good" class="hover:text-white border-0 hover:bg-amber-500  btn rounded-full">
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
		<h4  class="general-transition m-auto cursor-pointer w-fit hover:text-[#f16e36] mb-2">
			{{ good.title }}
		</h4>
		<span class="text-amber-500">
			{{ good.price }}
		</span>
	</NuxtLink>
</template>

<style>

</style>