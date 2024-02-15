<script setup lang="ts">
 interface Props {
	goods: {section: string, link: string, subsections: {title: string, link: string}[]}[]
 }
 
 defineProps<Props>()
</script>

<template>
	<ul tabindex="0" class="flex items-center gap-5 justify-center">	
				<li><NuxtLink to="/" class="relative nav_link cursor-pointer">Домой</NuxtLink></li>
				<li>
					<div class="relative group">
						<NuxtLink to="/products" tabindex="0" role="button" class="relative nav_link cursor-pointer ">Продукция</NuxtLink>
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
							general-transition
							w-[max-content]
							rounded-box
							bg-[var(--fallback-b1,oklch(var(--b1)/1))]
							">
								<li v-for="{link, section, subsections} in goods" class='pt-[15px]'>
									<NuxtLink class="pb-[10px] general-transition cursor-pointer nav__section relative text-bold text-xl hover:text-[#fe7250]" :to="`/${link}`">{{section}}</NuxtLink>
									<ul class="mt-[14px] general-transition ease-linear">
										<li v-for="{link, title} in subsections" class="py-1">
											<NuxtLink class="general-transition ease-linear cursor-pointer hover:text-[#fe7250]" :to="link">{{title}}</NuxtLink>
										</li>
									</ul>	
								</li>	
						</ul>
					</div>
				</li>
				<li><a class="relative nav_link cursor-pointer">Рекомендация</a></li>
			</ul>
</template>