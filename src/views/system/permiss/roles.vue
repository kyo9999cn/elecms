<script setup lang="ts">
import { ref } from 'vue'
import { TablePage } from '@/layout'
import http from '@/utils/http'

const model = 'roles'
const modelName = '角色'

const setVisible = ref(false)
const currentRow: any = ref({})
const permissRules: any = ref([])

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
  <el-dialog v-model="setVisible" title="权限设置" width="80%" top="5vh">
    <div style="padding: 10px">
      <div class="form-item">
        <div class="label">角色名称：</div>
        <div>
          <b>{{ currentRow.name }}</b>
        </div>
      </div>
      <div class="form-item">
        <div class="label">设置权限：</div>
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
          empty-text="暂无数据"
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
          >
            <template #default="scope">
              <div>
                <el-checkbox :checked="scope.row.checked === 1" />
              </div>
            </template>
          </el-table-column>
          <el-table-column label="权限名称" prop="name" width="220" />
          <el-table-column label="全部" width="50" align="center">
            <template #default="scope">
              <div>
                <el-checkbox :checked="scope.row.checked === 1" />
              </div>
            </template>
          </el-table-column>
          <el-table-column label="详情" width="50" align="center">
            <template #default="scope">
              <div>
                <el-checkbox :disabled="!scope.row.is_detail" />
              </div>
            </template>
          </el-table-column>
          <el-table-column label="查询" width="50" align="center">
            <template #default="scope">
              <div>
                <el-checkbox :disabled="!scope.row.is_search" />
              </div>
            </template>
          </el-table-column>
          <el-table-column label="新建" width="50" align="center">
            <template #default="scope">
              <div>
                <el-checkbox :disabled="!scope.row.is_add" />
              </div>
            </template>
          </el-table-column>
          <el-table-column label="修改" width="50" align="center">
            <template #default="scope">
              <div>
                <el-checkbox :disabled="!scope.row.is_edit" />
              </div>
            </template>
          </el-table-column>
          <el-table-column label="删除" width="50" align="center">
            <template #default="scope">
              <div>
                <el-checkbox :disabled="!scope.row.is_delete" />
              </div>
            </template>
          </el-table-column>
          <el-table-column label="批量删除" width="80" align="center">
            <template #default="scope">
              <div>
                <el-checkbox :disabled="!scope.row.is_mult_delete" />
              </div>
            </template>
          </el-table-column>
          <el-table-column label="导入" width="50" align="center">
            <template #default="scope">
              <div>
                <el-checkbox :disabled="!scope.row.is_import" />
              </div>
            </template>
          </el-table-column>
          <el-table-column label="导出" width="50" align="center">
            <template #default="scope">
              <div>
                <el-checkbox :disabled="!scope.row.is_export" />
              </div>
            </template>
          </el-table-column>
          <el-table-column label="打印" width="50" align="center">
            <template #default="scope">
              <div>
                <el-checkbox :disabled="!scope.row.is_print" />
              </div>
            </template>
          </el-table-column>
          <el-table-column label="自定义操作" min-width="160">
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
                    :label="item.label"
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
        <el-button @click="() => (setVisible = false)">取消</el-button>
        <el-button type="primary">保存设置</el-button>
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
