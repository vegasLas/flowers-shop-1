<script setup lang="ts">
 interface Props {
	isBurgerActive: boolean,
	sections: {section: string, link: string, subsections: {title: string, link: string}[]}[]
 }
 const activeSection = ref<string>()
 const searchQuery = defineModel({type: String})
 defineProps<Props>()

</script>

<template>
	 <div :class="[`transition-all
					duration-300
					ease-linear
					bg-[var(--fallback-b1,oklch(var(--b1)/1))]
					shadow
					absolute
					h-0
					overflow-auto
					flex
					flex-col
					w-full
					top-16e
					invisible
					opacity-0`,
					isBurgerActive && '!top-[64px] h-[94vh] !visible !z-50 opacity-100']">
			<label class="relative text-gray-400 focus-within:text-gray-600 block">
				<Icon class="pointer-events-none w-5 h-5 sm:w-8 sm:h-8 absolute top-1/2 transform -translate-y-1/2 left-3" name="formkit:search" />
				<input
					type="text"
					name="header-search"
					id="header-search"
					@input="(event) => searchQuery = event.target.value.trim()"
					placeholder="поиск"
					class="form-input border-none border-gray-900 py-3 px-4 appearance-none w-full block pl-14 text-[var(--fallback-bc,oklch(var(--bc)/1))] focus:outline-none" />
			</label>
			<div tabindex="0" class="">
				<div v-for="{section, subsections} in sections"  style="">
					<div tabindex="0" class="collapse collapse-arrow !border-b-transparent border border-base-300 !rounded-none">
						<input type="checkbox" /> 
						<div class="collapse-title font-medium ">
							{{section}}
						</div>
						<div class="collapse-content duration-300 overflow-auto"> 
							<div v-for="{link, title} in subsections" class="btn btn-sm !border-none btn-outline bg-transparent  !rounded-none w-full">
								<NuxtLink :to="link">{{title}}</NuxtLink>
							</div>	
						</div>
					</div>
					<!-- <button 
						@click="() => activeSection = (activeSection === section ? '' : section)" 
						class="btn !rounded-none w-full">
						{{section}} 
						<Icon :name="(activeSection === section ? 'formkit:left' : 'formkit:down')" />
					</button>
					<div :class="[
							'flex flex-col items-center invisible h-0 overflow-auto', 
							activeSection === section && '!visible h-[300px]'
						]">
							<div v-for="{link, title} in subsections" class="btn btn-sm bg-transparent !rounded-none w-full">
								<NuxtLink :to="link">{{title}}</NuxtLink>
							</div>	
					</div> -->
				</div>	
			</div>
	</div>
</template>