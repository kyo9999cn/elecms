<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import * as echarts from 'echarts'
import { useAppStore } from '@/store/modules/app'
import { getLang } from '@/locales'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  height: {
    type: Number,
    default: 320
  },
  tooltip: {
    type: Object || undefined,
    default: undefined
  },
  legend: {
    type: Object || undefined,
    default: undefined
  },
  grid: {
    type: Object || undefined,
    default: undefined
  },
  xAxis: {
    type: Object,
    default: () => {
      return {}
    }
  },
  yAxis: {
    type: Object,
    default: () => {
      return {}
    }
  },
  series: {
    type: Array,
    default: () => []
  },
  color: {
    type: Array,
    default: () => [
      '#409EFF',
      '#67C23A',
      '#E6A23C',
      '#F56C6C',
      '#73c0de',
      '#3ba272',
      '#fc8452',
      '#9a60b4',
      '#ea7ccc'
    ]
  }
})

const chartRef = ref()
const chart = ref()
const appStore = useAppStore()

const options = ref({
  title: false,
  tooltip: props.tooltip,
  legend: props.legend,
  grid: props.grid,
  xAxis: props.xAxis,
  yAxis: props.yAxis,
  series: props.series,
  color: props.color
})

const onInitChart = () => {
  chart.value = echarts.init(chartRef.value)
  chart.value.showLoading({
    text: getLang('chart.loading', '正在加载图表...', appStore.lang),
    color: '#1677ff'
  })
  setTimeout(() => {
    chart.value.setOption(options.value)
    chart.value.hideLoading()
  }, 1000)
}

onMounted(() => {
  onInitChart()
})

onUnmounted(() => {
  chart.value.dispose()
})

window.onresize = () => {
  chart.value.dispose()
  onInitChart()
}
</script>

<template>
  <div
    class="chart-box"
    :style="{
      height: `${props.height}px`
    }"
  >
    <div v-if="props.title" class="chart-title">{{ props.title }}</div>
    <div ref="chartRef" class="chart-main"></div>
  </div>
</template>

<style lang="scss" scoped>
.chart-box {
  border: 1px solid #dfdfdf;
  padding: 12px 16px 16px 16px;
  position: relative;
}
.chart-main {
  width: 100%;
  height: 100%;
}
.chart-title {
  font-weight: bolder;
  font-size: 14px;
  padding-bottom: 16px;
}
</style>
