<script setup lang="ts">
import menuData from '@/settings/menu'

console.log(menuData)
</script>

<template>
  <el-container>
    <el-header></el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu>
          <template v-for="item in menuData" :key="item.name">
            <el-menu-item
              v-if="!item.children || item.children.length === 0"
              :id="item.name"
            >
              <el-icon><i :class="`ri-${item.icon}-line`"></i></el-icon>
              <span>{{ item.label }}</span>
            </el-menu-item>
            <el-sub-menu
              v-if="item.children && item.children.length !== 0"
              :id="item.name"
            >
              <template v-for="vo in item.children" :key="vo.name">
                <el-menu-item
                  v-if="!vo.children || vo.children.length === 0"
                  :id="vo.name"
                ></el-menu-item>
                <el-sub-menu
                  v-if="vo.children && vo.children.length !== 0"
                  :id="vo.name"
                ></el-sub-menu>
              </template>
            </el-sub-menu>
          </template>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <div>
            <router-view />
          </div>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>
