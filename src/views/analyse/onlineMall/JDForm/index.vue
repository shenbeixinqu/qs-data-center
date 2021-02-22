<!--  -->
<template>
  <div>
      <el-row class="headNav">
      <el-col :lg="2"> 总条数： [ {{ this.total }} ] </el-col>
      <el-col :lg="4" offset="10">
        <el-input placeholder="评论内容" @keyup.enter.native="handleFilter"  v-model="listQuery.content"/>
      </el-col>

      <!-- <el-col :lg="2" >
        <el-input placeholder="日期"  v-model="listQuery.creationTime" @keyup.enter.native="handleFilter" />
      </el-col>
         -->
      <el-col :lg="2" >
        <el-input placeholder="品牌"  v-model="listQuery.referenceName" @keyup.enter.native="handleFilter" />
      </el-col>
     
      <!-- <el-col :lg="2"  >
        <el-select clearable placeholder="批量操作">
          <el-option
            v-for="item in sex"
            :key="item.key"
            :value="item"
            :label="item"
          />
        </el-select>
      </el-col> -->

      <el-col :lg="2">
       <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        搜索
       </el-button>
      </el-col>
      

      <el-col :lg="2">
        <el-button
          :loading="downloadLoading"
          class="filter-item"
          type="info"
          icon="el-icon-menu"
          @click="turnMap"
        >
          全球销售图
        </el-button>
      </el-col>
    </el-row>

    <el-divider><el-link type="primary"><i class="el-icon-refresh" @click="refresh"></i></el-link></el-divider>

    <el-table :data="list" style="width: 100%" v-loading="listLoading">
          
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="姓名">
              <span>{{ props.row.nickname }}</span>
            </el-form-item>
            <el-form-item label="客户来源">
              <span> 京东 </span>
            </el-form-item>
            <el-form-item label="城市">
              <span>北京</span>
            </el-form-item>
            <el-form-item label="性别">
              <span>男</span>
            </el-form-item>
            <el-form-item label="职位">
              <span>采购经理</span>
            </el-form-item>
            <el-form-item label="国家">
              <span>中国</span>
            </el-form-item>
            <el-form-item label="产品详情">
              <span>{{ props.row.productSize }}</span>
            </el-form-item>
             <el-form-item label="产品套餐">
              <span>{{ props.row.productColor }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
    
      <el-table-column
        type="index"
        width="50"
        label="序号"
        >
      </el-table-column>
      
      <el-table-column label="头像"  width="50px" >
        <el-avatar src="storage.360buyimg.com/i.imageUpload/6a645f3434626263356330323935313331353430323836333534363338_sma.jpg"></el-avatar>
      </el-table-column>
      <el-table-column label="昵称" prop="nickname" width="120px">  </el-table-column>
      <el-table-column label="评论" prop="content" width="700px"> </el-table-column>
      
      <el-table-column label="购买规格" prop="referenceName" mix-width="500px"> </el-table-column>
      <el-table-column label="创建时间" prop="referenceTime" width="180px"> </el-table-column>
    </el-table>


    <el-row class="pagination">
        <pagination @pagination="getList" :total="total" :page.sync="listQuery.currentPage" :limit.sync="listQuery.pageSize" />
    </el-row>

  </div>

  
</template>

<script>
 import Pagination from '@/components/Pagination'
 import {
    fetchList
  } from '@/api/jingdong'
export default {
  data () {
    return {
        list:[],
        userImageUrl: 'storage.360buyimg.com/i.imageUpload/6a645f3434626263356330323935313331353430323836333534363338_sma.jpg',
        listQuery:{
          content: '',
          creationTime: '',
          currentPage: '',
          pageSize: '',
          referenceName: ''
        },
        total: 0,
        listLoading: true
    };
  },

  components: {
    Pagination
  },

  computed: {},

  mounted: {
      
  },
  methods: {
      getList() {
        fetchList(this.listQuery).then(response => {
          this.list = response.data.data.items
          this.total = response.data.data.totalNum
          console.log(this.list)
          setTimeout(() => {
            this.listLoading = false
          }, 0.50 * 1000)
        }).catch(
          res =>{
             setTimeout(() => {
            this.listLoading = false
          }, 0.50 * 1000)
          this.list  = []
          }
        )
      },
      turnMap() {
      this.$router.push("/analyse/onlineMallAnalyse/JD");
    },
    handleFilter(){
      this.listLoading = true
      this.getList();
    },
    
    refresh(){
      this.listQuery.content = ''
      this.listQuery.referenceName = ''
       this.listLoading = true
         setTimeout(() => {
            this.listLoading = false
          }, 0.50 * 1000)

      this.getList()
    }

  },
  created(){
      this.getList()
  }
}

</script>
<style lang='scss' scoped>
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