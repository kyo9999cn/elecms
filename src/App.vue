<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ElLocale } from '@/locales'
import { useAppStore } from './store/modules/app'

const appStore = useAppStore()
const app = storeToRefs(appStore)
</script>

<template>
  <el-config-provider :locale="ElLocale[app.lang.value]">
    <router-view />
  </el-config-provider>
</template>

<style lang="scss" scoped></style>
