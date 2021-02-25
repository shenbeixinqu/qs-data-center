<template>
  <div class="ageMap">
    <el-divider>微博用户年龄统计饼图</el-divider>
    <ve-pie :data="chartData" class="ageVe-pie" :settings="chartSettings" height ="800px">
    </ve-pie>
  </div>
</template>

<script>
import { getWeiboAge } from '@/api/weibo'
export default {
  data() {
    this.chartSettings = {
        radius: 170,
        offsetY: 300
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
    // notify
    this.$notify.info({
          title: '消息',
          message: '打印图表时，请右键保存到本地再打印！',
          offset: 120,
          duration: 1000
    });
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
          this.bfData.pop()
          for(var i= 0; i <this.bfData.length;i++){
            this.chartData.rows.push({
              "年龄段": this.bfData[i].eag_layer + '岁',
              "用户数": this.bfData[i].emps
            })
          }
        }
      )
    }
  }
};
</script>

<style  scoped>
.ageMap{
  width: 100%;
  height: 100%;
  margin-top: 5rem;
}

.ageVe-pie{
  height: 900px;
}

</style>