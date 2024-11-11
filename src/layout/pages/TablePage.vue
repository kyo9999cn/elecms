<script setup lang="ts">
import { ref, watch } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
import http from '@/utils/http'
import { EleForm } from '@/components'
import { getLang } from '@/locales'
import { useAppStore } from '@/store/modules/app'
import settings from '@/settings'

const props = defineProps({
  // 模型
  model: {
    type: String,
    default: ''
  },
  modelName: {
    type: String,
    default: ''
  },
  modelLabel: {
    type: String,
    default: ''
  },
  // 表格row-key
  rowKey: {
    type: String,
    default: 'id'
  },
  // 新建
  addable: {
    type: Boolean,
    default: true
  },
  addBtn: {
    type: String,
    default: 'actions.add'
  },
  addPath: {
    type: String,
    default: ''
  },
  // 修改
  editable: {
    type: Boolean,
    default: true
  },
  editBtn: {
    type: String,
    default: 'actions.edit'
  },
  editPath: {
    type: String,
    default: ''
  },
  // 删除
  deleteable: {
    type: Boolean,
    default: true
  },
  deleteMult: {
    type: Boolean,
    default: true
  },
  deleteBtn: {
    type: String,
    default: 'actions.delete'
  },
  deletePath: {
    type: String,
    default: ''
  },
  // 导出
  exportable: {
    type: Boolean,
    default: false
  },
  // 导入
  importable: {
    type: Boolean,
    default: false
  },
  // 打印
  printable: {
    type: Boolean,
    default: false
  },
  // 排序
  sortable: {
    type: Boolean,
    default: false
  },
  // 多选
  selectable: {
    type: Boolean,
    default: true
  },
  // 表单类型
  formType: {
    type: String,
    default: 'dialog' // 默认dialog, 可选dialog, drawer
  },
  dialogWidth: {
    type: [String, Number],
    default: '50%'
  },
  drawerWidth: {
    type: [String, Number],
    default: '50%'
  },
  formLabelWidth: {
    type: String,
    default: '100px'
  },
  formItemCol: {
    type: Number,
    default: 24
  },
  // 树状表格
  treeTable: {
    type: Boolean,
    default: false
  },
  // 默认搜索字段
  defaultSearchData: {
    type: Object,
    default: () => {
      return {}
    }
  },
  // 页面特性
  back: {
    type: Boolean,
    default: false
  },
  // 分页
  pageSize: {
    type: Number,
    default: 20
  }
})

const emit = defineEmits(['custom-action'])

// 模型关键字
const modelKey = ref(props.model)
const modelName = ref(props.modelName)
const modelLabel = ref(props.modelLabel)

// 路由
const route = useRoute()
const router = useRouter()
const routePath: any = ref([])
const appStore = useAppStore()

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

// 表格
const tableColumns: any = ref([])
const actionsWidth = ref(160)
const tableActions: any = ref([])
const tableData: any = ref([])

// 搜索器
const searchFields: any = ref([])
const searchData: any = ref(props.defaultSearchData)

// 分页
const currentPage = ref(1)
const pageSize = ref(props.pageSize)
const totalPage = ref(0)

// 操作
const action = ref('add')
const formTitle = ref('新建')
const formFields: any = ref([])
const formData: any = ref({})
const formLabelWidth: any = ref(props.formLabelWidth)

// 对话框
const dialogVisible = ref(false)

// 抽屉
const drawerVisible = ref(false)

// 加载
const loading = ref(true)

