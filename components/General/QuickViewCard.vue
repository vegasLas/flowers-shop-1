<script lang="ts" setup >
const quickViewCard = useQuickViewCard()
</script>

<template>
	<GeneralCentralModal @close-modal="quickViewCard.good = null" v-if="quickViewCard.good">
		<div @click.stop class="product-quickview min-w-[490px] max-w-[800px] bg-[var(--fallback-b1,oklch(var(--b1)/1))] flex p-5">
			<div class="px-[15px] max-w-50% flex-[0_0_50%]">
				<NuxtLink to="" class="inline-block">
					<img :src="`./${quickViewCard.selectedPreview ? quickViewCard.selectedPreview : quickViewCard.good?.img_src[0]}.jpeg`" />
				</NuxtLink>
				<div class="carousel rounded-box space-x-2">
					<div v-for="img in quickViewCard.good?.img_src" class="carousel-item">
						<img 
							@click="quickViewCard.selectedPreview = img"
							class="cursor-pointer w-[160px] h-[160px]"
							:src="`./${img}.jpeg`"
						/>
  					</div>
				</div>
			</div>
			<div class="px-[15px] max-w-50% flex-[0_0_50%]">
				<h2 class="text-[22px] leading-8  font-medium mb-2">
					{{ quickViewCard.good?.title }}
				</h2>
				<div class="product-quickview__price">
					{{ quickViewCard.good?.price }}
				</div>
				<p class="mb-[25px]">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque assumenda quo dignissimos aliquam sit voluptate, perferendis cupiditate incidunt quis tempora, ab officiis aliquid soluta recusandae eveniet mollitia quae alias voluptates!
				</p>
				<div class="product-quickview__actions flex">
					<div class="product-quickview__quantity mr-[25px] flex border-[2px] boder-[#ddd]">
						<span class="text-center w-[45px] text-xl font-medium py-[10px] border-r-[1px] boder-[#ddd]">
							{{ quickViewCard.quantity }}
						</span>
						<div class="flex flex-col">
							<button @click="quickViewCard.quantity++" class="border-b-[1px] boder-[#ddd] w-[42px] general-transition hover:text-[#f16e36]">
								<Icon name="ep:caret-top"/>
							</button>
							<button @click="quickViewCard.decrementQuantity" class="w-[42px] general-transition hover:text-[#f16e36]">
								<Icon name="ep:caret-bottom"/>
							</button>
						</div>
					</div>
					<button class="text-white h-[55px] uppercase px-[30px] bg-[#f16e36] hover:bg-[black] font-semibold">
						в корзину
					</button>
				</div>
			</div>
		</div>
	</GeneralCentralModal>
</template>

<style>
.product-quickview__price {
	border-top: 1px solid #e7e7e7;
	padding-bottom: 15px;
	margin-bottom: 23px;
}
[data-theme=dark] .product-quickview__price {
	border-color: white;
}

</style>