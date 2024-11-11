<script setup lang="ts">
import { useRouter } from 'vue-router'
import { TablePage } from '@/layout'

const model = 'develop/models'
const router = useRouter()

const onCustomAction = (key: any, row: any) => {
  if (key === 'fields') {
    router.push(`/system/develop/models/fields/${row.id}`)
  }
}
</script>

<template>
  <table-page
    :model="model"
    form-label-width="160px"
    dialog-width="560px"
    @custom-action="onCustomAction"
  />
</template>

<style lang="scss" scoped></style>
