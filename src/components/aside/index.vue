<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import menuData from '@/schame/menu'
import logo from '@/assets/images/logo.png'
import { useAppStore } from '@/store/modules/app'
import settings from '@/settings'
import { getLang } from '@/locales'

const appStore = useAppStore()
const route = useRoute()
const router = useRouter()

// 获取菜单信息
const onGetMenu = (path: string) => {
  let menu: any = null
  menuData.forEach((vo: any) => {
    if (vo.path === path) {
      menu = vo
    } else if (vo.children && vo.children.length > 0) {
      vo.children.forEach((v: any) => {
        if (v.path === path) {
          menu = v
        } else if (v.children && v.children.length > 0) {
          v.children.forEach((vv: any) => {
            if (vv.path === path) {
              menu = vv
            }
          })
        }
      })
    }
  })
  return menu
}

const onGetCurrentMenu = () => {
  appStore.currentMenu = route.fullPath
}
onGetCurrentMenu()

const onSelectMenu = (value: any) => {
  appStore.currentMenu = value
  const tabExists = appStore.tabMenus.some((item) => item.path === value)
  if (!tabExists) {
    const menu = onGetMenu(value)
    appStore.tabMenus.push({
      label: menu.label,
      title: menu.title,
      path: value
    })
  }
  router.push(value)
}

const onOpenMenu = (value: any) => {
  const openedMenu: any = appStore.openedMenu.filter((v) => v !== value)
  openedMenu.push(value)
  appStore.openedMenu = openedMenu
}

const onCloseMenu = (value: any) => {
  const openedMenu: any = appStore.openedMenu.filter((v) => v !== value)
  appStore.openedMenu = openedMenu
}
</script>

<template>
  <el-container>
    <el-header>
      <div class="ele-logo">
        <img :src="logo" />
        <h2 v-if="!appStore.collapse">{{ settings.appliactionName }}</h2>
      </div>
    </el-header>
    <el-main>
      <el-menu
        :default-active="appStore.currentMenu"
        :default-openeds="appStore.openedMenu"
        :collapse="appStore.collapse"
        class="ele-menu"
        @select="onSelectMenu"
        @open="onOpenMenu"
        @close="onCloseMenu"
      >
        <template v-for="item in menuData" :key="item.name">
          <el-menu-item
            v-if="!item.children || item.children.length === 0"
            :index="item.path"
          >
            <el-icon><i :class="`ri-${item.icon}-line`"></i></el-icon>
            <span class="ele-menu-hd">
              {{ getLang(item.label, item.title, appStore.lang) }}
            </span>
          </el-menu-item>
          <el-sub-menu
            v-if="item.children && item.children.length !== 0"
            :index="item.path"
          >
            <template #title>
              <el-icon><i :class="`ri-${item.icon}-line`"></i></el-icon>
              <span class="ele-menu-hd">
                {{ getLang(item.label, item.title, appStore.lang) }}
              </span>
            </template>
            <template v-for="vo in item.children" :key="vo.name">
              <el-menu-item
                v-if="!vo.children || vo.children.length === 0"
                :index="vo.path"
                router
              >
                <span>{{ getLang(vo.label, vo.title, appStore.lang) }}</span>
              </el-menu-item>
              <el-sub-menu
                v-if="vo.children && vo.children.length !== 0"
                :index="vo.path"
              >
                <template #title>
                  <span>{{ getLang(vo.label, vo.title, appStore.lang) }}</span>
                </template>
                <template v-for="v in vo.children" :key="v.path">
                  <el-menu-item :index="v.path" router>
                    <span>{{ getLang(v.label, v.title, appStore.lang) }}</span>
                  </el-menu-item>
                </template>
              </el-sub-menu>
            </template>
          </el-sub-menu>
        </template>
      </el-menu>
    </el-main>
    <el-footer>
      <el-space class="ele-footer-btn">
        <el-icon><i class="ri-logout-box-line"></i></el-icon>
        <span v-if="!appStore.collapse" class="ele-aside-hd">
          {{ getLang('logout', '退出登录', appStore.lang) }}
        </span>
      </el-space>
    </el-footer>
  </el-container>
</template>

<style lang="scss" scoped></style>
