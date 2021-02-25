<template>
  <div class="ageMap" ref="ageMap" @dblclick="toBigMap">
    <el-divider>微博用户年龄统计饼图</el-divider>
    <ve-pie :data="chartData" class="ageVe-pie" :settings="chartSettings" >
    </ve-pie>
  </div>
</template>

<script>
import { getWeiboAge } from '@/api/weibo'
export default {
  data() {
    this.chartSettings = {
        radius: 130,
        offsetY: 200
    }
    return {
      chartData: {
        columns: ["年龄段", "用户数"],
        rows: [],
      },

      bfData: []
    };
  },
  created(){
    // 获取数据
    this.getData()
  },
  methods:{
    getData(){
      getWeiboAge().then(
        res =>{
          // console.log(res)
          this.bfData = res.data
          // console.log(this.bfData)
          // this.bfData.pop()
          for(var i= 0; i <this.bfData.length;i++){
            this.chartData.rows.push({
              "年龄段": this.bfData[i].eag_layer + '岁',
              "用户数": this.bfData[i].emps
            })
          }
        }
      )
    },
    toBigMap(){
      // TODO: 跳转
     this.$router.push('/analyse/weiboAnalyse/weiboAgeMap')
    }
  }
};
</script>

<style  scoped>
.ageMap{
  width: 100%;
}

</style>