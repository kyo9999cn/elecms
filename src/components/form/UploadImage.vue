<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import type { UploadProps } from 'element-plus'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const imageUrl = ref(props.modelValue)

const onSuccess: UploadProps['onSuccess'] = (
  response: any,
  uploadFile: any
) => {
  // 测试模式用二进制图片地址模式
  imageUrl.value = URL.createObjectURL(uploadFile.raw!)
  // 正式使用时请使用Response，如
  // imageUrl.value = response.data.url
  emit('update:modelValue', imageUrl.value)
}

const onBeforeUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('图片格式错误!')
    return false
  }
  if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('上传图片最大不能超过2MB!')
    return false
  }
  return true
}
</script>

<template>
  <div>
    <el-upload
      class="image-uploader"
      action="/api/upload/image"
      :show-file-list="false"
      :on-success="onSuccess"
      :before-upload="onBeforeUpload"
    >
      <img v-if="imageUrl && imageUrl !== ''" :src="imageUrl" class="image" />
      <el-icon v-else class="image-uploader-icon">
        <Plus />
      </el-icon>
    </el-upload>
  </div>
</template>

<style lang="scss" scoped></style>
