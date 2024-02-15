<script setup lang="ts">
const prices = ['1000-3000', '3000-6000', '6000-9000', '9000-12000']
const sizes = ['S', 'M', 'L', 'XL', 'XXL']
const tags = ['желтый', 'розовый']
const selectedFilters = ref({
	prices: new Set<string>(),
	tags: new Set<string>(),
	sizes: new Set<string>()
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
					<div :class="['form-control hover:text-[#f16e36]', selectedFilters.prices.has(price) ? 'text-[#f16e36]' : '']">
						<label class="cursor-pointer label justify-start">
							<input type="checkbox" 
							@click="selectedFilters.prices.has(price) ? selectedFilters.prices.delete(price) : selectedFilters.prices.add(price)"
							:checked="selectedFilters.prices.has(price)" 
							class="cursor-pointer checked:accent-[#d1744c] mr-[9px]" />
							<span class="label-text whitespace-nowrap">{{price}}</span>
						</label>
					</div>
				</li>
			</ul>

		</section>
		<section class="filters__sizes">
			<h4>
				Размеры
			</h4>
			<ul class="flex">
				<li v-for="size in sizes">
					<button 
						@click="selectedFilters.sizes.has(size) ? selectedFilters.sizes.delete(size) : selectedFilters.sizes.add(size)"
						:class="[`
						smooth-aim
						mr-[10px]
						mb-[10px]
						font-semibold
						w-10
						leading-[37px]
						`, selectedFilters.sizes.has(size) ? 'active' : '']">
					{{ size }}
					</button>
				</li>
			</ul>
		</section>
		<section class="filters__sizes">
			<h4>
				Тэги
			</h4>
			<ul class="flex">
				<li v-for="tag in tags">
					<button
					@click="selectedFilters.tags.has(tag) ? selectedFilters.tags.delete(tag) : selectedFilters.tags.add(tag)"
					:class="[`
						smooth-aim
						mr-[10px]
						mb-[10px]
						font-medium
						px-[22px]`, selectedFilters.tags.has(tag) ? 'active' : '']">
						{{ tag }}
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
		padding: 6px 0px 6px 14px;
		border-left: 3px solid #111111;
		position: relative;
		margin-bottom: 30px
	}
	[data-theme="dark"] h4 {
		border-color: #e6e6e6;
	}
	h4::after {
		left: 25%;
		content: "";
		border-bottom: 1px solid #e6e6e6;
		width: -webkit-fill-available;
		position: absolute;
		top: 50%;
	}
</style>