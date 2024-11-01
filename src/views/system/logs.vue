<script setup lang="ts">
import { TablePage } from '@/layout'

const model = 'logs'
</script>

<template>
  <table-page :model="model" :addable="false" />
</template>

<style lang="scss" scoped></style>
