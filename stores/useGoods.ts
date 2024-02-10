export const useGoods = defineStore('goods', () => {
  const goods = ref([
    {section: 'Букеты', link: 'bouquet', subsections: [
                {title: "С гвоздиками", price: 1000, img_src: 'hot_deal_1', link: ''},
                {title: "С герберами", price: 1000, img_src: 'hot_deal_2', link: ''},
                {title: "С лилиями", price: 1000, img_src: 'hot_deal_3', link: ''},
                {title: "С орхидеями", price: 1000, img_src: 'hot_deal_4', link: ''},
                {title: "С розами", price: 1000, img_src: 'hot_deal_5', link: ''},
                {title: "С ромашками", price: 1000, img_src: 'hot_deal_6', link: ''},
                {title: "С тюльпанами", price: 1000, img_src: 'hot_deal_7', link: ''},
                {title: "С экзотическими цветами", price: 1000, img_src: 'hot_deal_8', link: ''}
              ]},
    {section: 'Цветы', link: 'flowers', subsections: [
                {title: "Гвоздики", price: 1000, img_src: 'hot_deal_1', link: ''},
                {title: "Герберы",  price: 1000, img_src: 'hot_deal_2', link: ''},
                {title: "Лизиантусы", price: 1000, img_src: 'hot_deal_3', link: ''},
                {title: "Лилии",  price: 1000, img_src: 'hot_deal_4', link: ''},
                {title: "Орхидеи",  price: 1000, img_src: 'hot_deal_5', link: ''},
                {title: "Подсолнухи", price: 1000, img_src: 'hot_deal_6', link: ''},
                {title: "Розы", price: 1000, img_src: 'hot_deal_7', link: ''},
                {title: "Ромашки",  price: 1000, img_src: 'hot_deal_8', link: ''},
                {title: "Тюльпаны", price: 1000, img_src: 'hot_deal_1', link: ''},
                {title: "Хризантемы", price: 1000, img_src: 'hot_deal_2', link: ''},
                {title: "Экзотические цветы", price: 1000, img_src: 'hot_deal_3', link: ''}
              ]},
    {section: 'Композиции', link: 'сomposition', subsections: [
                {title: "Корзины с цветами",  price: 1000, img_src: 'hot_deal_1', link: ''},
                {title: "Цветы в коробках", price: 1000, img_src: 'hot_deal_2', link: ''},
                {title: "Шляпные коробки",  price: 1000, img_src: 'hot_deal_3', link: ''},
                {title: "Корзины с цветами",  price: 1000, img_src: 'hot_deal_4', link: ''},
                {title: "Цветы в коробках", price: 1000, img_src: 'hot_deal_5', link: ''},
                {title: "Шляпные коробки",  price: 1000, img_src: 'hot_deal_6', link: ''},
                {title: "Корзины с цветами",  price: 1000, img_src: 'hot_deal_7', link: ''},
                {title: "Цветы в коробках", price: 1000, img_src: 'hot_deal_8', link: ''},
                {title: "Шляпные коробки", price: 1000, img_src: 'hot_deal_1', link: ''},
                {title: "Корзины с цветами", price: 1000, img_src: 'hot_deal_2', link: ''},
              ]}
  ])
  const searchQuery = ref('')
  return {
    data: computed(() => goods.value),
    filtered: computed(() => {
      if (searchQuery.value.length === 0) return goods.value  
      const tempGoods = goods.value.reduce((prev, item) => {
          let tempSubsections = item.subsections.filter(({title}) => title.toLowerCase().includes(searchQuery.value.toLowerCase()))
          if (tempSubsections.length) {
            prev.push({...item, subsections: tempSubsections})
          }
          return prev
      }, [] as typeof goods.value)
      return tempGoods
    }),
    searchQuery: computed({
      get() {
        return searchQuery.value
      },
      set(value: string) {
        searchQuery.value = value
      }
    })
  }
})