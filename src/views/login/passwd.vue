<script setup lang="ts">
import { ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { useRouter } from 'vue-router'
import settings from '@/settings'
import logo from '@/assets/images/logo.png'

const router = useRouter()

const step = ref(0)

const loginData: any = ref({
  password: '',
  cpassword: '',
  mobile: '',
  vcode: '',
  rember: true
})

const mobileRef = ref()
const mobileRules = {
  mobile: [{ required: true, message: '请输入手机号码', trigger: 'blur' }],
  vcode: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
}

const passwdRef = ref()

const validatePasswd = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入确认密码'))
  } else if (value !== loginData.value.password) {
    callback(new Error('两次输入的密码不一致'))
  } else {
    callback()
  }
}

const passwdRules = {
  password: [{ required: true, message: '请输入新密码', trigger: 'blur' }],
  cpassword: [{ validator: validatePasswd, trigger: 'blur' }]
}

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

const onStep = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid: any, fields: any) => {
    if (valid) {
      // 异步验证手机号码获取token
      if (step.value === 0) {
        step.value += 1
        // 携带token重置密码
      } else if (step.value === 1) {
        step.value += 1
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
    <div style="width: 720px; padding-top: 50px">
      <el-steps :active="step" align-center>
        <el-step title="安全验证">
          <template #icon>
            <el-icon size="24px"><i class="ri-smartphone-line"></i></el-icon>
          </template>
        </el-step>
        <el-step title="重置密码">
          <template #icon>
            <el-icon size="24px"><i class="ri-lock-password-line"></i></el-icon>
          </template>
        </el-step>
        <el-step title="完成设置">
          <template #icon>
            <el-icon size="24px">
              <i class="ri-checkbox-circle-line"></i>
            </el-icon>
          </template>
        </el-step>
      </el-steps>
    </div>
    <div class="login-form">
      <el-form
        v-if="step === 0"
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
        <el-form-item label="" style="padding-top: 40px">
          <el-button
            type="primary"
            style="width: 100%"
            @click="onStep(mobileRef)"
          >
            下一步
          </el-button>
        </el-form-item>
      </el-form>
      <el-form
        v-if="step === 1"
        ref="passwdRef"
        :model="loginData"
        :rules="passwdRules"
      >
        <el-form-item label="" prop="password">
          <el-input v-model="loginData.password" placeholder="新密码" clearable>
            <template #prefix>
              <el-icon><i class="ri-lock-password-line"></i></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="" prop="cpassword">
          <el-input
            v-model="loginData.cpassword"
            placeholder="确认密码"
            clearable
          >
            <template #prefix>
              <el-icon><i class="ri-lock-password-line"></i></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="" style="padding-top: 40px">
          <el-button
            type="primary"
            style="width: 100%"
            @click="onStep(passwdRef)"
          >
            下一步
          </el-button>
        </el-form-item>
      </el-form>
      <div v-if="step === 2" class="success-box">
        <div>
          <el-icon size="52px" color="var(--el-color-success)">
            <i class="ri-checkbox-circle-fill"></i>
          </el-icon>
        </div>
        <div class="mt">重新设置密码成功！</div>
        <div style="padding-top: 40px; width: 100%">
          <el-button
            style="width: 100%"
            @click="
              () => {
                router.push('/login')
              }
            "
          >
            返回登录
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-form {
  padding-top: 30px;
}
.success-box {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  font-size: 13.5px;
  width: 280px;
}
</style>
