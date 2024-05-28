import { Good } from "~/types/Good"

export const useCart = defineStore('cart', () => {
	const data = ref<Map<string, {price: number, count: number}>>(new Map()) 
	return {
		data: computed(() => data.value),
		totalCount: computed(() => Array.from(data.value.values()).reduce((prev, {count}) => prev + count , 0)), 
		totalAmount: computed(() => Array.from(data.value.values()).reduce((prev, {price}) => prev + price , 0)), 
		hasGood: (title: string) => data.value.has(title), 
		getGood: (title: string) => data.value.get(title),
		changeCount: (good: Good, count: number) => data.value.set(good.title, {count, price: good.price}),
		addGood: (good: Good) => data.value.set(good.title, {count: 1, price: good.price}),
		deleteGood: (title: string) => data.value.delete(title),
	}
})