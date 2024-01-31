<script lang="tsx" setup>
import { NuxtLink, Icon } from '#components';

const sections = [
	{section: 'Букеты', link: 'bouquet', subsections: [
							{title: "С гвоздиками", link: ''},
							{title: "С герберами", link: ''},
							{title: "С лилиями", link: ''},
							{title: "С орхидеями", link: ''},
							{title: "С розами", link: ''},
							{title: "С ромашками", link: ''},
							{title: "С тюльпанами", link: ''},
							{title: "С экзотическими цветами", link: ''}
						]},
	{section: 'Цветы', link: 'flowers', subsections: [
							{title: "Гвоздики", link: ''},
							{title: "Герберы", link: ''},
							{title: "Лизиантусы", link: ''},
							{title: "Лилии", link: ''},
							{title: "Орхидеи", link: ''},
							{title: "Подсолнухи", link: ''},
							{title: "Розы", link: ''},
							{title: "Ромашки", link: ''},
							{title: "Тюльпаны", link: ''},
							{title: "Хризантемы", link: ''},
							{title: "Экзотические цветы", link: ''}
						]},
	{section: 'Композиции', link: 'сomposition', subsections: [
							{title: "Корзины с цветами", link: ''},
							{title: "Цветы в коробках", link: ''},
							{title: "Шляпные коробки", link: ''},
							{title: "Корзины с цветами", link: ''},
							{title: "Цветы в коробках", link: ''},
							{title: "Шляпные коробки", link: ''},
							{title: "Корзины с цветами", link: ''},
							{title: "Цветы в коробках", link: ''},
							{title: "Шляпные коробки", link: ''},
							{title: "Корзины с цветами", link: ''},
						]}
]
const sectionsFiltered = computed(() => sections.reduce((prev, item) => {
	let tempSubsections = item.subsections.filter(({title}) => title.includes(searchQuery.value))
	if (tempSubsections.length) prev.push({...item, subsections: tempSubsections})
	return prev
}, [] as typeof sections))
const isBurgerActive = ref(false)
const searchQuery = ref('')
watch(isBurgerActive, () => {
	if (isBurgerActive.value) 
		document.body.classList.add('overflow-hidden')
	else 
		document.body.classList.remove('overflow-hidden')
})
const isFixed = ref(false);

const handleScroll = () => {
  isFixed.value = window.scrollY > 50;
};

onMounted(() => {
	handleScroll()
  	window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  	window.removeEventListener('scroll', handleScroll);
});
</script>
<template>
	<header :class="[isFixed ? 'fixed top-0 w-full z-10' : '', 'duration-300 top-0 bg-[var(--fallback-b1,oklch(var(--b1)/1))]']">
		<div class="lg:container lg:m-auto z-[4]">
			<nav class="nav navbar">
				<div class="navbar-start">
					<div tabindex="0" @click="isBurgerActive = !isBurgerActive" role="button" class="cursor-pointer p-1 md:hidden">
						<Icon size="25px" :name="isBurgerActive === false ? 'gridicons:align-left' : 'mi:close'" />
					</div>
					<NuxtLink to="/" class="hidden md:block text-xl">LasFlores</NuxtLink>
				</div>
				<div class="navbar-center">
					<NuxtLink to="/" class="block md:hidden text-xl">LasFlores</NuxtLink>
					<AppHeaderNavBodyLg :sections="sections" class="hidden md:flex" />
				</div>	
				<div class="navbar-end">
					<Theme />
				</div>
			</nav>
		</div>
		<AppHeaderNavBodySm v-model="searchQuery" :sections="sectionsFiltered" :isBurgerActive="isBurgerActive" class="md:hidden" />
	</header>
</template>


<style>
.nav_link::after {
	border-bottom: 1px solid;
	color: #f16e36;
    bottom: 0;
    content: "";
    position: absolute;
    right: 0;
    transition: width .4s linear 0s;
    width: 0;
}
.nav_link:hover::after {
	left: 0;
	width: 100%;
}
.nav__section::after {
	border-bottom: 1px solid #fe7250;
    bottom: 0;
    content: "";
    position: absolute;
    left: 0;
    transition: width .4s linear 0s;
    width: 50%;
}
</style>