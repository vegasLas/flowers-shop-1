<script setup lang="tsx">
const pictures = ['offer1', 'offer2', 'offer3'] 
const PictureComponent = (props: {picture: string}) => <div class="w-full overflow-hidden relative md:h-40 lg:h-52  md:w-96 lg:w-[472px]">
	<div class="text-white translate-x-[-50%] translate-y-[-50%] left-1/2 top-1/2 absolute z-[1] text-center">
		<h3 class="md:text-lg lg:text-2xl text-2xl text-bold top-3">
			Свежие цветы
		</h3>
		<button class="bg-opacity-0 border-b-2  hover:border-b-orange-300">
			купить
		</button>
	</div>
	<img src={`./${props.picture}.jpeg`} class="object-cover
		transition
		ease-linear
		duration-1000
		brightness-50
		delay-0
		hover:scale-110
		h-full
		w-full"/>
</div>
</script>


<template>
	<div class="flex justify-around md:flex-row flex-col gap-3 pt-6 md:px-0 px-4">
		<PictureComponent v-for="picture in pictures"  :picture="picture" :key="picture" />
	</div>
</template>

<style scoped>

</style>