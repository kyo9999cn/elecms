<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ArrowRight } from '@element-plus/icons-vue'
import { ref, watch } from 'vue'
import { EleForm } from '@/components'
import { useAppStore } from '@/store/modules/app'
import { getLang } from '@/locales'
import settings from '@/settings'

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => {
      return {}
    }
  },
  fields: {
    type: Array,
    default: () => {
      return []
    }
  },
  rules: {
    type: Object,
    default: () => {
      return {}
    }
  },
  formLabelWidth: {
    type: String,
    default: '100px'
  },
  formItemCol: {
    type: Number,
    default: 24
  },
  back: {
    type: Boolean,
    default: false
  },
  submitBtn: {
    type: String,
    default: 'actions.submit'
  },
  resetable: {
    type: Boolean,
    default: true
  },
  resetBtn: {
    type: String,
    default: 'actions.reset'
  }
})

const router = useRouter()
const route = useRoute()
const routePath: any = ref([])
const appStore = useAppStore()

const formFields: any = ref(props.fields)
const formData: any = ref(props.modelValue)

const emit = defineEmits(['submit', 'reset'])

// 面包屑导航
const buildBreadcrumb = () => {
  routePath.value = []
  route.matched.forEach((vo: any) => {
    routePath.value.push({
      key: vo.name,
      label: getLang(vo.meta.label, vo.meta.title, appStore.lang),
      value: vo.path
    })
  })
  // 路径去防止获取相同路由的父子路由
  const res = new Map()
  routePath.value = routePath.value.filter(
    (vo: any) => !res.has(vo.value) && res.set(vo.value, 1)
  )
}
buildBreadcrumb()

const onBack = () => {
  router.back()
}

const onSubmit = (value: any) => {
  emit('submit', value)
}

const onReset = (value: any) => {
  emit('reset', value)
}

watch(
  props,
  (val) => {
    formData.value = val.modelValue
  },
  { deep: true }
)

watch(appStore, () => {
  buildBreadcrumb()
})
</script>

<template>
  <div class="ele-table-page">
    <div class="ele-breadcrumb">
      <div v-if="props.back" class="ele-back" @click="onBack">
        <el-icon><ArrowLeft /></el-icon>
        <span>{{ getLang('back', '返回', appStore.lang) }}</span>
      </div>
      <el-divider
        v-if="props.back"
        direction="vertical"
        style="margin: 0 16px"
      />
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item to="/">
          {{ getLang(settings.indexLabel, settings.indexName, appStore.lang) }}
        </el-breadcrumb-item>
        <el-breadcrumb-item
          v-for="item in routePath"
          :key="item.key"
          :to="item.path"
        >
          {{ item.label }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="ele-form-main">
      <ele-form
        v-model="formData"
        :fields="formFields"
        :rules="props.rules"
        :label-width="formLabelWidth"
        label-suffix="："
        :item-col="props.formItemCol"
        :submit-btn="props.submitBtn"
        :resetable="props.resetable"
        :reset-btn="props.resetBtn"
        @submit="onSubmit"
        @reset="onReset"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ele-form-main {
  padding-top: 40px;
}
</style>
