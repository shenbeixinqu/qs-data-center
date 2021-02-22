<template>
<div class="dataMap">
  <el-row class="Chart">
     <el-col :xs="24" :sm="24" :lg="12">
       <div class="chart-wrapper">
         <el-divider>下单与访问可用 - 折线图</el-divider>
         <age-chart></age-chart>
       </div>
       
       </el-col>
     <el-col :xs="24" :sm="24" :lg="12">
       <div class="chart-wrapper">
          <el-divider>XXXXX - 饼图</el-divider>
          <pie-chart></pie-chart>
       </div>
       </el-col>
  </el-row>

   <el-row class="Chart">
     <el-col :xs="24" :sm="24" :lg="12">
       <div class="chart-wrapper">
         <el-divider>XXXXX - 时间分布图</el-divider>
         <sleep-time-chart></sleep-time-chart>
       </div>
      </el-col>

      <el-col :xs="24" :sm="24" :lg="12">
       <div class="chart-wrapper">
          <el-divider>XXXXX - 雷达图</el-divider>
         <radar-chart></radar-chart>
       </div>
      </el-col>
  </el-row>

 
  <!-- <el-col :xs="24" :sm="24" :lg="24"><sex-chart></sex-chart></el-col> -->
  <!-- <el-col :xs="24" :sm="24" :lg="24"><person-geograph-echart ></person-geograph-echart></el-col> -->
</div>
    
      
</template>

<script>
  import personGeographEchart from './components/person-geographical-chart.vue'
  import ageChart from './components/age-chart'
  import pieChart from './components/pie-chart'
  import sexChart from './components/sex-chart'
  import sleepTimeChart from './components/sleep-time-chart'
  import radarChart from './components/radar-chart'
  export default {
      components: {
        'person-geograph-echart' : personGeographEchart,
        'age-chart':ageChart,
        'pie-chart':pieChart,
        'sex-chart':sexChart,
        'sleep-time-chart': sleepTimeChart,
        'radar-chart' :radarChart
      },
      created(){
        this.$notify.info({
          title: '消息',
          message: '打印图表时，请右键保存到本地再打印！',
          offset: 90
    }); 
      }
  }
</script>


<style scoped>

.dataMap{
  background-color: rgb(240, 242, 245);
}
.chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 10px;
    margin-top: 10px;
    margin-left: 20px;
}


@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>