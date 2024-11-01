import { defineStore } from 'pinia'
import settings from '@/settings'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    lang: settings.defaultLang ?? 'zhCn',
    tabMenus: [
      {
        label: settings.indexLabel,
        title: settings.indexName,
        path: settings.indexPath
      }
    ],
    currentMenu: settings.indexPath,
    openedMenu: [],
    collapse: false
  }),
  actions: {},
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'tabMenus',
        storage: localStorage
      },
      {
        key: 'currentMenu',
        storage: localStorage
      },
      {
        key: 'openedMenu',
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
