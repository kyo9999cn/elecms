<script setup lang="ts">
import { ref } from 'vue'
import http from '@/utils/http'
import { EleForm } from '@/components'

const settingData: any = ref([])

// 获取配置项Tabs设置数组及字段默认值
const onGetSetting = () => {
  http
    .request({
      url: 'settings'
    })
    .then((res: any) => {
      settingData.value = res.data
    })
}
onGetSetting()
</script>

<template>
  <div>
    <el-tabs>
      <el-tab-pane
        v-for="item in settingData"
        :key="item.id"
        :label="item.label"
        :index="item.name"
      >
        <div class="ele-tab-body">
          <ele-form
            v-model="item.data"
            :fields="item.fields"
            submit-btn="保存设置"
          ></ele-form>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style lang="scss" scoped>
.ele-tab-body {
  padding: 30px 0px;
}
</style>
