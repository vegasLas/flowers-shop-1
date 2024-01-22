<script setup lang="tsx">
	const data = [
		{title: 'Пример', img_src: 'banner1'},
		{title: 'Пример', img_src: 'banner2'},
		{title: 'Пример', img_src: 'banner3'}
	]
	const Banner = (props: {img_src: string; title: string}) => (
		<div class='sm:w-1/3 overflow-hidden group relative'>
			<img 
				class="object-cover
				w-full
				group-hover:scale-105
				duration-[2000ms]
				ease-[ease, cubic-bezier(0, 0, 0.44, 1.18)]
				delay-0
				transition-opacity
				transition-transform" 
				src={`./${props.img_src}.jpeg`} 
				/>
			<div class="
				text-left
				bg-[#ffffff80]
				text-black
				z-[1]
				[transform:rotate(180deg)]
				p-5
				h-full
				text-2xl
				absolute
				left-0
				bottom-0
				text-bold
				uppercase
				[writing-mode:tb-rl]">
				<span class="cursor-pointer hover:text-[#f16e36]">
					{props.title}
				</span>
			</div>
		</div>
	)
</script>
<template>
	<section class="text-center">
		<p class="mb-4">
			ИННОВАЦИИ & КОМФОРТ.
		</p>
		<h3 class="mb-12 text-bold uppercase text-2xl md:text-4xl">
			Наши Возможности
		</h3>
		<div class="sm:flex">
			<Banner v-for="item in data" :key="item.img_src" :img_src="item.img_src" :title="item.title" />
		</div>
	</section>
</template>

<style scoped>

</style>