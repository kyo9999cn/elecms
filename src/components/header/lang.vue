<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import NProgress from 'nprogress'
import { useAppStore } from '@/store/modules/app'
import settings from '@/settings'
import 'nprogress/nprogress.css'
import { EleLocale, getLang } from '@/locales'

NProgress.configure({ easing: 'ease', speed: 300, showSpinner: false })

const appStore = useAppStore()
const currentLang: any = ref(EleLocale[appStore.lang])
const route = useRoute()

// 重置标题
const onResetTitle = (val: any) => {
  let title = ''
  const routes = JSON.parse(JSON.stringify(val.matched)).reverse()
  let lastT = ''
  routes.forEach((vo: any) => {
    const t = getLang(
      vo.meta.label as string,
      vo.meta.title as string,
      appStore.lang
    )
    if (lastT !== t) {
      title += `${t ? `${t} - ` : ''}`
    }
    lastT = t
  })
  document.title = `${title}${settings.applicationName}`
}

// 切换语言
const onChangeLang = (lang: any) => {
  NProgress.start()
  setTimeout(() => {
    NProgress.done()
    appStore.lang = lang
    currentLang.value = EleLocale[lang]
    onResetTitle(route)
  }, 200)
}
</script>

<template>
  <el-dropdown trigger="click" popper-class="ele-drop" @command="onChangeLang">
    <div class="ele-drop-hd">
      <el-icon><i class="ri-global-line" /></el-icon>
    </div>
    <template #dropdown>
      <el-dropdown-item
        v-for="vo in settings.locales"
        :key="vo.value"
        :command="vo.value"
      >
        {{
          currentLang && currentLang[`locales.${vo.value}`]
            ? currentLang[`locales.${vo.value}`]
            : vo.label
        }}
      </el-dropdown-item>
    </template>
  </el-dropdown>
</template>

<style lang="scss" scoped></style>
