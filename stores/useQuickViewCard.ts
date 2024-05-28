import { Good } from "~/types/Good"

export const useQuickViewCard = defineStore('quick-view-card', () => {
	
	const selectedPreview = ref('')
	const quantity = ref(1)
	const good = ref<null | Good>(null)
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
	}
})