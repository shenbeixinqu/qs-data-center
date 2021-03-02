<template>
  <div id="scroll-board">
    <dv-border-box-1 >
      <div id="content">
        <dv-scroll-board :config="config"  @click="showDetails" />
        <br>
        <sider-bar></sider-bar>
      </div>
    </dv-border-box-1>
  </div>
</template>

<script>
import siderBar from './siderbar'
import { getAnnualsales } from '@/api/jingdong'
export default {
  name: 'ScrollBoard',
  data () {
    return {
      config: {
        header: ['品牌', '销售量', '好评率', '销售额'],
        data: [  
          ['索菲利尔1', '11111', '100%', 'xxxxxxx'],
          ['索菲利尔2', '11111', '100%', 'xxxxxxx'],
          ['索菲利尔3', '11111', '100%', 'xxxxxxx'],
          ['索菲利尔', '11111', '100%', 'xxxxxxx'],
          ['索菲利尔', '11111', '100%', 'xxxxxxx'],
          ['索菲利尔', '11111', '100%', 'xxxxxxx'],
          ['索菲利尔', '11111', '100%', 'xxxxxxx'],
          ['索菲利尔', '11111', '100%', 'xxxxxxx'],
          ['索菲利尔', '11111', '100%', 'xxxxxxx'],
          ['索菲利尔', '11111', '100%', 'xxxxxxx'],
          ['索菲利尔', '11111', '100%', 'xxxxxxx']
        ],
        index: true,
        columnWidth: [150, 270, 300],
        align: ['center'],
        rowNum: 9,
        headerBGC: '#1981f6',
        headerHeight: 45,
        oddRowBGC: 'rgba(0, 44, 81, 0.8)',
        evenRowBGC: 'rgba(10, 29, 50, 0.8)',
        waitTime: 2000,
        indexHeader: '序号'
      },
      tempArr:[]
    }
  },
  components:{
    siderBar
  },
  mounted(){
    this.getData()
  },
  methods:{
    getData(){
      getAnnualsales().then(
        res=>{
          console.log(res.data)
          // this.config.data = res.data
          this.tempArr = res.data
          console.log(this.config.data)
        }
      )
    },
    showDetails(e){
      console.log(e.ceil)
    }
  }

}
</script>

<style  scoped>
#scroll-board {
  box-sizing: border-box;
  width: 80%;
  height: 80%;
  margin: 20px auto;
}

#content{
  margin: 0px 40px;
  padding: 60px 20px;
  height: 90%;
}

</style>
