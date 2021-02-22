<template>
  <div style="margin: 20px;">

    <!-- 筛选 -->
    <div class="filter-container">

      <!-- 搜索输入框 -->
      <el-input style="width: 200px;" class="filter-item" placeholder="关注热点" v-model="listQuery.follow"
        @keyup.enter.native="handleFilter" />

      <!-- // 搜索筛选条件 -->
      <el-select clearable style="width: 90px" class="filter-item" placeholder="性别" v-model="listQuery.sex">
        <el-option v-for="item in sex" :key="item.key" :value="item" :label="item" />
      </el-select>

      <!-- // 搜索筛选条件 -->
      <el-select clearable style="width: 90px" class="filter-item">
        <el-option :key="item" :label="item" :value="item" v-for="item in selects" />
      </el-select>

      <!-- // 搜索筛选条件 -->
      <el-select clearable style="width: 90px" class="filter-item">
        <el-option :key="item" :label="item" :value="item" v-for="item in selects" />
      </el-select>

      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        搜索
      </el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">
        增加
      </el-button>
      <el-button type="primary" icon="el-icon-upload">
        本地上传
      </el-button>

      <el-button :loading="downloadLoading" class="filter-item" type="success" icon="el-icon-download" @click="handleDownload">
        导出
      </el-button>

    </div>
    <br>
    <el-table v-loading="listLoading" border style="width: 100%;" :data="list">

      <!-- 序号列 -->
      <el-table-column prop="id" sortable="custom" align="center" width="80" label="序号">
        <template slot-scope="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>

      <!-- 昵称列 -->
      <el-table-column width="120px" align="center" label="昵称">
        <template slot-scope="{row}">
          <span>{{ row.name }}</span>
        </template>
      </el-table-column>

      <!-- 年龄列 -->
      <el-table-column width="80px" align="center" label="年龄">
        <template slot-scope="{row}">
          <span>{{ row.age }}</span>
        </template>
      </el-table-column>

      <!-- 城市列 -->
      <el-table-column width="200px" align="center" label="城市">
        <template slot-scope="{row}">
          <span>{{ row.city }}</span>
        </template>
      </el-table-column>

      <!-- 性别列 -->
      <el-table-column width="80px" align="center" label="性别">
        <template slot-scope="{row}">
          <span>{{ row.sex }}</span>
        </template>
      </el-table-column>

      <!-- 账号信息列 -->
      <el-table-column width="275px" align="center" label="账号信息">
        <template slot-scope="{row}">
          <span>{{ row.accountInfo }}</span>
        </template>
      </el-table-column>

      <!-- 关注热点列 -->
      <el-table-column mix-width="300px" align="center" label="关注热点">
        <template slot-scope="{row}">
          <span>{{ row.follow}}</span>
        </template>
      </el-table-column>

      <!-- 操作列 -->
      <el-table-column label="操作" align="center" width="230" class-name="small-padding fixed-width">
        <template>
          <el-button type="primary" size="mini"  @click='handleMore(row,$index)'>
            详情
          </el-button>
          <el-button size="mini" type="danger" @click="handleDelete(row,$index)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- Pagination 组件主要是基于 Element 的 el-pagination进行了二次封装，并拓展了自动滚动的功能。 -->
    <pagination @pagination="getList" v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" />

    <!-- 添加dialog -->
    <el-dialog :visible.sync="dialogFormVisible">
      <el-form ref="dataForm" :model="temp" label-position="left" label-width="70px" style="width: 400px; margin-left:50px;">
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
          <el-select v-model="temp.status" class="filter-item" placeholder="省份">
            <el-option v-for="item in sex" :key="item" :label="item" :value="item" />
          </el-select>
          <el-select v-model="temp.status" class="filter-item" placeholder="城市">
            <el-option v-for="item in sex" :key="item" :label="item" :value="item" />
          </el-select>
        </el-form-item>

        <el-form-item label="账号信息">
          <el-input v-model="temp.remark" :autosize="{ minRows: 3, maxRows: 4}" type="textarea" placeholder="请输入" />
        </el-form-item>

        <el-form-item label="关注热点">
          <el-input v-model="temp.remark" :autosize="{ minRows: 3, maxRows: 4}" type="textarea" placeholder="请输入" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          取消
        </el-button>
        <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">
          确定
        </el-button>
      </div>
    </el-dialog>
  </div>

</template>

<script>
  import Pagination from '@/components/Pagination'
  import {
    fetchList
  } from '@/api/weibo'
  import axios from 'axios'

  export default {
    components: {
      Pagination
    },
    data() {
      return {
        list: [],
        listLoading: true,
        listQuery: {
          page: 1,
          limit: 10,
          follow: '',
          sex:''
        },
        sex: ['男', '女'],
        selects:['select1','select2','select3'],
        downloadLoading: false,
        total: 0,
        temp: {
          id: undefined,
          name: '',
          age: '',
          city: '',
          sex: '',
          accountInfo: '',
          follow: ''
        },
        dialogStatus: '',
        dialogFormVisible: false
      }
    },
    created() {
      this.getList()
    },
    methods: {
      getList() {
        this.listLoading = true
        fetchList(this.listQuery).then(response => {
          this.list = response.data.items
          this.total = response.data.total
          // 模拟请求时间
          setTimeout(() => {
            this.listLoading = false
          }, 0.5 * 1000)
        })
      },
      handleFilter() {
        this.listQuery.page = 1
        this.getList()
      },
      handleDownload() {
        this.downloadLoading = true
        import('@/vendor/Export2Excel').then(excel => {
          const tHeader = ['昵称', '年龄', '城市', '性别', '账号信息', '关注热点'] // 表头
          const filterVal = ['name', 'age', 'city', 'sex', 'accountInfo', 'follow']
          const data = this.formatJson(filterVal)
          excel.export_json_to_excel({
            header: tHeader,
            data,
            filename: '微博数据概览'
          })
          this.downloadLoading = false
        })
      },
      formatJson(filterVal) {
        return this.list.map(v => filterVal.map(j => {
          return v[j]
        }))
      },

      resetTemp() {
        this.temp = {
          id: undefined,
          name: '',
          age: '',
          city: '',
          sex: '',
          accountInfo: '',
          follow: ''
        }
      },

      // 添加数据
      handleCreate() {

        this.resetTemp()
        this.dialogStatus = 'create'
        this.dialogFormVisible = true
        this.$nextTick(() => {
          this.$refs['dataForm'].clearValidate()
        })
      },

      handleMore(row, index){
        alert('cc')
      },

      handleDelete(row, index) {
        this.$notify({
          title: '成功',
          message: '删除成功！',
          type: 'success',
          duration: 2000
        })
        this.list.splice(index, 1)
      }
    }
  }
</script>

<style>

</style>
