<script setup lang="ts">
import { TablePage } from '@/layout'

const model = 'develop/entries/fields'
</script>

<template>
  <table-page
    :model="model"
    form-label-width="140px"
    dialog-width="520px"
    back
    sortable
  ></table-page>
</template>

<style lang="scss" scoped>
.ele-icon {
  font-size: 16px;
}
</style>
