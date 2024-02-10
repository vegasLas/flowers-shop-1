<script setup lang="ts">
const prices = ['1000-3000', '3000-6000', '6000-9000', '9000-12000']
const sizes = ['S', 'M', 'L', 'XL', 'XXL']
const tags = ['желтый', 'розовый']
const selectedFilters = ref({
	prices: [] as string[],
	sizes: [] as string[]
})
</script>

<template>
	<div class="filters">
		<section class="filters__prices">
			<h4>
				Цены
			</h4>
			<ul class="">
				<li v-for="price in prices">
					<div :class="['form-control hover:text-[#f16e36]', selectedFilters.prices.includes(price) ? 'text-[#f16e36]' : '']">
						<label class="cursor-pointer label">
							<input type="checkbox" checked="checked" class="checkbox checkbox-accent" />
							<span class="label-text">{{price}}</span>
						</label>
					</div>
				</li>
			</ul>

		</section>
		<section class="filters__sizes">
			<h4>
				Цены
			</h4>
			<ul class="">
				<li v-for="size in sizes">
					<button :class="[`
						hover:bg-[#f16e36]
						hover:border-[#f16e36]
						hover:text-white
						mr-[10px]
						mb-[10px]
						transition-all
						duration-300
						ease-[ease]
						font-semibold
						leading-[37px]
						border-[1px]
						border-solid
						border-black`, selectedFilters.sizes.includes(size) ? 'border-[#f16e36] text-white bg-[#f16e36]' : '']">

					</button>
				</li>
			</ul>
		</section>
		<section class="filters__sizes">
			<h4>
				Тэги
			</h4>
			<ul class="">
				<li v-for="size in tags">
					<button :class="[`
						hover:bg-[#f16e36]
						hover:border-[#f16e36]
						hover:text-white
						mr-[10px]
						mb-[10px]
						transition-all
						duration-300
						ease-[ease]
						font-medium
						px-[22px]
						border-[#b0b0b0]
						border-[1px]
						border-solid`, selectedFilters.sizes.includes(size) ? 'border-[#f16e36] text-white bg-[#f16e36]' : '']">

					</button>
				</li>
			</ul>
		</section>
	</div>
</template>

<style scoped>
	.filters section {
		margin-bottom: 25px;
	}
	h4 {
		padding: 6px 0 6px 14px;
		border-left: 3px solid #111111;
		position: relative;
		margin-bottom: 30px
	}
	h4::after {
		content: "";
		border-bottom: 1px solid #e6e6e6;
		width: 100%;
		position: absolute;
		top: 50%;
	}
</style>