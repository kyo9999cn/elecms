import { defineStore } from 'pinia'

export const useFormStore = defineStore({
  id: 'form',
  state: () => ({}),
  actions: {},
  persist: {
    enabled: true,
    strategies: []
  }
})
