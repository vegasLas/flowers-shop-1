export const useGlobalSearch = defineStore('global-search', () => {
	const isActive = ref(false)
	watch(isActive, () => {
		if (isActive.value) 
			document.body.classList.add('global-search-is-active')
		else 
			document.body.classList.remove('global-search-is-active')
	})
	const goods = useGoods()
	
	return {
		goods: computed(() => {
			if (goods.searchQuery.length < 2 ) return []
			return goods.filtered.flatMap(section => section.subsections)
		}),
		searchQuery: storeToRefs(goods).searchQuery,
		isActive: computed({
			get(){
				return isActive.value
			},
			set(value: boolean){
				isActive.value = value
			}
		})
	}
})