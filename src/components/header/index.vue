<script setup lang="ts">
import screenfull from 'screenfull'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import avatar from '@/assets/images/avatar.jpg'
import { useAppStore } from '@/store/modules/app'
import EleLang from './lang.vue'
import { getLang } from '@/locales'
import { useUserStore } from '@/store/modules/user'

const appStore = useAppStore()
const { clearUserinfo } = useUserStore()
const isFullscreen = ref(false)
const router = useRouter()

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

const onUserCommond = (command: string | number | object) => {
  if (command === 'logout') {
    clearUserinfo()
    router.push('/login')
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
      <el-dropdown
        trigger="click"
        popper-class="ele-drop"
        @command="onUserCommond"
      >
        <div class="ele-userbox">
          <el-space :size="10">
            <el-avatar :src="avatar" :size="28" />
            <b>小白fate</b>
          </el-space>
        </div>
        <template #dropdown>
          <el-dropdown-item command="profile">
            {{ getLang('user.profile', '个人资料', appStore.lang) }}
          </el-dropdown-item>
          <el-dropdown-item command="security">
            {{ getLang('user.security', '安全设置', appStore.lang) }}
          </el-dropdown-item>
          <el-dropdown-item divided command="logout">
            {{ getLang('logout', '退出登录', appStore.lang) }}
          </el-dropdown-item>
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
