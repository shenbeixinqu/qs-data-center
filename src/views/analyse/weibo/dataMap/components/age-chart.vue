<template>
<div class="levelMap" @dblclick="toBigMap">
    <el-divider>微博用户会员等级条形图</el-divider>
    <ve-histogram :data="chartData" :settings="chartSettings" ></ve-histogram>
</div>
</template>

<script>
import { getWeiboMembershipLevel } from '@/api/weibo'

  export default {
    data () {
      this.chartSettings = {
        // showLine: ['下单用户']
        intervl: 0
      }
      return {
        chartData: {
          columns: ['等级', '用户数'],
          rows: []
        }
      }
    },
    created(){
      this.getData()
    },
    methods:{
      getData(){
        getWeiboMembershipLevel().then(
        res =>{
          // console.log(res)
          this.bfData = res.data
          console.log(this.bfData)
          this.bfData.pop()
          this.bfData.splice(6,1)
          for(var i= 0; i <this.bfData.length;i++){
            this.chartData.rows.push({
              "等级": this.bfData[i].membershiplevel,
              "用户数": this.bfData[i].num
            })
          }
        }
      )
      },
      toBigMap(){
      // TODO: 跳转
     this.$router.push('/analyse/weiboAnalyse/membershipLevelMap')
    }
    }
  }
</script>

<style scoped>
/* .levelMap{
  width: 70vw;
  margin: 10vh auto;
} */
</style>