<script setup lang="tsx">
import { Icon } from '#components';
import type { VNodeRef } from 'vue';

const active = ref<'first' | 'last'>('first')
const slide1ImgRef = ref<VNodeRef | null>(null)
const slide2ImgRef = ref<VNodeRef | null>(null)
const slideBodyRef = ref<VNodeRef | null>(null)
let bounceTimeoutId: NodeJS.Timeout
function switchSlide (val: 'first' | 'last') {
	slideBodyRef.value.classList.add('animate-bounce')
	clearTimeout(bounceTimeoutId)
	active.value = val
	setTimeout(() => {
			if (val === 'first') {
				slide1ImgRef.value.classList.add('transform-none')
				slide2ImgRef.value.classList.remove('transform-none')
			}
			else {
				slide2ImgRef.value.classList.add('transform-none')
				slide1ImgRef.value.classList.remove('transform-none')
			}
	}, 0)
	bounceTimeoutId = setTimeout(() => slideBodyRef.value.classList.remove('animate-bounce'), 1500)
} 
onMounted(() => {
	switchSlide('first')
})
const MiddleButtons = () => <>
			<button onClick={() => switchSlide(active.value === 'first' ? 'last' : 'first')} class="hover:text-yellow-200 top-1/2 absolute z-[1]">
				<Icon class="lg:w-11 w-8 lg:h-11 h-8" name="quill:inline-left" />
			</button>
			<button onClick={() => switchSlide(active.value === 'last' ? 'first' : 'last')} class="hover:text-yellow-200 top-1/2 right-0 absolute z-[1]">
				<Icon class="lg:w-11 w-8 lg:h-11 h-8" name="quill:inline-right" />
			</button>
		</>

const BottomButtons = () => <div class="w-full text-center  absolute bottom-1 z-[1]">
			<button onClick={() => switchSlide('first')}  class={['border-[0.1px] border-slate-500 mr-1 rounded-full w-3 h-3', active.value === 'first' ? 'bg-slate-500' : 'bg-opacity-100']}>
			</button>
			<button onClick={() => switchSlide('last')} class={['border-[0.1px] border-slate-500 rounded-full w-3 h-3', active.value === 'last' ? 'bg-slate-500' : 'bg-opacity-100']}>
			</button>
		</div>
</script>
<template>
	<div class="relative h-1/2 overflow-hidden" :class="[active === 'first' ? 'text-white ' : 'text-black']">
		<div ref="slideBodyRef" class="z-[1] lg:left-40 md:left-30 sm:left-20 left-5 left absolute top-1/3">
			<h2 class="md:text-7xl sm:text-5xl text-3xl mb-5 ">
				{{active === 'first' ? 'День Матери' : 'Для Свадьбы'}}
			</h2>
			<button class="text-bold text-xs z-[1] uppercase lg:w-40 sm:w-30  absolute btn bg-white text-black hover:bg-orange-200  border-0">
				ПРОСМОТР
			</button>
		</div>
		<MiddleButtons />
		<BottomButtons />
		<img ref="slide1ImgRef" class="h-[50vh] sm:h-full transition scale-110  object-cover w-full" 
				:class="[active === 'first' ? 'ease-linear duration-[5000ms] delay-500' : 'hidden']" :src="`/s1.jpeg`"  />
		<img ref="slide2ImgRef" class="h-[50vh] sm:h-full transition scale-110 object-cover w-full" 
				:class="[active === 'last' ? 'ease-linear duration-[5000ms] delay-500' : 'hidden']" :src="`/s2.jpeg`"  />
	</div>
</template>

<style scoped>

</style>