<script setup lang="tsx">
import { ref, onMounted } from 'vue';
import { Icon } from '#components';
import type { VNodeRef } from 'vue';

// Array of slide data
const slides = ref([
  { text: 'День Матери', imgSrc: '/s1.jpeg' },
  { text: 'Для Свадьбы', imgSrc: '/s2.jpeg' },
  // Add more slides here
]);

const activeSlideIndex = ref(0);
const slideBodyRef = ref<VNodeRef | null>(null);
let bounceTimeoutId: NodeJS.Timeout;

function switchSlide(index: number) {
  activeSlideIndex.value = index;
  if (slideBodyRef.value) {
    slideBodyRef.value.classList.add('animate-bounce');
    clearTimeout(bounceTimeoutId);
    bounceTimeoutId = setTimeout(() => slideBodyRef.value.classList.remove('animate-bounce'), 1500);
  }
}

const MiddleButtons = () =>
  <>
    <button onClick={() => switchSlide((activeSlideIndex.value - 1 + slides.value.length) % slides.value.length)} class="hover:text-yellow-200 top-1/2 absolute z-[1]">
      <Icon class="lg:w-11 sm:w-8 lg:h-11 sm:h-8 h-6 w-6" name="quill:inline-left" />
    </button>
    <button onClick={() => switchSlide((activeSlideIndex.value + 1) % slides.value.length)} class="hover:text-yellow-200 top-1/2 right-0 absolute z-[1]">
      <Icon class="lg:w-11 sm:w-8 lg:h-11 sm:h-8 h-6 w-6" name="quill:inline-right" />
    </button>
  </>

const BottomButtons = () =>
  <div class="w-full text-center absolute bottom-1 z-[1]">
    {slides.value.map((_, index) => (
      <button key={index} onClick={() => switchSlide(index)} class={['border-[0.1px] border-slate-500 mr-1 rounded-full w-3 h-3', activeSlideIndex.value === index ? 'bg-slate-500' : 'bg-opacity-100']}>
      </button>
    ))}
  </div>

onMounted(() => {
  // switchSlide(0);
});
</script>

<template>
  <div class="relative h-1/2 overflow-hidden">
    <div ref="slideBodyRef" class="z-[1] lg:left-40 md:left-30 sm:left-20 left-5 left absolute top-1/3">
      <h2 class="md:text-7xl sm:text-5xl text-3xl mb-5 text-black dark:text-white">
        {{slides[activeSlideIndex].text}}
      </h2>
      <button class="text-bold text-xs z-[1] uppercase lg:w-40 sm:w-30 absolute btn bg-white text-black hover:bg-[#f16e36] hover:text-white border-0 dark:text-white dark:hover:bg-[#f16e36] dark:hover:text-black">
        ПРОСМОТР
      </button>
    </div>
    <MiddleButtons />
    <BottomButtons />
    <img v-for="(slide, index) in slides" :key="index" class="h-[50vh] sm:h-full object-cover w-full" :class="[activeSlideIndex === index ? 'slide-active' : 'hidden']" :src="slide.imgSrc" />
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
    transform: none;
  }
}
</style>