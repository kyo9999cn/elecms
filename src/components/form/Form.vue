<script setup lang="ts">
import type { FormInstance } from 'element-plus'
import { ref } from 'vue'
import { UploadImage } from '@/components'

const props = defineProps({
  data: {
    type: Object,
    default: () => {}
  },
  fields: {
    type: Array,
    default: () => []
  }
})

const formRef = ref<FormInstance>()
const formData: any = ref(props.data)
const formFields: any = ref(props.fields)

// 提交表单
const onSubmit = (formEl: FormInstance | undefined) => {
  console.log(formData.value)
  if (!formEl) return
  formEl.validate((valid: any) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
    }
  })
}

// 重置表单
const onReset = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<template>
  <el-form
    ref="formRef"
    :model="formData"
    label-width="calc(8em + 24px)"
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
            : '100%'
        }"
      >
        <div v-if="vo.type === 'input'" class="content">
          <div class="warper">
            <el-input
              v-model="formData[vo.name]"
              :placeholder="vo.placeholder"
              clearable
            />
          </div>
          <div v-if="vo.tips" class="tips">
            <el-tooltip :content="vo.tips" placement="right" effect="light">
              <el-icon><i class="ri-question-line"></i></el-icon>
            </el-tooltip>
          </div>
        </div>
        <div v-if="vo.type === 'textarea'" class="content">
          <div class="warper">
            <el-input
              v-model="formData[vo.name]"
              :placeholder="vo.placeholder"
              type="textarea"
            />
          </div>
          <div v-if="vo.tips" class="tips">
            <el-tooltip :content="vo.tips" placement="right" effect="light">
              <el-icon><i class="ri-question-line"></i></el-icon>
            </el-tooltip>
          </div>
        </div>
        <div v-if="vo.type === 'upload-image'" class="content">
          <div class="warper">
            <upload-image v-model="formData[vo.name]"></upload-image>
          </div>
        </div>
        <div v-if="vo.type === 'switch'" class="content">
          <el-switch
            v-model="formData[vo.name]"
            :active-value="1"
            :inactive-value="0"
          />
        </div>
      </el-form-item>
      <el-divider v-if="vo.divider" content-position="left">
        {{ vo.divider.label }}
      </el-divider>
    </template>
    <el-form-item>
      <el-button type="primary" @click="onSubmit(formRef)">保存设置</el-button>
      <el-button @click="onReset(formRef)">重置</el-button>
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
