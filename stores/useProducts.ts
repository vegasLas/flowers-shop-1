export const useProducts = defineStore('', () => {
	const activeColumn = ref<2 | 3 | 4 | 5>(4)
	const columns = ref([2, 3, 4, 5])
	const proportions = {
		2: 'test',
		3: '33',
		4: '25',
		5: '20',
	}
	const sorts = ref(['Выбрать', 'Лучшие продажи', 'А-Я', 'Цена, макс. - мин.', 'Цена, мин. - макс.',])
	const selectedSort = ref('Выбрать')
	const goods = useGoods()
	const selectedPage =  ref(1)
	return {
		activeColumn,
		columns,
		proportions,
		sorts,
		selectedSort,
		selectedPage,
		goods: computed(() => goods.data.flatMap((section) => section.subsections).reduce<typeof goods.data[number]['subsections'][number][][]>((prev, good, index) => {
			if (index % 12 === 0) {
				prev.push([good])
			}
			else {
				prev.at(-1)?.push(good)
			}
			return prev
		}, []))
	}
})