<script setup lang="ts">
import { EleHeader, EleAside, EleTabbar } from '@/components'
import { useAppStore } from '@/store/modules/app'
import settings from '@/settings'

const appStore = useAppStore()
</script>

<template>
  <el-container class="ele-body">
    <el-aside
      class="ele-aside"
      :width="`${appStore.collapse ? settings.asideCollapseWidth : settings.asideDefaultWidth}px`"
    >
      <ele-aside />
    </el-aside>
    <el-container class="ele-main">
      <el-header>
        <ele-header />
      </el-header>
      <el-main class="ele-main__content">
        <ele-tabbar />
        <div class="ele-main-body">
          <div class="ele-main-body__content">
            <router-view />
          </div>
          <div v-if="settings.footer" class="ele-footer">
            {{ settings.copyright }}
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped></style>
