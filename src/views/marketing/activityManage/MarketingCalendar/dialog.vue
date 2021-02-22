<template>
  <div class="activityDialog">
    <el-divider>添加新的营销活动</el-divider>
    <el-form
      ref="elForm"
      :model="formData"
      :rules="rules"
      size="medium"
      label-width="100px"
      label-position="left"
      class="activityForm"
    >
      <el-form-item label="活动标题" prop="activityTitle">
        <el-input
          v-model="formData.activityTitle"
          placeholder="请输入活动标题"
          clearable
          prefix-icon="el-icon-s-flag"
          :style="{ width: '100%' }"
        ></el-input>
      </el-form-item>
      <el-form-item label="详细描述" prop="description">
        <el-input
          v-model="formData.description"
          type="textarea"
          placeholder="请输入详细描述"
          :autosize="{ minRows: 3, maxRows: 5 }"
          :style="{ width: '100%' }"
        ></el-input>
      </el-form-item>
      <el-form-item label="时间范围" prop="duration">
        <el-date-picker
          type="datetimerange"
          v-model="formData.duration"
          format="yyyy-MM-dd HH:mm"
          value-format="yyyy-MM-dd HH:mm"
          :style="{ width: '100%' }"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          range-separator="至"
          clearable
        ></el-date-picker>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data() {
    return {
      formData: {
        activityTitle: undefined,
        description: undefined,
        duration: ["2021-01-01 08:00", "2021-01-05 18:00"],
      },
      rules: {
        activityTitle: [
          {
            required: true,
            message: "请输入活动标题",
            trigger: "blur",
          },
        ],
        description: [
          {
            required: true,
            message: "请输入详细描述",
            trigger: "blur",
          },
        ],
        duration: [
          {
            required: true,
            type: "array",
            message: "请至少选择一个日期",
            trigger: "change",
          },
        ],
      },
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    submitForm() {
      this.$refs["elForm"].validate((valid) => {
        if (!valid) return;
        // TODO 提交表单
      });
    },
    resetForm() {
      this.$refs["elForm"].resetFields();
    },
  },
};
</script>
<style scoped>
.activityDialog {
  margin: 0px 40px;
}
.activityForm {
  margin-top: 50px;
}
</style>
