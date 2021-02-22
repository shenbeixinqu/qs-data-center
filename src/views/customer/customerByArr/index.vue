
<template>
  <div class='customerArr'>
    <el-tabs type="border-card">
  <el-tab-pane>
    <span slot="label"><i class="el-icon-date"></i> 次重要</span>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="姓名" prop="name" width="100px"> </el-table-column>
      <el-table-column label="客户来源" prop="source" width="150px"> </el-table-column>
      <el-table-column label="国家" prop="country" width="150px"> </el-table-column>
      <el-table-column label="城市" prop="address" width="180px"> </el-table-column>
      <el-table-column label="性别" prop="sex" width="100px"> </el-table-column>
      <el-table-column label="职位" prop="position" width="180px"> </el-table-column>
      <el-table-column label="公司" prop="company" width="180px">  </el-table-column>
      <el-table-column label="电话" prop="mobile" width="180px">  </el-table-column>
      <el-table-column label="微信" prop="wechat" width="180px">  </el-table-column>
      <el-table-column label="备注" prop="remarks" mix-width="200px">  </el-table-column>
    </el-table>
  </el-tab-pane>
  <el-tab-pane><span slot="label"><i class="el-icon-date"></i> 双11意向客户</span>暂无</el-tab-pane>
  <el-tab-pane label="分组3">暂无</el-tab-pane>
  <el-tab-pane label="分组4">暂无</el-tab-pane>
</el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
        tableData: [
        {
          name: "莉莉",
          source: "抖音",
          position: "普通工职员",
          country: "中国",
          address: "上海市普陀区真北路",
          company: "华为",
          sex: "男",
          remarks: '次重要客户,有采购意向',
          mobile: '18855763542',
          wechat: '18855763542'
        },
        {
          name: "赵四",
          source: "微信小程序",
          position: "采购经理",
          country: "美国",
          address: "上海市普陀区真北路",
          company: "麒盛科技",
          sex: "男",
          remarks: '次重要客户，暂无采购意向',
          mobile: '18855763542',
           wechat: '18855763542'
        },
        {
          name: "王五",
          source: "微信小程序",
          position: "采购经理",
          country: "美国",
          address: "上海市普陀区真北路",
          company: "麒盛科技",
          sex: "男",
          remarks: '次重要客户，暂无采购意向',
          mobile: '18855763542',
           wechat: '18855763542'
        },
        {
          name: "白齐花",
          source: "微信小程序",
          position: "采购经理",
          country: "新加披",
          address: "上海市普陀区真北路",
          company: "麒盛科技",
          sex: "男",
          remarks: '次重要客户，暂无采购意向',
          mobile: '18855763542',
           wechat: '18855763542'
        },
        {
          name: "陈毅",
          source: "微信小程序",
          position: "采购经理",
          country: "美国",
          address: "上海市普陀区真北路",
          company: "麒盛科技",
          sex: "男",
          remarks: '次重要客户，暂无采购意向',
          mobile: '18855763542',
           wechat: '18855763542'
        },
        {
          name: "陆涛",
          source: "微信小程序",
          position: "采购经理",
          country: "加拿大",
          address: "上海市普陀区真北路",
          company: "麒盛科技",
          sex: "男",
          remarks: '次重要客户，暂无采购意向',
          mobile: '18855763542',
           wechat: '18855763542'
        },
        {
          name: "陆涛",
          source: "微信小程序",
          position: "采购经理",
          country: "加拿大",
          address: "上海市普陀区真北路",
          company: "麒盛科技",
          sex: "男",
          remarks: '次重要客户，暂无采购意向',
          mobile: '18855763542',
           wechat: '18855763542'
        },
        {
          name: "陆涛",
          source: "微信小程序",
          position: "采购经理",
          country: "加拿大",
          address: "上海市普陀区真北路",
          company: "麒盛科技",
          sex: "男",
          remarks: '次重要客户，暂无采购意向',
          mobile: '18855763542',
           wechat: '18855763542'
        },
        {
          name: "陆涛",
          source: "微信小程序",
          position: "采购经理",
          country: "加拿大",
          address: "上海市普陀区真北路",
          company: "麒盛科技",
          sex: "男",
          remarks: '次重要客户，暂无采购意向',
          mobile: '18855763542',
           wechat: '18855763542'
        }
      ]
    }
  },
  methods: {
   
  },
};
</script>

<style  scoped>

</style>