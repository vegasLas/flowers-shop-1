<script setup lang="ts">
const products = useProducts()
const isFilterActive = ref(false)
</script>

<template>
	<section class="products">
		<div  class="text-center pt-[30px] text-white bg-center bg-cover bg-[url('./products.jpeg')]">
			<h2 class="text-center font-medium leading-[1.2] text-2xl sm:text-[40px]">
				Продукты
			</h2>
			<div class="pt-[6px] pb-[30px]">
				<NuxtLink class="font-medium text-[16px] mb-2" to="/">
					Домой
				</NuxtLink>
				<Icon name="iconamoon:arrow-right-2" />
				<strong class="font-medium text-[16px]">
					Продукты
				</strong>
			</div>
		</div>
		<div class="sm:container px-[10px] pt-[50px] m-a m-auto">
			<div class="flex flex-wrap justify-between mb-[30px]">
				<button @click="isFilterActive = !isFilterActive" class="smooth-aim border-[2px] border-solid py-[7px] items-center inline-flex font-medium px-5">
					<Icon name="iconoir:filter" />
					<p>
						Фильтры
					</p>
				</button>
				<div class="flex">
					<!-- <div class="products__column-change column-change group mr-5">
						<div class="relative">
							<div class="
								transition-[width]
								duration-300
								ease-in-out
								overflow-hidden
								absolute
								invisible
								right-[100%]
								flex
								w-0
								justify-end
								group-hover:w-[190px]
								group-hover:visible
							">
								<button
								 	v-for="column in products.columns"
									@click="products.activeColumn = column"
									:class="[`w-9
										h-9
										rounded-full
										border-[1px]
										hover:bg-[#f16e36] hover:border-transparent hover:text-white
										mr-[5px]
										leading-4
										transition-all
										ease-in-out
										duration-400`, products.activeColumn === column ? 'bg-[#f16e36] border-transparent text-white' : '']">
								 {{ column }}
								</button>
							</div>
							<span class="inline-flex p-[10px] rounded-full border-[2px]  border-solid">
								<Icon name="zondicons:view-tile" />
							</span>
						</div>
					</div> -->
					<div class="dropdown">
						<div  tabindex="0" role="button" 
						class="min-w-[150px] font-medium m-1 pb-[1px] text-slate-gray border-b-[1px] border-[var(--c-moonstone-gray)]">{{products.selectedSort}}</div>
						<ul tabindex="0" class="z-[1] menu p-2 shadow bg-base-100 w-52 dropdown-content">
							<li v-for="sort in products.sorts">
								<button @click="products.selectedSort = sort"
									:class="['hover:text-[#f16e36] !bg-[unset]', products.selectedSort === sort ? 'font-bold !text-[#f16e36]' : '']">
									{{ sort }}
								</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="flex">
				<ProductsFilter 
				:class="[`
					transition-[flex,max-width,padding]
					duration-300
					ease-[ease]
					flex-[0_0_0]
					max-w-0
					flex-col
					hidden lg:flex`,  
					isFilterActive ? 'flex-[0_0_25%] max-w-[25%] pr-[30px]' : 'invisible']" />
				<GeneralLeftModal :isFilterActive="isFilterActive" @close-modal="isFilterActive = false">
					<ProductsFilter class="flex flex-col" />
				</GeneralLeftModal>
				<div :class="['flex flex-wrap justify-evenly mb-6 general-transition max-w-[100%] flex-[0_0_100%]', isFilterActive ? 'lg:max-w-[75%] lg:flex-[0_0_75%]' : '']">
					<GeneralProductItem v-for="good in products.goods[products.selectedPage - 1]"  
						:class="['w-[48%] mb-[54px]  md:w-[30%] lg:w-[23%]', products.activeColumn ? `flex-${products.proportions[products.activeColumn]}` : ''] "
						:good="good"/>
				</div>
			</div>
			<div class="join text-center block">
				<button v-for="page in products.goods.length" @click="products.selectedPage = page" :class="[
					'w-[42px] h-[42px] join-item text-medium-gray mr-[9px] btn rounded-none bg-[unset] smooth-aim', 
					page === products.selectedPage ? 'active' : '']">
					{{ page }}
				</button>
			</div>
		</div>
	</section>
</template>
