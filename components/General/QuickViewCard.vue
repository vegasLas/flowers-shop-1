<script lang="ts" setup >

const {
	selectedPreview,
	quantity,
	good,
} = storeToRefs(useQuickViewCard())
const cart = useCart()
const curCount = ref((good.value?.title && cart.hasGood(good.value.title)) ? cart.getGood(good.value.title).count : 1)
</script>

<template>
	<GeneralCentralModal v-if="good" @close-modal="good = null">
		<div @click.stop class="product-quickview min-w-[490px] max-w-[800px] bg-[var(--fallback-b1,oklch(var(--b1)/1))] flex p-5">
			<div class="px-[15px] max-w-50% flex-[0_0_50%]">
				<NuxtLink to="" class="inline-block">
					<img :src="`./${selectedPreview ? selectedPreview : good?.img_src[0]}.jpeg`" />
				</NuxtLink>
				<div class="carousel rounded-box space-x-2">
					<div v-for="img in good?.img_src" class="carousel-item">
						<img 
							@click="selectedPreview = img"
							class="cursor-pointer w-[160px] h-[160px]"
							:src="`./${img}.jpeg`"
						/>
  					</div>
				</div>
			</div>
			<div class="px-[15px] max-w-50% flex-[0_0_50%]">
				<h2 class="text-[22px] leading-8  font-medium mb-2">
					{{ good?.title }}
				</h2>
				<div class="product-quickview__price">
					{{ good?.price }}
				</div>
				<p class="mb-[25px]">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque assumenda quo dignissimos aliquam sit voluptate, perferendis cupiditate incidunt quis tempora, ab officiis aliquid soluta recusandae eveniet mollitia quae alias voluptates!
				</p>
					<div v-if="cart.hasGood(good.title)" class="rounded-sm flex text-white bg-[#74366f] h-[55px] px-2 w-[145.95px] items-center  justify-between">
						<button @click="curCount - 1 === 0 ? cart.deleteGood(good.title) : cart.changeCount(good, --curCount)">
							<Icon name="ep:minus" />
						</button>
						<div class="flex flex-col">
							<span class="px-[30px]">
								{{ curCount }}
							</span>
							<span class="text-sm font-extralight">
								в корзине
							</span>
						</div>
						<button @click="cart.changeCount(good, ++curCount)">
							<Icon name="ep:plus" />
						</button>
					</div>
					<button v-else  @click="cart.addGood(good)" class="text-white h-[55px] uppercase px-[30px] bg-[#f16e36] hover:bg-[black] font-semibold">
						в корзину
					</button>
				<!-- </div> -->
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