<script setup lang="tsx">
// Default theme
import '@splidejs/splide/css';
import Splide from '@splidejs/splide';

import { ProductItem } from '#components';

const products = [
    {	img_src: 'hot_deal_1', title: 'Впечатление', price: '1000'},
	{	img_src: 'hot_deal_2', title: 'Маленькая звезда', price: '1000'},
	{	img_src: 'hot_deal_3', title: 'Гортензия', price: '1000'},
	{	img_src: 'hot_deal_4', title: 'Первая любовь', price: '1000'},
]

const TabletView = () => <section id="splide" class="px-2 sm:px-3 md:px-4 splide" aria-label="Splide Basic HTML Example">
  <div class="splide__track">
		<ul class="splide__list gap-2 sm:gap-5 md:gap-6 lg:md:gap-8">
			{products.map(product => (<li class="splide__slide">
                <ProductItem 
                    key={product.title} 
                    img={product.img_src}
                    price={product.price}
                    title={product.title}
                />
            </li>))}
		</ul>
  </div>
</section>
let splide: Splide
onMounted(() => {
    splide = new Splide( '#splide', {
        speed: 1000,
        autoplay: true,
        perPage: 2,
        pagination: false,
        focus  : 0,
        omitEnd: true,
    } );

    splide.mount();
})
onUnmounted(() => {
    splide?.destroy()
})

</script>

<template>
	<div class="promotion text-center">
		<h4 class="promotion__title  uppercase text-2xl relative w-fit m-auto mb-9">Горячее предложение</h4>
		<p class="mb-10">Не пропустите сегодняшние акционные предложения </p>
        <TabletView class="md:hidden" />
        <div class="hidden md:flex  md:gap-5 lg:gap-8 px-4">
            <ProductItem v-for="product in products" 
                :key="product.title" 
                :img="product.img_src"
                :price="product.price"
                :title="product.title"
                 />
        </div>
    </div>
</template>

<style>
.promotion .splide__arrow--next {
    right: -1px;
}
.promotion .splide__arrow--prev {
    left: -1px;

}
.promotion .splide__arrow--next,
.promotion .splide__arrow--prev {
    background-color: white;
    width: 35px;
    height: 35px;
    box-shadow: 1px 2px 6px 4px #35394414;
    border-radius: unset;
    fill: black;
}

.promotion .splide__arrow--next svg,
.promotion .splide__arrow--prev svg {
    width: 8px;
    height: 16px;
} 
.promotion .splide__arrow--next:hover,
.promotion .splide__arrow--prev:hover {
    background-color: #f16e36;
 }
.promotion .splide__arrow--next:hover > svg,
.promotion .splide__arrow--prev:hover > svg {
    fill: white;
}
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