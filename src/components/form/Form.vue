<script setup lang="ts">
import type { FormInstance } from 'element-plus'
import { ref, watch } from 'vue'
import { UploadImage } from '@/components'
import http from '@/utils/http'

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => {}
  },
  fields: {
    type: Array,
    default: () => []
  },
  labelWidth: {
    type: String,
    default: 'calc(8em + 24px)'
  },
  labelSuffix: {
    type: String,
    default: ''
  },
  inline: {
    type: Boolean,
    default: false
  },
  itemDefaultWidth: {
    type: String,
    default: '100%'
  },
  submitable: {
    type: Boolean,
    default: true
  },
  submitBtn: {
    type: String,
    default: '提交'
  },
  resetable: {
    type: Boolean,
    default: true
  },
  resetBtn: {
    type: String,
    default: '重置'
  },
  cancelable: {
    type: Boolean,
    default: false
  },
  cancelBtn: {
    type: String,
    default: '取消'
  }
})

const formRef = ref<FormInstance>()
const formData: any = ref(props.modelValue)
const formFields: any = ref(props.fields)
const formOptions: any = ref({})

const emit = defineEmits(['submit', 'reset', 'cancel'])

// 构建表单Select选项
const onBuildOptions = () => {
  formFields.value.forEach((vo: any) => {
    if (['select', 'checkbox-group', 'radio-group'].indexOf(vo.type) > -1) {
      formOptions.value[vo.name] = vo.options
    }
    if (vo.async === 1) {
      http
        .request({
          url: vo.url
        })
        .then((res: any) => {
          const opts: any = []
          res.data.forEach((v: any) => {
            opts.push({
              label: v[vo.labelKey ?? 'label'],
              value: v[vo.valueKey ?? 'value']
            })
          })
          formOptions.value[vo.name] = opts
        })
    }
  })
}
onBuildOptions()

// 提交表单
const onSubmit = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid: any) => {
    if (valid) {
      emit('submit', formData.value ?? {})
    } else {
      console.log(valid)
      console.log('error submit!')
    }
  })
}

// 重置表单
const onReset = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
  emit('reset', formData.value ?? {})
}

// 取消
const onCancel = () => {
  emit('cancel', formData.value ?? {})
}

watch(
  props,
  (val) => {
    formData.value = val.modelValue
  },
  { deep: true }
)
</script>

<template>
  <el-form
    ref="formRef"
    :model="formData"
    :label-width="props.labelWidth"
    :label-suffix="props.labelSuffix"
    :inline="props.inline"
    class="ele-form"
  >
    <template v-for="vo in formFields" :key="vo.id">
      <el-form-item
        v-if="
          !vo.condition ||
          (vo.condition && formData[vo.condition[0]] === vo.condition[1])
        "
        :label="vo.label"
        :prop="vo.name"
        :rules="vo.rules ?? []"
        :style="{
          width: vo.width
            ? typeof vo.width === 'number'
              ? `${vo.width}px`
              : vo.width
            : props.itemDefaultWidth
        }"
      >
        <div class="content">
          <div v-if="!vo.editable || vo.editable === 1" class="warper">
            <el-input
              v-if="vo.type === 'input'"
              v-model="formData[vo.name]"
              :placeholder="vo.placeholder"
              clearable
            />
            <el-input
              v-if="vo.type === 'textarea'"
              v-model="formData[vo.name]"
              :placeholder="vo.placeholder"
              type="textarea"
            />
            <el-date-picker
              v-if="vo.type === 'date' || vo.type === 'datetime'"
              v-model="formData[vo.name]"
              :placeholder="vo.placeholder"
              :type="vo.type === 'datetime' ? 'datetime' : 'date'"
              style="width: 100%"
            />
            <el-select
              v-if="vo.type === 'select'"
              v-model="formData[vo.name]"
              :placeholder="vo.placeholder"
              clearable
            >
              <el-option
                v-for="v in formOptions[vo.name]"
                :key="v.value"
                :label="v.label"
                :value="v.value"
              />
            </el-select>
            <upload-image
              v-if="vo.type === 'upload-image'"
              v-model="formData[vo.name]"
            ></upload-image>
            <el-switch
              v-if="vo.type === 'switch'"
              v-model="formData[vo.name]"
              :active-value="1"
              :inactive-value="0"
            />
          </div>
          <div v-else class="warper">
            {{
              vo.display_field ? formData[vo.display_field] : formData[vo.name]
            }}
          </div>
          <div v-if="vo.tips" class="tips">
            <el-tooltip :content="vo.tips" placement="right" effect="light">
              <el-icon><i class="ri-question-line"></i></el-icon>
            </el-tooltip>
          </div>
        </div>
      </el-form-item>
      <el-divider v-if="vo.divider" content-position="left">
        {{ vo.divider.label }}
      </el-divider>
    </template>
    <slot name="custom-form" :data="formData" />
    <el-form-item
      v-if="props.submitable || props.resetable || props.cancelable"
    >
      <el-button
        v-if="props.submitable"
        type="primary"
        @click="onSubmit(formRef)"
      >
        {{ props.submitBtn }}
      </el-button>
      <el-button v-if="props.resetable" @click="onReset(formRef)">
        {{ props.resetBtn }}
      </el-button>
      <el-button v-if="props.cancelable" @click="onCancel">
        {{ props.cancelBtn }}
      </el-button>
    </el-form-item>
  </el-form>
</template>

<style lang="scss" scoped>
.el-form-item .content {
  display: flex;
  align-items: center;
  color: var(--el-text-color-placeholder);
  width: 100%;
}
.el-form-item .content .warper {
  width: calc(100% - 20px);
}
.el-form-item .content .tips {
  width: 20px;
  text-align: right;
  cursor: pointer;
}
</style>
