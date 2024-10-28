<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import menuData from '@/schame/menu'
import logo from '@/assets/images/logo.png'

const menuDefaultWidth = 200
const menuWidth = ref(menuDefaultWidth)
const menuCollapseWidth = 64
const isCollapse = ref(false)
const menuValue = ref('/dashbord')

const route = useRoute()
menuValue.value = route.fullPath

const onTaggleLeftMenu = () => {
  isCollapse.value = !isCollapse.value
  menuWidth.value = isCollapse.value ? menuCollapseWidth : menuDefaultWidth
}
</script>

<template>
  <el-container class="ele-body">
    <el-aside class="ele-aside" :width="`${menuWidth}px`">
      <el-container>
        <el-header>
          <div class="ele-logo">
            <img :src="logo" />
            <h2 v-if="!isCollapse">Elecms Pro</h2>
          </div>
        </el-header>
        <el-main>
          <el-menu
            :default-active="menuValue"
            :collapse="isCollapse"
            class="ele-menu"
            router
          >
            <template v-for="item in menuData" :key="item.name">
              <el-menu-item
                v-if="!item.children || item.children.length === 0"
                :index="item.path"
              >
                <el-icon><i :class="`ri-${item.icon}-line`"></i></el-icon>
                <span>{{ item.label }}</span>
              </el-menu-item>
              <el-sub-menu
                v-if="item.children && item.children.length !== 0"
                :index="item.path"
              >
                <template #title>
                  <el-icon><i :class="`ri-${item.icon}-line`"></i></el-icon>
                  <span>{{ item.label }}</span>
                </template>
                <template v-for="vo in item.children" :key="vo.name">
                  <el-menu-item
                    v-if="!vo.children || vo.children.length === 0"
                    :index="vo.path"
                    router
                  >
                    <span>{{ vo.label }}</span>
                  </el-menu-item>
                  <el-sub-menu
                    v-if="vo.children && vo.children.length !== 0"
                    :index="vo.path"
                  >
                    <template #title>
                      <span>{{ vo.label }}</span>
                    </template>
                    <template v-for="v in vo.children" :key="v.path">
                      <el-menu-item :index="v.path" router>
                        <span>{{ v.label }}</span>
                      </el-menu-item>
                    </template>
                  </el-sub-menu>
                </template>
              </el-sub-menu>
            </template>
          </el-menu>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-aside>
    <el-container class="ele-main">
      <el-header>
        <el-menu mode="horizontal">
          <el-menu-item>
            <el-icon>
              <i
                v-if="!isCollapse"
                class="ri-menu-unfold-4-line"
                @click="onTaggleLeftMenu"
              ></i>
              <i
                v-else
                class="ri-menu-fold-4-line"
                @click="onTaggleLeftMenu"
              ></i>
            </el-icon>
          </el-menu-item>
          <el-menu-item>admin</el-menu-item>
        </el-menu>
      </el-header>
      <el-main class="ele-main__content">
        <div class="ele-tabbar">
          <div class="ele-tabbar-main">
            <el-tabs type="card">
              <el-tab-pane label="工作台" name="dashbord"></el-tab-pane>
              <el-tab-pane
                label="系统设置"
                name="system/settings"
                closable
              ></el-tab-pane>
            </el-tabs>
          </div>
          <div class="ele-tabbar-action">
            <el-dropdown trigger="click">
              <el-icon><i class="ri-more-2-line"></i></el-icon>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>关闭其他</el-dropdown-item>
                  <el-dropdown-item>关闭全部</el-dropdown-item>
                  <el-dropdown-item>刷新当前页</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
        <div class="ele-main-body">
          <div class="ele-main-body__content">
            <router-view />
          </div>
          <div class="ele-footer">Copyright © 2019-2025 小白fate</div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped></style>
