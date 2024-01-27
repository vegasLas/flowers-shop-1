<script lang="tsx" setup>
import { NuxtLink } from '#components';

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
							{title: "Сердца из цветов", link: ''}
						]}
]
const LgUlComponent = () => <ul class="flex items-center gap-5 justify-center">	
				<li><a class="relative nav_link cursor-pointer">Домой</a></li>
				<li>
					<div class="relative group">
						<div tabindex="0" role="button" class="relative nav_link cursor-pointer ">Продукция</div>
						<ul style="left: -200px" class="
							flex
							z-[2]
							gap-5
							p-8
							absolute
							!top-10
							group-hover:!top-[100%]
							opacity-0
							group-hover:opacity-100
							invisible
							group-hover:visible
							duration-300
							ease-linear
							transition-all
							lg:min-w-max
							rounded-box
							bg-[var(--fallback-b1,oklch(var(--b1)/1))]">
							{sections.map(({section, link, subsections}) => (
								<li class='pt-[15px]'>
									<NuxtLink class="pb-[10px] transition-all delay-0 duration-300 ease-linear cursor-pointer nav__section relative text-bold text-xl hover:text-[#fe7250]" to={`/${link}`}>{section}</NuxtLink>
									<ul class="mt-[14px] transition-color delay-0 duration-300 ease-linear">
										{subsections.map(({link, title}) => <li class="py-1">
											<NuxtLink class="transition-color delay-0 duration-300 ease-linear cursor-pointer hover:text-[#fe7250]" to={link}>{title}</NuxtLink>
										</li>)}
									</ul>	
								</li>	
							))}
						</ul>
					</div>
				</li>
				<li><a class="relative nav_link cursor-pointer">Рекомендация</a></li>
			</ul>
const SmUlComponent = () => <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow rounded-box w-52">
					{sections.map(({section, subsections}) => (
						<li>
							<NuxtLink >{section}</NuxtLink>
							<ul>
								{subsections.map(({link, title}) => <li class="">
									<NuxtLink to={link}>{title}</NuxtLink>
								</li>)}	
							</ul>	
						</li>	
					))}
				</ul>
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
	<header :class="[isFixed ? 'fixed top-0 w-full z-10' : '', 'bg-[var(--fallback-b1,oklch(var(--b1)/1))]']">
		<div class="lg:container lg:m-auto">
			<nav class="nav navbar">
				<div class="navbar-start">
					<div class="dropdown">
						<div tabindex="0" role="button" class="btn hover:bg-none lg:hidden">
							<Icon size="25px" name="gridicons:align-left" />
						</div>
						<SmUlComponent />
					</div>
					<a class="text-xl">LasFlores</a>
				</div>
				<div class="navbar-center hidden lg:flex">
					<LgUlComponent />
				</div>
				<div class="navbar-end">
					<Theme />
				</div>
			</nav>
		</div>
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