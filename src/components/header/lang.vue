<script setup lang="ts">
import { ref } from 'vue'
import NProgress from 'nprogress'
import { useAppStore } from '@/store/modules/app'
import settings from '@/settings'
import 'nprogress/nprogress.css'
import { EleLocale } from '@/locales'

NProgress.configure({ easing: 'ease', speed: 300, showSpinner: false })

const app = useAppStore()
const currentLang: any = ref(EleLocale[app.lang])

const onChangeLang = (lang: any) => {
  NProgress.start()
  setTimeout(() => {
    NProgress.done()
    app.lang = lang
    currentLang.value = EleLocale[lang]
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
