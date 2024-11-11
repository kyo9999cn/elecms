<script setup lang="ts">
import { TablePage } from '@/layout'

const model = 'develop/models/fields'
</script>

<template>
  <table-page
    :model="model"
    form-label-width="156px"
    dialog-width="900px"
    :form-item-col="12"
    back
    sortable
  ></table-page>
</template>

<style lang="scss" scoped>
.ele-icon {
  font-size: 16px;
}
</style>
