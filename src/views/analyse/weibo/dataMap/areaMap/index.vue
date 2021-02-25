<template>
<div>
  <el-divider>微博用户地域分布图</el-divider>
  <ve-map :data="chartData" :settings="chartSettings" height ="1200px" ></ve-map>
</div>
 
</template>

<script>
import { getWeiboArea } from '@/api/weibo'

  export default {
    data () {
      this.chartSettings = {
        position: 'china',
        dimension: '位置'
      }
      return {

        chartData: {
          columns: ['位置', '用户数', '购买数', '比例'],
          rows: []
        },
        bfData: []
      }
    },
    created(){
      this.getData()
    },
    methods:{
      getData(){
        getWeiboArea().then(res =>{
          // console.log(res)
          this.bfData = res.data
          // console.log(this.bfData)
          // this.bfData.pop()
          for(var i= 0; i < this.bfData.length; i++){
            this.chartData.rows.push({
              "位置": this.bfData[i].area,
              "用户数": this.bfData[i].num
            })
          }
          console.log(this.chartData.rows)
        })
      }
    }
  }
</script>