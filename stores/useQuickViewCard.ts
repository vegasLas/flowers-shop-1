import { Good } from "~/types/Good"

export const useQuickViewCard = defineStore('quick-view-card', () => {
	
	const selectedPreview = ref('')
	const quantity = ref(1)
	const good = ref<null | Good>(null)
	function decrementQuantity () {
		if (quantity.value === 1) return
		quantity.value -=  1 
		
	}
	return {
		selectedPreview,
		quantity,
		good: computed<Good | null>({
			get() {
				return good.value
			},
			set(data: Good | null) {
				good.value = data
			}
		}),
		decrementQuantity
	}
})