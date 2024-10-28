<script setup lang="ts">
import { TablePage } from '@/layout'

const model = 'develop/menus'
</script>

<template>
  <table-page :model="model" tree-table sortable>
    <template #table-column__icon="{ row }">
      <el-icon><i :class="`ri-${row.icon}-line`"></i></el-icon>
    </template>
  </table-page>
</template>

<style lang="scss" scoped></style>
