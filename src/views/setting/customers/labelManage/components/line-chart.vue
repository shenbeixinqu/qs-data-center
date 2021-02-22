<template>
  <div>
    <el-row>
      <el-col :span="12" ><div style="border: #000000 0.0625rem soli;"><ve-line :data="chartData"></ve-line></div></el-col>
    </el-row>
  </div>

</template>

<script>
  export default {
    data: function () {
      return {
        chartData: {
           title: {
                          text: '第一个 ECharts 实例'
                      },
                      tooltip: {},
                      legend: {
                          data:['销量']
                      },
                      xAxis: {
                          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                      },
                      yAxis: {},
                      series: [{
                          name: '销量',
                          type: 'bar',
                          data: [5, 20, 36, 10, 10, 20]
                      }]
        }
      }
    }
  }
</script>
