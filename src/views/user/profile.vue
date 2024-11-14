<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { FormPage } from '@/layout'
import { profileForm } from '@/schame/user'
import { useUserStore } from '@/store/modules/user'
import { saveUserInfo } from '@/api/auth'
import { getLang } from '@/locales'
import { useAppStore } from '@/store/modules/app'

const appStore = useAppStore()

const pageRef = ref()
const { userinfo } = useUserStore()

const formData: any = ref(userinfo)

const onSubmit = (value: any) => {
  saveUserInfo(value)
    .then(() => {
      ElMessage.success(
        getLang(
          'message.profile.saveSuccess',
          '保存用户信息成功',
          appStore.lang
        )
      )
    })
    .catch(() => {
      console.log('fail')
    })
}
</script>

<template>
  <form-page
    ref="pageRef"
    v-model="formData"
    :fields="profileForm.fields"
    form-label-width="180px"
    submit-btn="actions.saveChanges"
    @submit="onSubmit"
  ></form-page>
</template>

<style lang="scss" scoped></style>
