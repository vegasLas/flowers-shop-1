<script lang="tsx" setup>
import { NuxtLink, Icon } from '#components';
const goods = useGoods()
const globalSearch = useGlobalSearch()
const burger = useBurger()

const isFixed = ref(false);
const handleScroll = () => {
  isFixed.value = window.scrollY > 64;
};
watch(isFixed, () => {
	if (isFixed.value) {
		document.body.classList?.add("pt-16");
	}
	else 
		document.body.classList?.remove("pt-16");
})
onMounted(() => {
	handleScroll()
  	window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  	window.removeEventListener('scroll', handleScroll);
});
</script>
<template>
	<header :class="[isFixed ? 'fixed top-0 w-full z-10 scroll-fix' : '', 'duration-300 top-0 bg-[var(--fallback-b1,oklch(var(--b1)/1))]']">
		<div class="lg:container lg:m-auto z-[4]">
			<nav class="nav navbar">
				<div class="navbar-start">
					<div tabindex="0" @click="burger.isActive = !burger.isActive" role="button" class="cursor-pointer p-1 md:hidden">
						<Icon size="25px" :name="burger.isActive === false ? 'gridicons:align-left' : 'mi:close'" />
					</div>
					<NuxtLink to="/" class="hidden md:block text-xl">LasFlores</NuxtLink>
				</div>
				<div class="navbar-center">
					<NuxtLink to="/" class="block md:hidden text-xl">LasFlores</NuxtLink>
					<AppHeaderNavBodyLg :goods="goods.sections" class="hidden md:flex" />
				</div>	
				<div class="navbar-end">
					<button v-show="!burger.isActive" class="mr-4" @click="globalSearch.isActive = !globalSearch.isActive">
						<Icon class="w-7 h-7" name="formkit:search" />
					</button>
					<button v-show="!burger.isActive" class="mr-4" @click="globalSearch.isActive = !globalSearch.isActive">
						<Icon class="w-7 h-7" name="basil:clipboard-outline" />
					</button>
					<Theme />
				</div>
			</nav>
		</div>
		<AppHeaderNavBodySm v-model="goods.searchQuery" :goods="goods.filtered" :isBurgerActive="burger.isActive" class="md:hidden" />
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
.scroll-fix {
	-webkit-animation: mations 1s ease;
	animation: mations 1s ease
} 
@keyframes mations {
  from {
    transform: translateY(-100%)
  }

  to {
    transform: translateY(0)
  }
}
</style>