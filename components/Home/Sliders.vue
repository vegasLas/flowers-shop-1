<script setup lang="tsx">
import { Icon } from '#components';
import type { VNodeRef } from 'vue';

const activeSlide = ref<'first' | 'last'>('first')
const slideBodyRef = ref<VNodeRef | null>(null)
let bounceTimeoutId: NodeJS.Timeout
function switchSlide (val: 'first' | 'last') {
	slideBodyRef.value.classList.add('animate-bounce')
	clearTimeout(bounceTimeoutId)
	activeSlide.value = val
	bounceTimeoutId = setTimeout(() => slideBodyRef.value.classList.remove('animate-bounce'), 1500)
} 

const MiddleButtons = () => 
		<>
			<button onClick={() => switchSlide(activeSlide.value === 'first' ? 'last' : 'first')} class="hover:text-yellow-200 top-1/2 absolute z-[1]">
				<Icon class="lg:w-11 sm:w-8 lg:h-11 sm:h-8 h-6 w-6" name="quill:inline-left" />
			</button>
			<button onClick={() => switchSlide(activeSlide.value === 'last' ? 'first' : 'last')} class="hover:text-yellow-200 top-1/2 right-0 absolute z-[1]">
				<Icon class="lg:w-11 sm:w-8 lg:h-11 sm:h-8 h-6 w-6" name="quill:inline-right" />
			</button>
		</>

const BottomButtons = () => 
		<div class="w-full text-center  absolute bottom-1 z-[1]">
			<button onClick={() => switchSlide('first')}  class={['border-[0.1px] border-slate-500 mr-1 rounded-full w-3 h-3', activeSlide.value === 'first' ? 'bg-slate-500' : 'bg-opacity-100']}>
			</button>
			<button onClick={() => switchSlide('last')} class={['border-[0.1px] border-slate-500 rounded-full w-3 h-3', activeSlide.value === 'last' ? 'bg-slate-500' : 'bg-opacity-100']}>
			</button>
		</div>

onMounted(() => {
	switchSlide('first')
})
</script>
<template>
	<div class="relative h-1/2 overflow-hidden" :class="[activeSlide === 'first' ? 'text-white ' : 'text-black']">
		<div ref="slideBodyRef" class="z-[1] lg:left-40 md:left-30 sm:left-20 left-5 left absolute top-1/3">
			<h2 class="md:text-7xl sm:text-5xl text-3xl mb-5 ">
				{{activeSlide === 'first' ? 'День Матери' : 'Для Свадьбы'}}
			</h2>
			<button class="text-bold text-xs z-[1] uppercase lg:w-40 sm:w-30  absolute btn bg-white text-black hover:bg-[#f16e36] hover:text-white  border-0">
				ПРОСМОТР
			</button>
		</div>
		<MiddleButtons />
		<BottomButtons />
		<img class="h-[50vh] sm:h-full object-cover  w-full" 
				:class="[activeSlide === 'first' ? 'slide-active' : 'hidden']" :src="`/s1.jpeg`"  />
		<img class="h-[50vh] sm:h-full object-cover w-full" 
				:class="[activeSlide === 'last' ? 'slide-active' : 'hidden']" :src="`/s2.jpeg`"  />
	</div>
</template>

<style scoped>
	.slide-active {
		--tw-scale-x: 1.1;
		--tw-scale-y: 1.1;
		transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
		-webkit-animation: decrease 5s ease;
		animation: decrease 5s ease;
		animation-delay: 300ms;
		-webkit-animation-fill-mode: forwards; /* Chrome 16+, Safari 4+ */
		-moz-animation-fill-mode: forwards;    /* FF 5+ */
		-o-animation-fill-mode: forwards;      /* Not implemented yet */
		-ms-animation-fill-mode: forwards;     /* IE 10+ */
		animation-fill-mode: forwards;         /* When the spec is finished */
	}

@keyframes decrease {
  from {
		
	}

  to {
		transform: none
	}
}
</style>
