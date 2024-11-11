<script setup lang="ts">
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import { ElLocale, getLang } from '@/locales'
import { useAppStore } from './store/modules/app'
import settings from './settings'

const appStore = useAppStore()
const route = useRoute()

// 重新设置标题
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

watch(route, (val: any) => {
  onResetTitle(val)
})
</script>

<template>
  <el-config-provider :locale="ElLocale[appStore.lang]">
    <div :class="`app__${appStore.lang}`">
      <router-view />
    </div>
  </el-config-provider>
</template>

<style lang="scss" scoped></style>
