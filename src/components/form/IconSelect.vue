<script setup lang="ts">
import { ref, watch } from 'vue'
import iconList from '@/components/icon/tags'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  }
})

const value = ref(props.modelValue)

const iconOptions: any = ref([])
Object.keys(iconList).forEach((key) => {
  iconOptions.value.push(key)
})

watch(props, (val) => {
  value.value = val.modelValue
})
</script>

<template>
  <el-select
    v-model="value"
    popper-class="ele-icon-select"
    :placeholder="props.placeholder"
    filterable
    clearable
  >
    <el-option v-for="item in iconOptions" :key="item" :value="item">
      <i :class="`ri-${item}-line`" />
    </el-option>
  </el-select>
</template>
