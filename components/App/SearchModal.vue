<script setup lang="ts">
const globalSearch = useGlobalSearch()
</script>
<template>
	<div class="">
		<div @click="globalSearch.isActive = false" :class="[
				'w-full h-[100vh] invisible transition-all opacity-0 duration-500 ease-linear top-0 left-0 fixed z-[11] bg-[#000000b3]',
				globalSearch.isActive ? '!visible opacity-100' : ''
			]">
		</div>
		<div :class="['pb-[50px] bg-[var(--fallback-b1,oklch(var(--b1)/1))] w-full h-0 opacity-0 invisible duration-500 ease-linear overflow-hidden fixed  top-0 left-0 right-0 z-[-2]]',
					globalSearch.isActive ? 'h-auto opacity-100 !visible transition-all duration-500 z-[12] pb-[50]' : ''
				]">
			<h3 :class="['leading-[1.2] transition-all translate-y-[-30px] duration-500 ease-[ease] opacity-0 mb-[20px] sm:mb-8 md:mb-10 text-3xl sm:text-[40px] text-center px-[15px] py-[15px] sm:py-[30px] text-bold',
					globalSearch.isActive ? '!translate-y-0 opacity-100' : ''
						]">
				Начните поиск
			</h3>
			<div class="w-[95%] sm:w-[90%] m-auto lg:w-1/2 transition-[width] ease-linear delay-300 duration-500">
				<label :class="[
						'relative text-gray-400 translate-y-[-100%] opacity-0 m-auto  focus-within:text-gray-600 block  invisible',
						globalSearch.isActive ?  '!translate-y-0 opacity-100 !visible' : ''
					]">
					<input
						:value="globalSearch.searchQuery"
						type="text"
						name="header-search"
						id="header-search"
						@input="(event) => globalSearch.searchQuery = event.target.value.trim()"
						placeholder="поиск..."
						class="h-[44px] border-b-2 form-input  py-3 px-4 appearance-none w-full block text-[var(--fallback-bc,oklch(var(--bc)/1))] focus:outline-none" />
					<Icon class="pointer-events-none w-5 h-5 sm:w-8 sm:h-8 absolute top-1/2 transform -translate-y-1/2 right-3" name="formkit:search" />
				</label>
				<div class="h-[320px] sm:h-[260px] overflow-auto m-auto  mt-5 flex flex-wrap">
					<span v-if="globalSearch.searchQuery.length < 2">Введите минимум два символа.</span>
					<!-- <span v-show=""><Icon name="svg-spinners:bars-fade" />Загрузка</span> -->
					<span v-else-if="globalSearch.goods.length === 0">Ничего не найдено.</span>
					
					<div v-for="good in globalSearch.goods" class="py-[5px] sm:py-[15px] flex flex-[0_0_100%] sm:flex-[0_0_50%]">
						<NuxtLink class="mr-[15px]" to="/products/scarlet-flower">
							<img style="width: 100px" :src="`./${good.img_src}.jpeg`" class="img-responsive">
						</NuxtLink>
						<div>
							<h4 class="title-product">
								<NuxtLink
									class="hover:text-[#f16e36]" 
									v-html="getHighlightHTML(good.title, globalSearch.searchQuery)"
									href="/products/scarlet-flower">
								</NuxtLink>
							</h4>
							<p class="text-[#f16e36] price-product mb-0">
								<span class="price font-semibold">20 VND</span>
							</p>
						</div>
					</div>
				</div>
			</div>
			<Icon
				@click="globalSearch.isActive = false"
				size="35"
				class="hover:text-[#f16e36] cursor-pointer fixed top-[10px] right-[10px] z-[10]"
				name="ion:close-sharp" />
		</div>
	</div>
</template>

<style scoped>

</style>