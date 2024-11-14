<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { FormPage } from '@/layout'
import { passwordForm } from '@/schame/user'
import { getLang } from '@/locales'
import { useAppStore } from '@/store/modules/app'
import { savePassword } from '@/api/auth'

const appStore = useAppStore()

const pageRef = ref()
const formData: any = ref({})
const formRules = passwordForm.rules

const validateOldPass = (rule: any, value: any, callback: any) => {
  if (value === formData.value.opassword) {
    callback(
      new Error(
        getLang(
          'message.password.match',
          '新密码不能与原密码相同',
          appStore.lang
        )
      )
    )
  } else {
    return callback()
  }
}

const validatePass = (rule: any, value: any, callback: any) => {
  if (value !== formData.value.password) {
    callback(
      new Error(
        getLang(
          'message.password.noMatch',
          '两次输入的密码不一致',
          appStore.lang
        )
      )
    )
  } else {
    return callback()
  }
}

formRules.password.push({
  validator: validateOldPass,
  trigger: 'blur'
})
formRules.cpassword.push({
  validator: validatePass,
  trigger: 'blur'
})

const onSubmit = (value: any) => {
  savePassword(value)
    .then(() => {
      ElMessage.success(
        getLang('message.password.saveSuccess', '修改密码成功', appStore.lang)
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
    :fields="passwordForm.fields"
    :rules="formRules"
    form-label-width="180px"
    submit-btn="actions.saveChanges"
    @submit="onSubmit"
  ></form-page>
</template>

<style lang="scss" scoped></style>
