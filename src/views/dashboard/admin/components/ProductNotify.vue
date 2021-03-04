<!--  -->

// TODO: 设置高度为定长，当文字多时，采用 。。。 显示
<template>
  <div>
    <el-row class="productNotify">
      <span><strong>产品通知</strong></span>
      <span style="float: right">
         <!-- TODO: 修改href 为 用户手册的 ip -->
        <el-link type="primary" href="http://willwong.gitee.io/qs_manual" target='_blank'>查看更多</el-link>
      </span>
      <div class="content">
        <el-col :lg="2">
            <el-avatar icon="el-icon-top"></el-avatar>
        </el-col> 
        <el-col :lg="22">
          <div >
              {{notice}}
          </div>
        </el-col>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notice:"v1.1 该版本于10月20日上线，支持接入一方数据源，展现一方会员属性和定义的行为事件，并支持对会员群体营销；客户旅程加入抖音判断节点，支持抖音渠道的事件触发能力等，新增功能：营销-新增触达渠道，功能优化：营销-短信&邮件推送支持直接导入发送人群，营销-邮件模版优化，详情请点击查看更多"
    };
  },

  components: {},

  computed: {},

 

  methods: {},
};
</script>
<style lang='scss' scoped>
.productNotify{
  padding: 30px;
  height: 300px;
}
.content{
  margin-top: 20px;
  font-size: 16px;
  line-height: 2em;
}
</style>