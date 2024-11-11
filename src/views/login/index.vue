<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage, type FormInstance } from 'element-plus'
import { useRoute, useRouter } from 'vue-router'
import settings from '@/settings'
import logo from '@/assets/images/logo.png'
import { useUserStore } from '@/store/modules/user'

const router = useRouter()
const route = useRoute()

const loginData: any = ref({
  type: 'account', // account | mobile
  username: '',
  password: '',
  mobile: '',
  vcode: '',
  rember: true
})
const accountRef = ref()
const mobileRef = ref()

const accountRules = {
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
}

const mobileRules = {
  mobile: [{ required: true, message: '请输入手机号码', trigger: 'blur' }],
  vcode: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
}

const { login, mobileLogin } = useUserStore()

// 重发验证码时间
const reSendTime = ref(60)
const sendSms = ref(false)

// 获取验证码
const onGetVcode = () => {
  // 正式使用时使用异步发送短信验证码
  // 发送成功后执行重发计时器
  sendSms.value = true
  const timer = setInterval(() => {
    if (reSendTime.value > 1) {
      reSendTime.value -= 1
    } else {
      reSendTime.value = 60
      clearInterval(timer)
      sendSms.value = false
    }
  }, 1000)
}

// 找回密码
const onGoPasswd = () => {
  router.push('/passwd')
}

// 登录
const onLogin = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid: any, fields: any) => {
    if (valid) {
      // 用户名密码登录
      if (loginData.value.type === 'account') {
        login(loginData.value.username, loginData.value.password)
          .then(() => {
            const redirect = route.query.redirect as string
            router.push(redirect ?? '/')
          })
          .catch((e: any) => {
            ElMessage.error(e.message ?? '登录失败')
          })
        // 手机号码登录
      } else if (loginData.value.type === 'mobile') {
        mobileLogin(loginData.value.mobile, loginData.value.vcode)
          .then(() => {
            const redirect = route.query.redirect as string
            router.push(redirect ?? '/')
          })
          .catch((e: any) => {
            ElMessage.error(e.message ?? '登录失败')
          })
      }
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<template>
  <div
    :class="`login-body${settings.loginTheme && settings.loginTheme === 'dark' ? ' dark' : ''}`"
  >
    <div class="login-header">
      <img :src="logo" class="ele-logo" />
      <h2>{{ settings.applicationName }}</h2>
    </div>
    <div class="login-info">{{ settings.applicationDescription }}</div>
    <div class="login-form">
      <div class="login-tabs">
        <el-tabs v-model="loginData.type" stretch>
          <el-tab-pane label="账户密码登录" name="account"></el-tab-pane>
          <el-tab-pane label="手机号登录" name="mobile"></el-tab-pane>
        </el-tabs>
      </div>
      <el-form
        v-if="loginData.type === 'account'"
        ref="accountRef"
        :model="loginData"
        :rules="accountRules"
      >
        <el-form-item label="" prop="username">
          <el-input
            v-model="loginData.username"
            placeholder="用户名：admin"
            clearable
          >
            <template #prefix>
              <el-icon><i class="ri-user-line"></i></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input
            v-model="loginData.password"
            placeholder="密码：admin"
            clearable
          >
            <template #prefix>
              <el-icon><i class="ri-lock-line"></i></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="">
          <div class="login-flex-item">
            <div>
              <el-checkbox v-model="loginData.rember" label="自动登录" />
            </div>
            <div>
              <el-link type="primary" @click="onGoPasswd">忘记密码?</el-link>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="">
          <el-button
            type="primary"
            style="width: 100%"
            @click="onLogin(accountRef)"
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>
      <el-form
        v-if="loginData.type === 'mobile'"
        ref="mobileRef"
        :model="loginData"
        :rules="mobileRules"
      >
        <el-form-item label="" prop="mobile">
          <el-input v-model="loginData.mobile" placeholder="手机号" clearable>
            <template #prefix>
              <el-icon><i class="ri-smartphone-line"></i></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="" prop="vcode">
          <div class="login-flex-item">
            <el-input
              v-model="loginData.vcode"
              placeholder="验证码"
              style="width: 55%"
              clearable
            >
              <template #prefix>
                <el-icon><i class="ri-lock-line"></i></el-icon>
              </template>
            </el-input>
            <el-button v-if="!sendSms" style="width: 40%" @click="onGetVcode">
              获取验证码
            </el-button>
            <el-button v-else style="width: 40%" disabled>
              剩余{{ reSendTime }}秒
            </el-button>
          </div>
        </el-form-item>
        <el-form-item label="">
          <div class="login-flex-item">
            <el-checkbox v-model="loginData.rember" label="自动登录" />
            <el-link type="primary" @click="onGoPasswd">忘记密码?</el-link>
          </div>
        </el-form-item>
        <el-form-item label="">
          <el-button
            type="primary"
            style="width: 100%"
            @click="onLogin(mobileRef)"
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="login-footer">
      <div>{{ settings.copyright }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
