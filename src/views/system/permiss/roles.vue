<script setup lang="ts">
import { ref } from 'vue'
import { TablePage } from '@/layout'
import http from '@/utils/http'
import { getLang } from '@/locales'
import { useAppStore } from '@/store/modules/app'

const model = 'roles'
const modelName = 'form.permissRoles.model'

const setVisible = ref(false)
const currentRow: any = ref({})
const permissRules: any = ref([])
const appStore = useAppStore()

const onAction = (key: string, row: any) => {
  if (key === 'set') {
    currentRow.value = row
    http
      .request({
        url: 'rules/data'
      })
      .then((res: any) => {
        permissRules.value = res.data
      })
    setVisible.value = true
  }
}
</script>

<template>
  <table-page
    :model="model"
    :model-name="modelName"
    :dialog-width="450"
    @custom-action="onAction"
  ></table-page>
  <el-dialog
    v-model="setVisible"
    :title="getLang('form.permissRoles.permissSet', '权限设置', appStore.lang)"
    width="80%"
    top="5vh"
  >
    <div style="padding: 10px">
      <div class="form-item">
        <div class="label">
          {{ getLang('form.permissRoles.name', '角色名称', appStore.lang) }}：
        </div>
        <div>
          <b>{{ currentRow.name }}</b>
        </div>
      </div>
      <div class="form-item">
        <div class="label">
          {{ getLang('form.permissRoles.set', '设置权限', appStore.lang) }}：
        </div>
      </div>
      <div class="ele-table-box">
        <el-table
          :data="permissRules"
          :border="true"
          row-key="id"
          :tree-props="{
            checkStrictly: true
          }"
          :height="460"
          :indent="24"
          :empty-text="getLang('empty', '暂无数据', appStore.lang)"
          default-expand-all
          size="small"
          cless="ele-table"
        >
          <el-table-column
            label=""
            prop="checked"
            type=""
            wdith="40"
            min-width="40"
            align="center"
            fixed="left"
          >
            <template #default="scope">
              <div>
                <el-checkbox :checked="scope.row.checked === 1" />
              </div>
            </template>
          </el-table-column>
          <el-table-column
            :label="
              getLang('form.permissRules.name', '权限名称', appStore.lang)
            "
            prop="name"
            width="220"
          />
          <el-table-column
            :label="getLang('actions.all', '全部', appStore.lang)"
            width="60"
            align="center"
          >
            <template #default="scope">
              <div>
                <el-checkbox :checked="scope.row.checked === 1" />
              </div>
            </template>
          </el-table-column>
          <el-table-column
            :label="getLang('actions.detail', '详情', appStore.lang)"
            width="60"
            align="center"
          >
            <template #default="scope">
              <div>
                <el-checkbox :disabled="!scope.row.is_detail" />
              </div>
            </template>
          </el-table-column>
          <el-table-column
            :label="getLang('actions.search', '查询', appStore.lang)"
            width="60"
            align="center"
          >
            <template #default="scope">
              <div>
                <el-checkbox :disabled="!scope.row.is_search" />
              </div>
            </template>
          </el-table-column>
          <el-table-column
            :label="getLang('actions.add', '新建', appStore.lang)"
            width="60"
            align="center"
          >
            <template #default="scope">
              <div>
                <el-checkbox :disabled="!scope.row.is_add" />
              </div>
            </template>
          </el-table-column>
          <el-table-column
            :label="getLang('actions.edit', '修改', appStore.lang)"
            width="60"
            align="center"
          >
            <template #default="scope">
              <div>
                <el-checkbox :disabled="!scope.row.is_edit" />
              </div>
            </template>
          </el-table-column>
          <el-table-column
            :label="getLang('actions.delete', '删除', appStore.lang)"
            width="60"
            align="center"
          >
            <template #default="scope">
              <div>
                <el-checkbox :disabled="!scope.row.is_delete" />
              </div>
            </template>
          </el-table-column>
          <el-table-column
            :label="getLang('actions.multDelete', '批量删除', appStore.lang)"
            width="80"
            align="center"
          >
            <template #default="scope">
              <div>
                <el-checkbox :disabled="!scope.row.is_mult_delete" />
              </div>
            </template>
          </el-table-column>
          <el-table-column
            :label="getLang('actions.import', '导入', appStore.lang)"
            width="60"
            align="center"
          >
            <template #default="scope">
              <div>
                <el-checkbox :disabled="!scope.row.is_import" />
              </div>
            </template>
          </el-table-column>
          <el-table-column
            :label="getLang('actions.export', '导出', appStore.lang)"
            width="60"
            align="center"
          >
            <template #default="scope">
              <div>
                <el-checkbox :disabled="!scope.row.is_export" />
              </div>
            </template>
          </el-table-column>
          <el-table-column
            :label="getLang('actions.print', '打印', appStore.lang)"
            width="60"
            align="center"
          >
            <template #default="scope">
              <div>
                <el-checkbox :disabled="!scope.row.is_print" />
              </div>
            </template>
          </el-table-column>
          <el-table-column
            :label="getLang('actions.custom', '自定义操作', appStore.lang)"
            min-width="160"
          >
            <template #default="scope">
              <div
                v-if="
                  scope.row.custom_actions &&
                  scope.row.custom_actions.length > 0
                "
              >
                <el-space wrap>
                  <el-checkbox
                    v-for="item in scope.row.custom_actions"
                    :key="item.value"
                    :checked="scope.row.checked === 1"
                    :label="getLang(item.label, item.title, appStore.lang)"
                  />
                </el-space>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <template #footer>
      <el-space size="large">
        <el-button @click="() => (setVisible = false)">
          {{ getLang('actions.cancel', '取消', appStore.lang) }}
        </el-button>
        <el-button type="primary">
          {{ getLang('actions.save', '保存设置', appStore.lang) }}
        </el-button>
      </el-space>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
.form-item {
  padding-top: 2px;
  padding-bottom: 12px;
  display: flex;
  color: var(--el-text-color-primary);
}
.form-item .label {
  padding-right: 8px;
}
</style>
