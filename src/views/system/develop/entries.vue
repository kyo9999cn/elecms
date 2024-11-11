<script setup lang="ts">
import { useRouter } from 'vue-router'
import { TablePage } from '@/layout'

const model = 'develop/entries'
const router = useRouter()

const onCustomAction = (key: any, row: any) => {
  if (key === 'fields') {
    router.push(`/system/develop/entries/fields/${row.id}`)
  }
}
</script>

<template>
  <table-page
    :model="model"
    form-label-width="140px"
    dialog-width="520px"
    @custom-action="onCustomAction"
  />
</template>

<style lang="scss" scoped></style>
