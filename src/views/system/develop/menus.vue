<script setup lang="ts">
import { TablePage } from '@/layout'

const model = 'develop/menus'
const modelName = '系统菜单'
</script>

<template>
  <table-page :model="model" :model-name="modelName" tree-table sortable>
    <template #table-column__icon="{ row }">
      <el-icon class="ele-icon"><i :class="`ri-${row.icon}-line`"></i></el-icon>
    </template>
  </table-page>
</template>

<style lang="scss" scoped>
.ele-icon {
  font-size: 16px;
}
</style>
