<script setup lang="ts">
const products = useProducts()
</script>

<template>
	<section class="products">
		<div  class="text-center pt-[30px] text-white bg-center bg-cover bg-[url('./products.jpeg')]">
			<h2 class="text-center font-medium leading-[1.2] text-2xl sm:text-[40px]">
				Продукты
			</h2>``
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
		<div class="container pt-[50px] m-a m-auto">
			<div class="flex flex-wrap justify-between mb-[30px]">
				<div class="">
					<button class="border-[2px] border-solid py-[7px] items-center inline-flex font-medium px-5">
						<Icon name="iconoir:filter" />
						<p>
							Фильтры
						</p>
					</button>
				</div>
				<div class="flex">
					<div class="products__column-change column-change group mr-5">
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
									:class="[`w-9
										h-9
										rounded-full
										border-[1px]
										hover:bg-[#f16e36] hover:border-[unset] hover:text-white
										mr-[5px]
										leading-4
										transition-all
										ease-in-out
										duration-400`, products.activeColumn === column ? 'bg-[#f16e36] border-[unset] text-white' : '']">
								 {{ column }}
								</button>
							</div>
							<span class="inline-flex p-[10px] rounded-full border-[2px]  border-solid">
								<Icon name="zondicons:view-tile" />
							</span>
						</div>
					</div>
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
			<div class="flex flex-wrap justify-between mb-6">
				<GeneralProductItem v-for="good in products.goods[products.selectedPage - 1]"  
					class="w-[48%] mb-[54px]  md:w-[30%] lg:w-[23%]"
					:class="[products.activeColumn ? `flex-[0_0_${products.proportions[products.activeColumn]}]` : ''] "
					:img="good.img_src"
					:link="good.link"
					:title="good.title" 
					:price="good.price"/>
			</div>
			<div class="join text-center block">
				<button v-for="page in products.goods.length" @click="products.selectedPage = page" :class="[
					'w-[42px] h-[42px] join-item text-medium-gray mr-[9px] btn rounded-none bg-[unset] hover:bg-[#f16e36] hover:text-white border-[#e3e3e3]', 
					page === products.selectedPage ? '!bg-[#f16e36] !text-white border-none' : '']">
					{{ page }}
				</button>
			</div>
		</div>
	</section>
</template>