const onGetModel = () => {
  return new Promise((resolve, reject) => {
    http
      .request({
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
  http
    .request({
      url: `${modelKey.value}`,
      method: 'get',
      params: searchData.value
    })
    .then((res: any) => {
      setTimeout(() => {
        loading.value = false
        tableData.value = res.data
        totalPage.value = res.total
      }, 500)
    })
    .catch(() => {
      loading.value = false
    })
}

// 查询
const onSearch = (formData: any) => {
  searchData.value = formData
  // 处理查询字段
  // console.log(searchData.value)
  onGetList()
  console.log('do:search')
}

// 新增
const onAdd = () => {
  action.value = 'add'
  formData.value = {}
  formTitle.value =
    getLang(props.addBtn, '新建', appStore.lang) +
    (appStore.lang !== 'zhCn' ? ' ' : '') +
    getLang(modelLabel.value, modelName.value, appStore.lang)
  if (props.formType === 'dialog') {
    dialogVisible.value = true
  }
  if (props.formType === 'drawer') {
    drawerVisible.value = true
  }
}

// 修改
const onEdit = (row: any) => {
  action.value = 'edit'
  formTitle.value =
    getLang(props.editBtn, '修改', appStore.lang) +
    (appStore.lang !== 'zhCn' ? ' ' : '') +
    getLang(modelLabel.value, modelName.value, appStore.lang)

  // 通过列表数据获取表单值，使用深拷贝阻止响应式
  formData.value = JSON.parse(JSON.stringify(row))
  if (props.formType === 'dialog') {
    dialogVisible.value = true
  }
  if (props.formType === 'drawer') {
    drawerVisible.value = true
  }

  /** 异步方式获取表单值 
  http
    .request({
      url: `${modelKey.value}/${row.id}`,
      method: 'get'
    })
    .then((res: any) => {
      formData.value = res.data
      if (props.formType === 'dialog') {
        dialogVisible.value = true
      }
      if (props.formType === 'drawer') {
        drawerVisible.value = true
      }
    })
  */
}

// 删除
const onDelete = (id: number) => {
  ElMessageBox.confirm(
    getLang(
      'message.deleteConfirm',
      `您确定要删除${props.modelName}数据吗？`,
      appStore.lang
    ),
    getLang('message.confirmTitle', '系统提示', appStore.lang)
  )
    .then(() => {
      http
        .request({
          url: `${modelKey.value}/${id}`,
          method: 'delete'
        })
        .then(() => {
          // 删除后执行
          // 重新加载表格数据
          onGetList()
        })
        .catch((e: any) => {
          ElMessage.error(e.message ?? '请求失败')
        })
    })
    .catch(() => {})
}

const onAction = (key: string, row: any) => {
  if (key === 'edit') {
    onEdit(row)
  } else if (key === 'delete') {
    onDelete(row.id)
  } else {
    // 自定义操作
    emit('custom-action', key, row)
  }
  // console.log(key, row)
}

// 保存
const onSave = () => {
  if (action.value === 'add') {
    console.log(formData.value)
    console.log(action.value)
  }
  if (action.value === 'edit') {
    console.log(action.value)
  }
}

// 取消/关闭对话框
const onCancel = () => {
  if (props.formType === 'dialog') {
    dialogVisible.value = false
  }
  if (props.formType === 'drawer') {
    drawerVisible.value = false
  }
}

// 返回上级
const onBack = () => {
  router.back()
}

// 初始化页面
const onInit = () => {
  onGetModel().then((res: any) => {
    modelName.value = res.data.title ?? props.modelName
    modelLabel.value = res.data.label ?? props.modelLabel
    tableColumns.value = res.data.columns
    tableActions.value = res.data.actions
    searchFields.value = res.data.search_fields
    formFields.value = res.data.fields
    actionsWidth.value =
      res.data.actions_width > 0 ? res.data.actions_width : 160
    if (res.data.form_label_width)
      formLabelWidth.value = res.data.form_label_width
    onGetList()
  })
}
onInit()

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
    <div v-if="searchFields && searchFields.length > 0" class="ele-search-box">
      <ele-form
        v-model="searchData"
        :fields="searchFields"
        :inline="true"
        item-default-width="260px"
        label-suffix="："
        submit-btn="actions.search"
        :resetable="false"
        @submit="onSearch"
      />
    </div>
    <div class="ele-actions-box">
      <div class="ele-actions-left">
        <el-space>
          <el-button v-if="props.addable" type="primary" @click="onAdd">
            {{ getLang(props.addBtn, '新建', appStore.lang) }}
          </el-button>
          <el-button v-if="props.deleteable && props.deleteMult" type="danger">
            {{ getLang(props.deleteBtn, '删除', appStore.lang) }}
          </el-button>
        </el-space>
      </div>
      <div class="ele-actions-right"></div>
    </div>
    <div class="ele-table-box">
      <el-table
        v-loading="loading"
        :element-loading-text="
          getLang('loading', '数据加载中...', appStore.lang)
        "
        :data="tableData"
        :border="true"
        :row-key="props.rowKey"
        :tree-props="{
          checkStrictly: true
        }"
        :indent="24"
        :empty-text="getLang('dataEmpty', '暂无数据...', appStore.lang)"
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
          :label="getLang('actions.sort', '排序', appStore.lang)"
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
          :label="getLang(item.label, item.title ?? item.label, appStore.lang)"
          :width="item.width ?? 'auto'"
          :align="item.align ?? 'left'"
          :prop="item.dataKey"
          :fixed="item.fixed ?? false"
        >
          <template v-if="item.customRander" #default="scope">
            <slot :name="`table-column__${item.dataKey}`" :row="scope.row" />
          </template>
          <template v-else-if="item.type === 'switch'" #default="scope">
            <el-switch
              v-model="scope.row[item.dataKey]"
              :active-value="1"
              :inactive-value="0"
              size="small"
            ></el-switch>
          </template>
          <template v-else-if="item.langKey" #default="scope">
            {{
              getLang(
                scope.row[item.langKey] ?? '',
                scope.row[item.dataKey],
                appStore.lang
              )
            }}
          </template>
        </el-table-column>
        <el-table-column
          v-if="tableActions && tableActions.length > 0"
          :label="getLang('operations', '操作', appStore.lang)"
          :min-width="120"
          :width="actionsWidth"
          fixed="right"
        >
          <template #default="scope">
            <el-space>
              <el-button
                v-for="vo in tableActions"
                :key="vo.key"
                :type="vo.type ? vo.type : 'default'"
                size="small"
                @click="onAction(vo.event, scope.row)"
              >
                {{ getLang(vo.label, vo.title ?? vo.label, appStore.lang) }}
              </el-button>
            </el-space>
          </template>
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
  <el-dialog
    v-model="dialogVisible"
    :title="formTitle"
    :width="props.dialogWidth"
  >
    <div class="ele-form-box">
      <ele-form
        v-model="formData"
        :fields="formFields"
        :label-width="formLabelWidth"
        label-suffix="："
        :item-col="props.formItemCol"
        :submitable="false"
        :resetable="false"
      >
        <template #custom-form="{ data }">
          <slot name="custom-form" :form-data="data"></slot>
        </template>
      </ele-form>
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="onCancel">
          {{ getLang('actions.cancel', '取消', appStore.lang) }}
        </el-button>
        <el-button type="primary" @click="onSave">
          {{ getLang('actions.submit', '提交', appStore.lang) }}
        </el-button>
      </div>
    </template>
  </el-dialog>
  <el-drawer
    v-model="drawerVisible"
    :title="formTitle"
    :size="props.drawerWidth"
  >
    <div class="ele-form-box">
      <ele-form
        v-model:data="formData"
        :fields="formFields"
        :label-width="formLabelWidth"
        label-suffix="："
        :item-col="props.formItemCol"
        :resetable="false"
        @cancel="onCancel"
      />
    </div>
  </el-drawer>
</template>

<style lang="scss" scoped>
.ele-form-box {
  padding-right: 20px;
}
.ele-actions-box {
  margin-top: 20px;
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
.ele-breadcrumb {
  display: flex;
  align-items: center;
}
.ele-back {
  display: flex;
  align-items: center;
  font-size: 13.5px;
  line-height: 1em;
  cursor: pointer;
}
.ele-page {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
</style>
