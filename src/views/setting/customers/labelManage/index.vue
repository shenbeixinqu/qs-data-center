<template>
  <ve-liquidfill :data="chartData" :settings="chartSettings" ></ve-liquidfill>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        seriesMap: {
          '上海': {
            shape: 'rect'
          }
        }
      }
      return {
        chartData: {
          columns: ['city', 'percent'],
          rows: [{
            city: '上海',
            percent: 0.6
          }]
        }
      }
    }
  }
</script>
