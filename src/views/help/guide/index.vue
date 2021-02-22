// TODO: 完善引导页
<template>
  <div class="app-container">
    <div class="tip">
      指导页可以帮助您快速的熟练的使用本网站，或者访问
      <el-link
        icon="el-icon-s-management"
        type="primary"
        :underline="false"
        href="http://willwong.gitee.io/qs_manual"
        target="_blank"
        >《用户手册》</el-link
      >
      了解更多。

      <el-button
        icon="el-icon-question"
        type="primary"
        @click.prevent.stop="guide"
      >
        打开引导
      </el-button>
      <br />
    </div>
  </div>
</template>

<script>
import Driver from "driver.js"; // import driver.js
import "driver.js/dist/driver.min.css"; // import driver.js css
import steps from "./steps";

export default {
  name: "Guide",
  data() {
    return {
      driver: null,
    };
  },
  mounted() {
    this.driver = new Driver({
      animate: false,
    });
  },
  methods: {
    guide() {
      this.driver.defineSteps(steps);
      this.driver.start();
    },
  },
};
</script>

<style scoped>
.tip {
  margin-top: 10px;
  width: 100%;
  height: 100px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  line-height: 100px;
  text-align: center;
}
</style>