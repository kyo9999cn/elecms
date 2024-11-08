<script setup lang="ts">
import { ElLocale } from '@/locales'
import { useAppStore } from './store/modules/app'

const appStore = useAppStore()
</script>

<template>
  <el-config-provider :locale="ElLocale[appStore.lang]">
    <div :class="`app__${appStore.lang}`">
      <router-view />
    </div>
  </el-config-provider>
</template>

<style lang="scss" scoped></style>
