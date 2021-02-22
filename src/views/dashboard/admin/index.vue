<template>
  <div class="dashboard-editor-container">
    <el-row style="background:#fff;padding:16px 16px 10px;margin-bottom:32px;">
      <el-col :xs="24" :sm="24" :lg="2">
        <img :src="avatar" width="100px"/>
      </el-col>
      
      <el-col :xs="24" :sm="24" :lg="4">
       <div>
         <h3> hi,{{name}}</h3>
        欢迎使用麒盛科技数据管理系统
       </div>
      </el-col>
      
    </el-row>

    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="chart-wrapper" >
          <quick-start></quick-start>
        </div>
      </el-col>

      <el-col :xs="24" :sm="24" :lg="12">
        <div class="chart-wrapper" >
          <product-notify></product-notify>
        </div>
      </el-col>
    </el-row>
    
    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <raddar-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <pie-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <bar-chart />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import GithubCorner from '@/components/GithubCorner'
import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'
import TransactionTable from './components/TransactionTable'
import TodoList from './components/TodoList'
import BoxCard from './components/BoxCard'
import QuickStart from './components/QuickStart'
import ProductNotify from './components/ProductNotify'
import { mapGetters } from 'vuex'

export default {
  name: 'DashboardAdmin',
  components: {
    GithubCorner,
    PanelGroup,
    LineChart,
    RaddarChart,
    PieChart,
    BarChart,
    TransactionTable,
    TodoList,
    BoxCard,
    QuickStart,
    ProductNotify
  },
  data() {
    return {
      lineChartData: lineChartData.newVisitis
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'avatar'
    ])
  }

}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;
}

 .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
}
  


@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
