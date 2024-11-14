<script setup lang="ts">
import { EleChart } from '@/components'
import { getLang } from '@/locales'
import { useAppStore } from '@/store/modules/app'

const appStore = useAppStore()
</script>

<template>
  <div class="ele-board-main">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="statistic-card">
          <div class="icon icon-primary">
            <el-icon><i class="ri-user-fill" /></el-icon>
          </div>
          <el-statistic
            :title="
              getLang('dashboard.dayUsers', '日活跃用户数量', appStore.lang)
            "
            :value="268500"
          />
        </div>
      </el-col>
      <el-col :span="6">
        <div class="statistic-card">
          <div class="icon icon-success">
            <el-icon><i class="ri-group-fill" /></el-icon>
          </div>
          <el-statistic
            :title="
              getLang('dashboard.monthUsers', '月活跃用户数量', appStore.lang)
            "
            :value="693700"
          />
        </div>
      </el-col>
      <el-col :span="6">
        <div class="statistic-card">
          <div class="icon icon-warning">
            <el-icon><i class="ri-line-chart-fill" /></el-icon>
          </div>
          <el-statistic
            :title="getLang('dashboard.upv', '网站UV/PV', appStore.lang)"
            :value="12989"
          >
            <template #suffix>/23.2k</template>
          </el-statistic>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="statistic-card">
          <div class="icon icon-danger">
            <el-icon><i class="ri-global-fill" /></el-icon>
          </div>
          <el-statistic
            :title="getLang('dashboard.ips', '网站IP数', appStore.lang)"
            :value="13162"
          />
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="16">
        <ele-chart
          :title="getLang('dashboard.trends', '访问趋势', appStore.lang)"
          :legend="{ data: ['UV', 'PV', 'IP'], textStyle: { fontSize: 10 } }"
          :x-axis="{
            data: ['11/06', '11/07', '11/08', '11/09', '11/10', '11/11']
          }"
          :series="[
            {
              name: 'UV',
              type: 'line',
              data: [1203, 2332, 1870, 2763, 3212, 2323]
            },
            {
              name: 'PV',
              type: 'line',
              data: [3203, 4332, 2970, 4563, 6212, 5323]
            },
            {
              name: 'IP',
              type: 'line',
              data: [1103, 2232, 1670, 2163, 2612, 1923]
            }
          ]"
        />
      </el-col>
      <el-col :span="8">
        <ele-chart
          :title="getLang('dashboard.source', '访问来源', appStore.lang)"
          :legend="{ itemWidth: 6, itemHeight: 6, icon: 'circle' }"
          :x-axis="{
            show: false
          }"
          :y-axis="{
            show: false
          }"
          :series="[
            {
              name: '访问来源',
              type: 'pie',
              radius: ['40%', '70%'],
              data: [
                { name: '搜索引擎', value: 1998 },
                { name: '直接访问', value: 2998 },
                { name: '百度', value: 998 },
                { name: '360搜索', value: 998 }
              ]
            }
          ]"
        />
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <ele-chart
          :title="getLang('dashboard.browsers', '浏览器Top10', appStore.lang)"
          :grid="{
            top: '0%',
            left: '30%'
          }"
          :tooltip="{}"
          :x-axis="{
            interval: 2000
          }"
          :y-axis="{
            data: [
              'Chrome',
              'Edge',
              'Firefox',
              'Safari',
              'Opera',
              '360浏览器',
              '其他'
            ]
          }"
          :series="[
            {
              name: '浏览量',
              type: 'bar',
              barMaxWidth: 12,
              data: [1203, 2332, 1870, 2763, 3212, 2323, 198]
            }
          ]"
        />
      </el-col>
      <el-col :span="8">
        <ele-chart
          :title="
            getLang('dashboard.keywords', '搜索关键词Top10', appStore.lang)
          "
          :grid="{
            top: '0%',
            left: '30%'
          }"
          :tooltip="{}"
          :x-axis="{
            interval: 2000
          }"
          :y-axis="{
            data: ['小白Fate', 'Elecms Pro', 'Elecms', '小猫钓鱼', '小花猫']
          }"
          :series="[
            {
              name: '浏览量',
              type: 'bar',
              barMaxWidth: 12,
              data: [1203, 2332, 1870, 2763, 3212, 2323]
            }
          ]"
        />
      </el-col>
      <el-col :span="8">
        <ele-chart
          :title="getLang('dashboard.terminal', '终端分布', appStore.lang)"
          :legend="{ itemWidth: 6, itemHeight: 6, icon: 'circle' }"
          :x-axis="{
            show: false
          }"
          :y-axis="{
            show: false
          }"
          :series="[
            {
              name: '终端',
              type: 'pie',
              radius: ['40%', '70%'],
              data: [
                { name: '移动设备', value: 1998 },
                { name: 'PC电脑', value: 2998 },
                { name: '蜘蛛爬虫', value: 998 },
                { name: '其他', value: 98 }
              ]
            }
          ]"
        />
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.ele-board-main {
  padding: 10px 0px;
}
.ele-board-main .el-row + .el-row {
  margin-top: 20px;
}
</style>
