<template>
  <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        showLine: ['下单用户']
      }
      return {
        chartData: {
          columns: ['日期', '访问用户', '下单用户'],
          rows: [
            { '日期': '第一季度', '访问用户': 1393, '下单用户': 1093 },
            { '日期': '第二季度', '访问用户': 3530, '下单用户': 3230 },
            { '日期': '第三季度', '访问用户': 2923, '下单用户': 2623 },
            { '日期': '第四季度', '访问用户': 1723, '下单用户': 1423 }
          ]
        }
      }
    }
  }
</script>