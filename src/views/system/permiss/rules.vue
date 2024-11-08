<script setup lang="ts">
import { ref } from 'vue'
import { TablePage } from '@/layout'
import { getLang } from '@/locales'
import { useAppStore } from '@/store/modules/app'

const model = 'rules'
const modelName = 'form.permissRules.model'
const appStore = useAppStore()

const actionsData: any = ref({
  name: '',
  label: '',
  title: ''
})
const onActionAdd = (formField: any) => {
  formField.push(actionsData.value)
}

const onActionRemove = (name: any, formField: any) => {
  const index = formField.findIndex((vo: any) => vo.name === name)
  if (index !== -1) {
    formField.splice(index, 1)
  }
}
</script>

<template>
  <table-page
    :model="model"
    :model-name="modelName"
    form-label-width="150px"
    dialog-width="900px"
    tree-table
  >
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
    <template #table-column__custom_actions="{ row }">
      <el-space>
        <el-tag v-for="vo in row.custom_actions" :key="vo.name">
          {{ getLang(vo.label, vo.title, appStore.lang) }}
        </el-tag>
      </el-space>
    </template>
    <template #custom-form="{ formData }">
      <el-form-item
        :label="getLang('actions.custom', '自定义操作', appStore.lang)"
      >
        <div>
          <div>
            <el-space>
              <el-input
                v-model="actionsData.title"
                :placeholder="
                  getLang('actions.name', '操作名称', appStore.lang)
                "
                class="action-input"
              />
              <el-input
                v-model="actionsData.name"
                :placeholder="
                  getLang('actions.event', '动作标记', appStore.lang)
                "
                class="action-input"
              />
              <el-input
                v-model="actionsData.label"
                :placeholder="
                  getLang('actions.label', '多语言标签', appStore.lang)
                "
                class="action-input"
              />
              <el-button
                type="primary"
                size="small"
                @click="onActionAdd(formData.custom_actions)"
              >
                <el-icon><Plus /></el-icon>
              </el-button>
            </el-space>
          </div>
          <div v-for="vo in formData.custom_actions" :key="vo.name">
            <el-space>
              <div class="action-item">{{ vo.title }}</div>
              <div class="action-item">{{ vo.name }}</div>
              <div class="action-item">{{ vo.label }}</div>
              <el-button
                size="small"
                @click="onActionRemove(vo.name, formData.custom_actions)"
              >
                <el-icon><Minus /></el-icon>
              </el-button>
            </el-space>
          </div>
        </div>
      </el-form-item>
    </template>
  </table-page>
</template>

<style lang="scss" scoped>
.action-input,
.action-item {
  width: 180px;
}
.action-item {
  padding: 2px 0px;
}
</style>
