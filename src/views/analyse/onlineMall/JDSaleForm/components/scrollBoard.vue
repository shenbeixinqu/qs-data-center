<template>
  <div id="scroll-board">
    <dv-border-box-1>
      <div id="content">
        <dv-scroll-board :config="config" @click="showDetails" />
        <br />
        <sider-bar @transmitYear = 'handleResive' ></sider-bar>
      </div>
    </dv-border-box-1>
  </div>
</template>

<script>
import siderBar from "./siderbar";
import { getAnnualsales } from "@/api/jingdong";
export default {
  name: "ScrollBoard",
  data() {
    return {
      config: {
        header: ["品牌", "销售量", "好评率", "销售额"],
        data: [ ],
        index: true,
        columnWidth: [150, 270, 300, 300],
        align: ["center"],
        rowNum: 9,
        headerBGC: "#1981f6",
        headerHeight: 45,
        oddRowBGC: "rgba(0, 44, 81, 0.8)",
        evenRowBGC: "rgba(10, 29, 50, 0.8)",
        waitTime: 2000,
        indexHeader: "序号",
      },
      year: 2019
    };
  },
  components: {
    siderBar,
  },
  created() {
    this.getData();
  },
  methods: {

    getData(){
      // const { config } = this
      getAnnualsales(this.year).then(res => {

        // // console.log(res)
        var acceptArr = res.data;
        var finalArr = [];
        for (var i = 0; i < acceptArr.length; i++) {
          var tempArr = [];
          tempArr.push(acceptArr[i].brand);
          tempArr.push(acceptArr[i].annualsales.toString() + " 张");
          tempArr.push(acceptArr[i].praiserate.toString() + " %");
          tempArr.push('￥ ' + acceptArr[i].annualturnover.toLocaleString()); 
          finalArr.push(tempArr);
        }

        this.config.data = finalArr

        console.log(this.config.data)

        // 
        this.config = { ...this.config }

      });
    },


    showDetails(e) {
      console.log(e.ceil);
    },

    handleResive(value){
      this.year = value
      // console.log(this.year)
      this.getData()
    }
  },
};
</script>

<style  scoped>
#scroll-board {
  box-sizing: border-box;
  width: 80%;
  height: 80%;
  margin: 20px auto;
}

#content {
  margin: 0px 40px;
  padding: 60px 20px;
  height: 90%;
}
</style>
