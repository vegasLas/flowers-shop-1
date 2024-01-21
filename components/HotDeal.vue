<script setup lang="tsx">
const products = [
    {	img_src: 'hot_deal_1', title: 'Впечатление', price: '1000'},
	{	img_src: 'hot_deal_2', title: 'Маленькая звезда', price: '1000'},
	{	img_src: 'hot_deal_3', title: 'Гортензия', price: '1000'},
	{	img_src: 'hot_deal_4', title: 'Первая любовь', price: '1000'},
]

const TabletView = () => 

<div id="default-carousel" class="relative w-full" data-carousel="slide">
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        { products.map((product) => <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={`./${product.img_src}.jpeg`} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>)}
    </div>
    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        { products.map((product, index) => <button type="button" class="w-3 h-3 rounded-full" aria-current={index === 0} aria-label="Slide 2" data-carousel-slide-to={index + 1}></button>)}
    </div>
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <button class="btn w-9 h-9 bg-white">{'<'}</button>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>

</script>

<template>
	<div class="promotion text-center ">
		<h4 class="promotion__title  uppercase text-2xl relative w-fit m-auto mb-9">Горячее предложение</h4>
		<p class="mb-10">Не пропустите сегодняшние акционные предложения </p>
        <div class="flex gap-2 px-4">
            <ProductItem v-for="product in products" 
                :key="product.title" 
                :img="product.img_src"
                :price="product.price"
                :title="product.title"
                 />
        </div>
    </div>
</template>

<style scoped>
.promotion__title::before {
    content: "";
    width: 50%;
    height: 2px;
    background: #f16e36;
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translate(-50%);
    bottom: -10px;
}

</style>