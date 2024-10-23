import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    lang: '',
    actived: '/home',
    collapse: false
  }),
  actions: {
    onChangeActiveMenu(path: string) {
      this.actived = path
    },
    onToggleMenu() {
      this.collapse = !this.collapse
    },
    onChangeLang(lang: string) {
      this.lang = lang
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'actived',
        storage: localStorage
      },
      {
        key: 'collapse',
        storage: localStorage
      },
      {
        key: 'lang',
        storage: localStorage
      }
    ]
  }
})
