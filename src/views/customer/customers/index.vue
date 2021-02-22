<template>
  <div>
    <el-row class="headNav">
      <el-col :lg="2"> 全部客户： [ {{ customerSum }} ] </el-col>
      <el-col :lg="4" offset="13">
        <el-input placeholder="全局搜索" @keyup.enter.native="handleFilter" />
      </el-col>

      <el-col :lg="2"  >
        <el-select clearable placeholder="批量操作">
          <el-option
            v-for="item in sex"
            :key="item.key"
            :value="item"
            :label="item"
          />
        </el-select>
      </el-col>

      <el-col :lg="2">
        <el-button
          :loading="downloadLoading"
          class="filter-item"
          type="info"
          icon="el-icon-menu"
          @click="turnMap"
        >
          分组查看
        </el-button>
      </el-col>
    </el-row>

    <el-divider><el-link type="primary"><i class="el-icon-refresh"></i></el-link></el-divider>

    <el-table :data="tableData" style="width: 100%">
          
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="姓名">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="客户来源">
              <span>{{ props.row.source }}</span>
            </el-form-item>
            <el-form-item label="城市">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="性别">
              <span>{{ props.row.sex }}</span>
            </el-form-item>
            <el-form-item label="职位">
              <span>{{ props.row.position }}</span>
            </el-form-item>
            <el-form-item label="国家">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="公司">
              <span>{{ props.row.company }}</span>
            </el-form-item>
             <el-form-item label="备注">
              <span>{{ props.row.remarks }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
    
    <el-table-column
      type="index"
      width="30">
    </el-table-column>
      
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
  </div>
</template>



<script>
export default {
  data() {
    return {
      customerSum: 100,
      tableData: [
        {
          name: "莉莉",
          source: "抖音",
          position: "普通工职员",
          country: "中国",
          address: "上海市普陀区真北路",
          company: "华为",
          sex: "男",
          remarks: '重要客户,有采购意向',
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
      ],
    };
  },
  methods: {
    handleFilter() {},
    turnMap() {
      this.$router.push("/customer/customerByArr");
    },
  },
};
</script>

<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.headNav {
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
  text-align: center;
  height: 50px;
  line-height: 50px;

}
</style>