<template>
  <div>
    <!-- 日历  -->
    <el-calendar>
      <template slot="dateCell" slot-scope="{ data }">
        <div slot="reference" @click="calendarOnClick(data)">
          <p
            :class="data.isSelected ? 'is-selected' : ''"
          >
            {{ data.day.split("-").slice(1).join("-") }}
            {{ data.isSelected ? "✔️" : "" }}
          </p>
        </div>
      </template>
    </el-calendar>

    <!-- TODO:// 这里放一个活动表格 -->
    <el-divider>营销活动列表</el-divider>
    <activity-form></activity-form>

    <!-- 添加活动 dialog  -->

    <el-drawer
      :before-close="cancelForm"
      :visible.sync="dialog"
      direction="rtl"
      custom-class="demo-drawer"
      ref="drawer"
      :close-on-press-escape="true"
    >
      <!-- <div class="demo-drawer__content">
        <el-form :model="form">
          <el-form-item label="活动名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="活动区域" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div class="demo-drawer__footer">
          <el-button @click="cancelForm">取 消</el-button>
          <el-button
            type="primary"
            @click="$refs.drawer.closeDrawer()"
            :loading="loading"
            >{{ loading ? "提交中 ..." : "确 定" }}</el-button
          >
        </div>
      </div> -->

      <activity-dialog></activity-dialog>

    </el-drawer>
  </div>
</template>

<script>
import activityDialog from './dialog'
import activityForm from './form'
export default {
  components:{
    activityDialog,
    activityForm
  },
  data() {
    return {
      dialog: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  methods: {
    calendarOnClick(e) {
      this.dialog = true;
    },
    handle() {
      alert("cc");
    },
    handleClose(done) {
      if (this.loading) {
        return;
      }
      this.$confirm("确定要提交表单吗？")
        .then((_) => {
          this.loading = true;
          this.timer = setTimeout(() => {
            done();
            // 动画关闭需要一定的时间
            setTimeout(() => {
              this.loading = false;
            }, 400);
          }, 2000);
        })
        .catch((_) => {});
    },
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    },
  },
};
</script>
<style scoped>
.is-selected {
  color: #1989fa;
  
}
</style>
