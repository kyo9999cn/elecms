<script setup lang="ts">
import { TablePage } from '@/layout'

const model = 'rules'
const modelName = '规则'
</script>

<template>
  <table-page :model="model" :model-name="modelName" tree-table>
    <template #table-column__is_detail="{ row }">
      <el-icon v-if="row.is_detail === 1" color="green"><Check /></el-icon>
      <span v-else class="text-gray">-</span>
    </template>
    <template #table-column__is_search="{ row }">
      <el-icon v-if="row.is_search === 1" color="green"><Check /></el-icon>
      <span v-else class="text-gray">-</span>
    </template>
    <template #table-column__is_add="{ row }">
      <el-icon v-if="row.is_add === 1" color="green"><Check /></el-icon>
      <span v-else class="text-gray">-</span>
    </template>
    <template #table-column__is_edit="{ row }">
      <el-icon v-if="row.is_edit === 1" color="green"><Check /></el-icon>
      <span v-else class="text-gray">-</span>
    </template>
    <template #table-column__is_mult_delete="{ row }">
      <el-icon v-if="row.is_mult_delete === 1" color="green"><Check /></el-icon>
      <span v-else class="text-gray">-</span>
    </template>
    <template #table-column__is_delete="{ row }">
      <el-icon v-if="row.is_delete === 1" color="green"><Check /></el-icon>
      <span v-else class="text-gray">-</span>
    </template>
    <template #table-column__is_export="{ row }">
      <el-icon v-if="row.is_export === 1" color="green"><Check /></el-icon>
      <span v-else class="text-gray">-</span>
    </template>
    <template #table-column__is_import="{ row }">
      <el-icon v-if="row.is_import === 1" color="green"><Check /></el-icon>
      <span v-else class="text-gray">-</span>
    </template>
    <template #table-column__is_print="{ row }">
      <el-icon v-if="row.is_print === 1" color="green"><Check /></el-icon>
      <span v-else class="text-gray">-</span>
    </template>
  </table-page>
</template>

<style lang="scss" scoped></style>
