<script setup lang="ts">
import screenfull from 'screenfull'
import { ref } from 'vue'
import avatar from '@/assets/images/avatar.jpg'
import { useAppStore } from '@/store/modules/app'
import EleLang from './lang.vue'

const appStore = useAppStore()
const isFullscreen = ref(false)

const onTaggleLeftMenu = () => {
  appStore.collapse = !appStore.collapse
  if (appStore.collapse) {
    appStore.openedMenu = []
  }
}

const onFullscreen = () => {
  if (screenfull.isEnabled) {
    screenfull.toggle()
  }
}

window.onresize = () => {
  if (screenfull.isEnabled) {
    isFullscreen.value = screenfull.isFullscreen
  }
}
</script>

<template>
  <div class="ele-header">
    <div class="ele-header-left">
      <div class="ele-header-actions">
        <div class="action-item">
          <el-icon>
            <i
              v-if="!appStore.collapse"
              class="ri-menu-unfold-4-line"
              @click="onTaggleLeftMenu"
            ></i>
            <i v-else class="ri-menu-fold-4-line" @click="onTaggleLeftMenu"></i>
          </el-icon>
        </div>
      </div>
    </div>
    <div class="ele-header-right">
      <el-dropdown trigger="click" popper-class="ele-drop">
        <div class="ele-userbox">
          <el-space :size="10">
            <el-avatar :src="avatar" :size="28" />
            <b>小白fate</b>
          </el-space>
        </div>
        <template #dropdown>
          <el-dropdown-item>个人资料</el-dropdown-item>
          <el-dropdown-item>安全设置</el-dropdown-item>
          <el-dropdown-item divided>退出登录</el-dropdown-item>
        </template>
      </el-dropdown>
      <div class="ele-header-actions">
        <div class="action-item" @click="onFullscreen">
          <el-icon>
            <i v-if="!isFullscreen" class="ri-fullscreen-line" />
            <i v-else class="ri-fullscreen-exit-line" />
          </el-icon>
        </div>
        <div class="action-item">
          <ele-lang />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
