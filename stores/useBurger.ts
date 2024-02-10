export const useBurger = defineStore('burger', () => {
	const isBurgerActive = ref(false)
	watch(isBurgerActive, () => {
		if (isBurgerActive.value) 
			document.body.classList.add('overflow-hidden')
		else 
			document.body.classList.remove('overflow-hidden')
	})
	return {
		isActive: computed({
			get(){
				return isBurgerActive.value
			},
			set(value: boolean){
				isBurgerActive.value = value
			}
		})
	}
})