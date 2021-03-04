<!--  -->
<template>
  <div>
      <el-row class="headNav">
      <el-col :lg="2"> 总条数： [ {{ this.total }} ] </el-col>

      <el-col :lg="4" offset="8">
        <el-input placeholder="评论内容" @keyup.enter.native="handleFilter"  v-model="listQuery.content"/>
      </el-col>

      <el-col :lg="2" >
        <el-input placeholder="品牌"  v-model="listQuery.referenceName" @keyup.enter.native="handleFilter" />
      </el-col>
     
      <el-col :lg="2">
       <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        搜索
       </el-button>
      </el-col>
      
      <el-col :lg="2">
       <el-button  type="primary" icon="el-icon-upload" @click="uploadData">
        本地导入
       </el-button>
      </el-col>

      <el-col :lg="2">
       <el-button  type="success" icon="el-icon-download" @click="downloadData">
        导出
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
      
      <el-table-column label="头像"  width="60px" >
        <template slot-scope="props">
             <el-avatar :src=" 'http://' +  props.row.userImageUrl"></el-avatar>
        </template>
       
      </el-table-column>
      <el-table-column label="昵称" prop="nickname" width="120px">  </el-table-column>
      <el-table-column label="评论" prop="content" width="500px"> </el-table-column>
      
      <el-table-column label="购买规格"  mix-width="500px">
        <template slot-scope="props">
          <el-link :href= " 'https://search.jd.com/Search?keyword=' + props.row.referenceName " target="_blank" class="jdlink">
            {{ props.row.referenceName }}
          </el-link> 
        </template>
         
      </el-table-column>
      <el-table-column label="创建时间" prop="referenceTime" width="180px"> </el-table-column>
      <el-table-column label="操作"  width="150px" >
        <template slot-scope="props">
          <div>
            <el-button type="danger" size="mini" @click='deletejingdong(props.row.id)'>删除</el-button>
          </div>
        </template>
        
      </el-table-column>
    </el-table>


    <el-row class="pagination">
        <pagination @pagination="getList" :total="total" :page.sync="listQuery.currentPage" :limit.sync="listQuery.pageSize" />
    </el-row>

  </div>

  
</template>

<script>
 import Pagination from '@/components/Pagination'
 import { fetchList } from '@/api/jingdong'
 import { deleteData } from '@/api/jingdong'
 import { exportData } from './downloadData/download'
export default {
  data () {
    return {
        list:[],
        userImageUrl: 'http://storage.360buyimg.com/i.imageUpload/6a645f3434626263356330323935313331353430323836333534363338_sma.jpg',
        listQuery:{
          content: '',
          creationTime: '',
          currentPage: '',
          pageSize: '',
          referenceName: ''
        },
        total: 0,
        listLoading: true,
        jdLink: ''
    };
  },

  components: {
    Pagination
  },

  computed: {},


  methods: {
      getList() {
        fetchList(this.listQuery).then(response => {
          this.list = response.data.data.items
          this.total = response.data.data.totalNum
          this.jdLink = 'https://search.jd.com/Search?keyword=' + this.list.referenceName
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
    },
    deletejingdong(id){
      const aid = id
      deleteData(aid).then(
        ()=>{
         this.$notify({
          title: '成功',
          message: '删除成功！',
          type: 'success',
          duration: 500
        });
        this.getList()
        }
      ).catch(
        res =>{
          console.log(res)
        }
      )

    },
    downloadData(){
      this.listLoading = true
      exportData()
      setTimeout(() => {
                this.listLoading = false
      }, 10.50 * 1000)
    },
    uploadData(){
       this.$router.push('/data/publicData/importJDData')
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
  margin-top: 5px;
  margin-left: 20px;
  margin-bottom: 2px;
  text-align: center;
  height: 30px;
  line-height: 50px;
}
.jdlink{
  color:#409EFF;
}
</style>