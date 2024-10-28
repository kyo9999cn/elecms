<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'
import request from '@/utils/request'

const props = defineProps({
  model: {
    type: String,
    default: ''
  },
  rowKey: {
    type: String,
    default: 'id'
  },
  sortable: {
    type: Boolean,
    default: false
  },
  selectable: {
    type: Boolean,
    default: true
  },
  treeTable: {
    type: Boolean,
    default: false
  }
})
const modelKey = ref(props.model)

// 路由
const route = useRoute()
const routePath: any = ref([])

route.matched.forEach((vo: any) => {
  routePath.value.push({
    key: vo.name,
    label: vo.meta.title,
    value: vo.path
  })
})

const tableColumns: any = ref([])
const actionsWidth = ref(160)
const tableActions: any = ref([])
const tableData: any = ref([])

// 分页
const currentPage = ref(1)
const pageSize = ref(15)
const totalPage = ref(100)

const onGetModel = () => {
  return new Promise((resolve, reject) => {
    request({
      url: `${modelKey.value}/model`,
      method: 'get'
    })
      .then((res: any) => {
        resolve(res)
      })
      .catch(() => {
        reject()
      })
  })
}
const onGetList = () => {
  request({
    url: `${modelKey.value}`,
    method: 'get'
  }).then((res: any) => {
    tableData.value = res.data
  })
}

onGetModel().then((res: any) => {
  tableColumns.value = res.data.columns
  tableActions.value = res.data.actions
  actionsWidth.value = res.data.actions_width > 0 ? res.data.actions_width : 160
  onGetList()
})
</script>

<template>
  <div class="ele-table-page">
    <div class="ele-breadcrumb">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item to="/">工作台</el-breadcrumb-item>
        <el-breadcrumb-item
          v-for="item in routePath"
          :key="item.key"
          :to="item.path"
        >
          {{ item.label }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="ele-search-box">
      <el-form :inline="true" label-suffix="：">
        <el-form-item label="角色名称">
          <el-input />
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="ele-actions-box">
      <div class="ele-actions-left">
        <el-space>
          <el-button type="primary">新建</el-button>
          <el-button type="danger">删除</el-button>
        </el-space>
      </div>
      <div class="ele-actions-right"></div>
    </div>
    <div class="ele-table-box">
      <el-table
        :data="tableData"
        :border="true"
        :row-key="props.rowKey"
        :tree-props="{
          checkStrictly: true
        }"
        :indent="24"
        empty-text="暂无数据"
        default-expand-all
        cless="ele-table"
      >
        <el-table-column
          v-if="props.selectable"
          type="selection"
          width="50"
          fixed="left"
          align="center"
        />
        <el-table-column
          v-if="props.sortable"
          label="排序"
          width="70"
          fixed="left"
          type=""
        >
          <template #default="scope">
            <el-input v-model="scope.row.sort" size="small" />
          </template>
        </el-table-column>
        <el-table-column
          v-for="item in tableColumns"
          :key="item.key"
          :label="item.title"
          :width="item.width"
          :align="item.align ?? 'left'"
          :prop="item.dataKey"
        >
          <template v-if="item.customRander" #default="scope">
            <slot :name="`table-column__${item.dataKey}`" :row="scope.row" />
          </template>
        </el-table-column>
        <el-table-column
          v-if="tableActions && tableActions.length > 0"
          label="操作"
          :min-width="120"
          :width="actionsWidth"
          fixed="right"
        >
          <el-space>
            <template v-for="vo in tableActions" :key="vo.key">
              <el-button :type="vo.type ? vo.type : 'default'" size="small">
                {{ vo.btn }}
              </el-button>
            </template>
          </el-space>
        </el-table-column>
      </el-table>
    </div>
    <div class="ele-page">
      <div></div>
      <div v-if="!props.treeTable">
        <el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :page-sizes="[10, 20, 50, 100]"
          background
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalPage"
        />
      </div>
    </div>
  </div>
  <el-dialog></el-dialog>
</template>

<style lang="scss" scoped>
.ele-search-box {
  margin-top: 20px;
  border-radius: 2px;
  border: 1px solid var(--el-border-color);
  background: #f3f4f5;
  padding: 16px;
}
.ele-search-box .el-form-item {
  --el-form-label-font-size: 13.5px;
  margin-bottom: 0px;
}
.ele-actions-box {
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ele-table-box {
  margin-top: 16px;
}
.ele-table {
  width: 100%;
}
.ele-page {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
</style>
