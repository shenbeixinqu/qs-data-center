<!--  -->
<template>
  <div>
    这是个人中心，可以设置密码，头像，等信息

    <!-- 操作日志 -->

    <el-divider> 操作日志 </el-divider>
    <div class="block">
      <el-timeline>
        <el-timeline-item timestamp="2020/5/12" placement="top">
          <el-card>
            <h4>修改密码</h4>
            <p>王小虎 提交于 2020/5/12 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2020/6/3" placement="top">
          <el-card>
            <h4>创建新活动</h4>
            <p>王小虎 提交于 2020/6/3 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2020/7/2" placement="top">
          <el-card>
            <h4>导出文件</h4>
            <p>王小虎 提交于 2020/7/2 20:46</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {}
}
</script>
