<script setup lang="ts">
import { TablePage } from '@/layout'

const model = 'develop/menus'
</script>

<template>
  <table-page
    :model="model"
    form-label-width="140px"
    dialog-width="520px"
    tree-table
    sortable
  >
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
