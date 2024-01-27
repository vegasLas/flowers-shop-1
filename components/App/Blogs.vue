<script setup lang="tsx">
import Splide from '@splidejs/splide';
import { NuxtLink } from '#components';
const data = [
	{title: 'What we need to know', link: '', img_src: 'blog1', date: 'July 24, 2023', content: `I got my first premium designer bag when I was in middle school. It was something I wished for, pined for, dreamed for and worked...`},
	{title: 'The most useful things for you', link: '', img_src: 'blog2', date: 'July 24, 2023', content: `What Is Your Favorite Non-Premium Designer Bag? I got my first premium designer bag when I was in middle school. It was something I wished...`},
	{title: 'Interesting things you didn\'t know', link: '', img_src: 'blog3', date: 'July 24, 2023', content: `I got my first premium designer bag when I was in middle school. It was something I wished for, pined for, dreamed for and worked...`}
]
const Blog = (props: {link: string, img_src: string, title: string, date: string, content: string}) => (
	<div class="blog lg:w-1/3 md:px-4">
		<NuxtLink class="cursor-pointer mb-[25px]" to={props.link}>
			<img class="
				mb-[25px]
				object-cover
				m-auto
				w-[280px]
				md:w-[325px]
				lg:w-[360px]
				h-[280px]
				md:h-[325px]
				lg:h-[360px]
				rounded-full
				" src={`./${props.img_src}.jpeg`} />
		</NuxtLink>
		<h4 class="ease duration-300 transition-hover text-bold text-2xl mb-[11px] hover:text-[#f16e36] w-fit m-auto cursor-pointer">
			{props.title}
		</h4>
		<span class="block pb-[18px] mb-[18px] blog__date text-silver-gray">
			{props.date}
		</span>
		<p class="text-medium-gray text-base">
			{props.content}
		</p>
	</div>
)
const TabletView = () => <section id="blog_splide" class="px-2 sm:px-3 md:px-4 splide">
  <div class="splide__track">
		<ul class="splide__list gap-2 sm:gap-5 md:gap-6 lg:md:gap-8">
		{data.map(({content,date,img_src,link,title}) => 
		<li class="splide__slide">
			<Blog
				key={content}
				content={content}
				date={date}
				img_src={img_src}
				link={link}
				title={title}
			 />
			</li>)}
		</ul>
  </div>
</section>
let perPage: 1 | 2 = 2 
function mountSplide (perPageArg: 1 | 2) {
	perPage = perPageArg
	splide?.destroy()
	splide = new Splide( '#blog_splide', {
		// type: 'loop',
		speed: 1000,
		autoplay: true,
		perPage: perPageArg,
		pagination: false,
		focus: 0,
		omitEnd: true,
	});
    splide.mount();
}
function listenResizeWidth () {
	if (window.innerWidth < 600 && perPage !== 1) {
		mountSplide(1)
	} else if (window.innerWidth > 600 && perPage !== 2) {
		mountSplide(2)
	}
}
let splide: Splide

onMounted(() => {
	addEventListener("resize", listenResizeWidth);
    mountSplide(window.innerWidth < 600 ? 1 : 2)
})
onUnmounted(() => {
	removeEventListener("resize", listenResizeWidth);
    splide?.destroy()
})

</script>

<template>
	<section class="pb-[50px] md:pb-[75px] lg:pb-[100px] bg-blush-sand pt-[50px] blogs text-center flex flex-col  ">
		<h3  class="relative blogs__title uppercase pb-[10px] mb-[23px] text-2xl text-bold w-fit m-auto">
			Наш блог
		</h3>
		<p class="text-dark-gray textarea-md md:text-lg mb-[58px]">
			Коллекция историй о людях и местах, которые нас вдохновляют.
		</p>
		<TabletView class="lg:hidden" />
		<div class="hidden lg:flex">
			<Blog v-for="{content,date,img_src,link,title} in data"
				:key="content"
				:content="content"
				:date="date"
				:img_src="img_src"
				:link="link"
				:title="title"
			 />
		</div>
	</section>
</template>

<style>
.blog__date::after {
    content: "";
    background-color: #111;
    width: 70px;
    height: 1px;
    display: block;
    margin: 17px auto 0;}

.blogs__title::before {
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

[data-theme=dark] .blog__date::after{
	background-color: white;
}
</style>