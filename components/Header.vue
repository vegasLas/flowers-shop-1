<script lang="tsx" setup>
const LgUlComponent = () => <ul class="menu menu-horizontal px-1">	
				<li><a>Домой</a></li>
				<li>
					<div class="dropdown dropdown-bottom dropdown-hover menu">
						<div tabindex="0" role="button" class="">Продукция</div>
						<ul style="background-color: var(--fallback-b1,oklch(var(--b1)/1)); left: -200px" class="dropdown-content menu-horizontal z-[2] lg:min-w-max bg-base-200 rounded-box">
							<li>
								<a>Букеты</a>
								<ul>
									{
										[
											"С гвоздиками",
											"С герберами",
											"С лилиями",
											"С орхидеями",
											"С розами",
											"С ромашками",
											"С тюльпанами",
											"С экзотическими цветами"
										].map(text => <li><a>{text}</a></li>)
									}
								</ul>
							</li>
							<li>
								<a>Цветы</a>
								<ul>

								{
									[
										"Гвоздики",
										"Герберы",
										"Лизиантусы",
										"Лилии",
										"Орхидеи",
										"Подсолнухи",
										"Розы",
										"Ромашки",
										"Тюльпаны",
										"Хризантемы",
										"Экзотические цветы"
									].map(text => <li><a>{text}</a></li>)
								
								}
								</ul>
							</li>
							<li>
								<a>Композиции</a>
								<ul>
									{
										[
											"Корзины с цветами",
											"Цветы в коробках",
											"Шляпные коробки",
											"Сердца из цветов"
										].map(text => <li><a>{text}</a></li>)
										
									}
								</ul>
							</li>
						</ul>
					</div>
				</li>
				<li><a>Рекомендация</a></li>
			</ul>
const SmUlComponent = () => <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52">
					<li><a>Домой</a></li>
					<li>
						<a>Продукция</a>
						<ul class="p-2">
							<li><a>Submenu 1</a></li>
							<li><a>Submenu 2</a></li>
						</ul>
					</li>
					<li><a>Рекомендация</a></li>
				</ul>
const isFixed = ref(false);

// Function to handle scroll event
const handleScroll = () => {
  isFixed.value = window.scrollY > 50;
};

// Add scroll event listener on component mount
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

// Remove scroll event listener on component unmount
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
<template>
	<div class="navbar bg-base-100" :class="[isFixed ? 'fixed top-0 w-full z-10 fixedd' : '']">
		<div class="navbar-start">
			<div class="dropdown">
				<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
					<Icon size="25px" name="gridicons:align-left" />
				</div>
				<SmUlComponent />
			</div>
			<a class="btn btn-ghost text-xl">LasFlores</a>
		</div>
		<div class="navbar-center hidden lg:flex">
			<LgUlComponent />
		</div>
		<div class="navbar-end">
			<Theme />
			<a class="btn">Button</a>
		</div>
	</div>
</template>


<style >
.fixedd {
	-webkit-animation: mations 1s ease;
    animation: mations 1s ease;
    transition: background-color .5s ease 0s,padding .5s ease 0s;
}
</style>