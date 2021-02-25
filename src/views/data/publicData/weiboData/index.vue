<template>
  <div style="margin: 20px; ">
    <div style="float:left; height:40px; line-height: 40px">总条数： [ {{total}} ]</div>
    <!-- 筛选 -->
    <div class="filter-container" style="float:right;  margin-bottom: 10px; height:40px">
      <!-- 搜索输入框 -->
      <el-input
        style="width: 200px"
        class="filter-item"
        placeholder="关注热点"
        v-model="listQuery.blogtext"
        @keyup.enter.native="handleFilter"
      />
      <!-- // 搜索筛选条件 -->
      <el-select
        clearable
        style="width: 90px"
        class="filter-item"
        placeholder="性别"
        v-model="listQuery.sex"
      >
        <el-option
          v-for="item in sex"
          :key="item.key"
          :value="item"
          :label="item"
        />
      </el-select>
      &nbsp;
      <el-button
        class="filter-item"
        type="primary"
        icon="el-icon-search"
        @click="handleFilter"
      >
        搜索
      </el-button>
  
      &nbsp;
      
      <el-button type="primary" icon="el-icon-upload" @click='handleImport'> 本地上传 </el-button>

      <el-button
        :loading="downloadLoading"
        class="filter-item"
        type="success"
        icon="el-icon-download"
        @click="handleDownload"
      >
        导出
      </el-button>

      <el-button
        :loading="downloadLoading"
        class="filter-item"
        type="info"
        icon="el-icon-s-data"
        @click="turnMap"
        
      >
        查看图表
      </el-button>
    </div>
    <br />
    <el-table v-loading="listLoading" border style="width: 100%" :data="list">
      <el-table-column
        label="序号"
        type="index"
        width="60"
        style="text-align: center"
      >
      </el-table-column>
      <!-- 序号列 -->
      <el-table-column prop="id" align="center" width="200" label="昵称">
        <template slot-scope="{ row }">
          <el-link type="primary" :href="row.userpage" target="_blank"
            ><span>{{ row.nickname }}</span></el-link
          >
        </template>
      </el-table-column>

      <!-- 昵称列 -->
      <el-table-column width="180px" align="center" label="微博认证">
        <template slot-scope="{ row }">
          <span>{{
            row.certification == null ? "--" : row.certification
          }}</span>
        </template>
      </el-table-column>

      <!-- 年龄列 -->
      <el-table-column width="80px" align="center" label="年龄" class="ageColumn">
        <template slot-scope="{ row }">
          <div @click="toageMap(row.age)">
              <el-link><span>{{ row.age == null ? "-" : row.age }}</span></el-link>
          </div>
        </template>
      </el-table-column>

      <!-- 城市列 -->
      <el-table-column width="170px" align="center" label="城市">
        <template slot-scope="{ row }">
          <div @click="toareaMap(row.area)">
              <el-link><span>{{ row.area }}</span></el-link>
          </div>
        </template>
      </el-table-column>

      <!-- 性别列 -->
      <el-table-column width="80px" align="center" label="性别">
        <template slot-scope="{ row }">
          <span>{{ row.sex }}</span>
        </template>
      </el-table-column>

      <!-- 账号信息列 -->
      <el-table-column width="285px" align="center" label="账号信息">
        <template slot-scope="{ row }">
          <span>{{
            row.introduction == null ? "----" : row.introduction
          }}</span>
        </template>
      </el-table-column>

      <!-- 微博正文 -->
      <el-table-column mix-width="300px" align="center" label="微博正文">
        <template slot-scope="{ row }">
          <el-link type="primary" :href="row.bloglink" target="_blank">
            <span>{{ row.blogtext }}</span>
          </el-link>
        </template>
      </el-table-column>

      <el-table-column label="操作" align="center" width="180" class-name="small-padding fixed-width" >
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="left">
          <div class="moreMsg">
             <el-divider><strong>基本信息</strong></el-divider>
              <p><strong>昵称:</strong> <el-link type="primary" :href="scope.row.userpage" target="_blank"><span>{{ scope.row.nickname }}</span></el-link></p>
               <p><strong>年龄:</strong><span> {{ scope.row.age == null ? "-" : scope.row.age }} </span></p>
              <p><strong>城市：</strong><span>{{ scope.row.area }}</span></p>
             <p><strong>性别：</strong><span>{{ scope.row.sex }}</span></p>
              <p><strong>话题：</strong> <span>{{ scope.row.topicname }}</span></p>
            <p><strong>会员：</strong> <el-link @click="toMembershipLevelMap"> <span>{{ scope.row.membershiplevel }}</span></el-link></p>
            <p> <strong>粉丝数：</strong> <span>{{ scope.row.numberoffans }}</span></p>
            <p> <strong>关注数：</strong> <span>{{ scope.row.numberofweibo }}</span></p>

             <el-divider><strong>详细信息</strong></el-divider>
             <strong>账号信息：</strong> <p> <span>{{scope.row.introduction == null ? "----" : scope.row.introduction}}</span></p>
             <strong>微博正文：</strong>  <p><el-link type="primary" :href="scope.row.bloglink" target="_blank"><span>{{ scope.row.blogtext }}</span></el-link></p>
          </div>
        
          <el-button type="primary" size="mini"  slot="reference" class='morebtn'>
            详情
          </el-button>
        </el-popover>
        &nbsp;
         <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">
            删除
          </el-button>
      </template>
    </el-table-column>
    </el-table>
    
     <el-drawer
        title="我是标题"
        :visible.sync="moredrawer"
        :with-header="false"
         id = 'drawer'
        >
      <el-divider>详情</el-divider>

      </el-drawer>     

    <el-row class="pagination">
      <pagination
        @pagination="getList"
        :total="total"
        :page.sync="listQuery.currentPage"
        :limit.sync="listQuery.pageSize"
      />
    </el-row>
    <!--  v-show="total>0"  -->
    <!-- Pagination 组件主要是基于 Element 的 el-pagination进行了二次封装，并拓展了自动滚动的功能。 -->

    <!-- 添加dialog -->
    <el-dialog :visible.sync="dialogFormVisible" id = 'dialogForm'>
      <el-form
        ref="dataForm"
        :model="temp"
        label-position="left"
        label-width="70px"
        style="width: 400px; margin-left: 50px"
      >
        <el-form-item label="昵称" prop="name">
          <el-input v-model="temp.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="temp.age"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="title">
          <el-radio v-model="temp.sex" label="man">男</el-radio>
          <el-radio v-model="temp.sex" label="woman">女</el-radio>
        </el-form-item>
        <el-form-item label="城市">
          <el-select
            v-model="temp.status"
            class="filter-item"
            placeholder="省份"
          >
            <el-option
              v-for="item in sex"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
          <el-select
            v-model="temp.status"
            class="filter-item"
            placeholder="城市"
          >
            <el-option
              v-for="item in sex"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
        </el-form-item>

        <el-form-item label="账号信息">
          <el-input
            v-model="temp.remark"
            :autosize="{ minRows: 3, maxRows: 4 }"
            type="textarea"
            placeholder="请输入"
          />
        </el-form-item>

        <el-form-item label="关注热点">
          <el-input
            v-model="temp.remark"
            :autosize="{ minRows: 3, maxRows: 4 }"
            type="textarea"
            placeholder="请输入"
          />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false"> 取消 </el-button>
        <el-button
          type="primary"
          @click="dialogStatus === 'create' ? createData() : updateData()"
        >
          确定
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination";
import { fetchList } from "@/api/weibo";
import { deleteData } from "@/api/weibo";
import { exportData } from './downloadData/download'
import axios from "axios";

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      list: [],
      listLoading: true,
      listQuery: {
        currentPage: 1,
        pageSize: 10,
        blogtext: "",
        sex: "",
      },
      sex: ["男", "女"],
      selects: ["select1", "select2", "select3"],
      downloadLoading: false,
      total: 0,
      temp: {
        id: undefined,
        name: "",
        age: "",
        city: "",
        sex: "",
        accountInfo: "",
        blogtext: "",
      },
      userpage: "",
      dialogStatus: "",
      dialogFormVisible: false,
      moredrawer: false
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.listLoading = true;
      fetchList(this.listQuery).then((response) => {
        this.list = response.data.data.items;
        this.total = response.data.data.totalNum;
        console.log(this.list);
        // 模拟请求时间
        setTimeout(() => {
          this.listLoading = false;
        }, 0.25 * 1000);
      });
    },
    handleFilter() {
      this.listQuery.currentPage = 1;
      this.getList();
    },
    handleDownload() {
      exportData()
    },
    formatJson(filterVal) {
      return this.list.map((v) =>
        filterVal.map((j) => {
          return v[j];
        })
      );
    },

    resetTemp() {
      this.temp = {
        id: undefined,
        name: "",
        age: "",
        city: "",
        sex: "",
        accountInfo: "",
        blogtext: "",
      };
    },
    // 删除
    handleDelete(id) {
    const cid = id;
    deleteData(cid).then(
      ()=>{
         this.$notify({
          title: '成功',
          message: '删除成功！',
          type: 'success',
          duration: 500
        });
        this.getList()
      }
    )
    },

    turnMap(){
       this.$router.push('/analyse/weiboAnalyse/dataMap')
    },
     //  年龄分布饼图
    toageMap(val){
      this.$router.push('/analyse/weiboAnalyse/weiboAgeMap')
    },

    //   地域分布图
    toareaMap(val){
      this.$router.push('/analyse/weiboAnalyse/weiboAreaMap')
    },
    
    // 微博会员饼图
    toMembershipLevelMap(){
      this.$router.push('/analyse/weiboAnalyse/membershipLevelMap')
    },
    
    // 导入本地数据
    handleImport(){
       this.$router.push('/data/publicData/importData')
    }
  },
};
</script>

<style scoped>
.moreMsg{
  width: 600px;
}


</style>
