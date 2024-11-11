<script setup lang="ts">
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useAppStore } from '@/store/modules/app'
import settings from '@/settings'
import { getLang } from '@/locales'

const appStore = useAppStore()
const router = useRouter()

const app = storeToRefs(appStore)
const activeTab = ref(app.currentMenu)

const onActiveTab = (pane: any) => {
  appStore.currentMenu = pane.paneName
  router.push(pane.paneName)
}

const onRemoveTab = (path: any) => {
  const index = appStore.tabMenus.findIndex((vo) => vo.path === path)
  appStore.tabMenus = appStore.tabMenus.filter((vo) => vo.path !== path)
  router.push(appStore.tabMenus[index - 1])
}

const onDropdown = (command: string | number | object) => {
  if (command === 'close-other') {
    appStore.tabMenus = appStore.tabMenus.filter(
      (vo) => vo.path === appStore.currentMenu || vo.path === settings.indexPath
    )
  }
  if (command === 'close-all') {
    appStore.tabMenus = appStore.tabMenus.filter(
      (vo) => vo.path === settings.indexPath
    )
    appStore.currentMenu = settings.indexPath
    router.push(settings.indexPath)
  }
  if (command === 'refresh') {
    router.go(0)
  }
}

// 判断当前路由是否为选项卡值的子路由，并激活父路由
const onCheckRouter = () => {
  router.currentRoute.value.matched.forEach((vo: any) => {
    const current: any = appStore.tabMenus.find((v) => vo.path === v.path)
    if (current && current.path) {
      appStore.currentMenu = current.path
    }
  })
}
onCheckRouter()
</script>

<template>
  <div class="ele-tabbar">
    <div class="ele-tabbar-main">
      <el-tabs
        v-model="activeTab"
        type="card"
        @tab-click="onActiveTab"
        @tab-remove="onRemoveTab"
      >
        <el-tab-pane
          v-for="(item, i) in appStore.tabMenus"
          :key="item.path"
          :label="getLang(item.label, item.title, appStore.lang)"
          :name="item.path"
          :closable="i === 0 ? false : true"
        ></el-tab-pane>
      </el-tabs>
    </div>
    <div class="ele-tabbar-action">
      <el-dropdown trigger="click" @command="onDropdown">
        <el-icon><i class="ri-more-2-line"></i></el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="close-other">
              {{ getLang('actions.closeOther', '关闭其他', appStore.lang) }}
            </el-dropdown-item>
            <el-dropdown-item command="close-all">
              {{ getLang('actions.closeAll', '关闭全部', appStore.lang) }}
            </el-dropdown-item>
            <el-dropdown-item command="refresh">
              {{ getLang('actions.refreshPage', '刷新当前页', appStore.lang) }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
