<template>
<div>
  <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%; text-aglin: center"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="50">
    </el-table-column>
    <el-table-column
      label="日期"
      width="220">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="title"
      label="活动名称"
      width="120">
    </el-table-column>
    <el-table-column
      prop="description"
      label="活动详情"
      show-overflow-tooltip>
    </el-table-column>
  </el-table>
  <div style="margin-top: 20px">
    <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
    <el-button @click="toggleSelection()">取消选择</el-button>
  </div>

</div>

</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2020-12-25 ~ 2020-12-30',
          title: '微信发布新品',
          description: '微信公众号编辑推文发布新品,引导公司内部人员参与大卖会'
        },{
          date: '2020-12-25 ~ 2020-12-30',
          title: '微信发布新品',
          description: '微信公众号编辑推文发布新品,引导公司内部人员参与大卖会'
        },{
          date: '2020-12-25 ~ 2020-12-30',
          title: '微信发布新品',
          description: '微信公众号编辑推文发布新品,引导公司内部人员参与大卖会'
        }],
        multipleSelection: []
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>