<!--  -->
<template>
  <div class="quiteStart">
    <el-row><strong>快速开始</strong></el-row>
    <el-row style="margin-top:20px">
     
      <el-col :lg="4" :sm="4" :xs="4">
        <el-avatar
          shape="square"
          :size="100"
          :fit="fill"
          :src="url"
        ></el-avatar>
      </el-col>
      <el-col :lg="4" :sm="4" :xs="4">
        <el-avatar
          shape="square"
          :size="100"
          :fit="fill"
          :src="url"
        ></el-avatar>
      </el-col>
      <el-col :lg="4" :sm="4" :xs="4">
        <el-avatar
          shape="square"
          :size="100"
          :fit="fill"
          :src="url"
        ></el-avatar>
      </el-col>
      <el-col :lg="4" :sm="4" :xs="4">
        <el-avatar
          shape="square"
          :size="100"
          :fit="fill"
          :src="url"
        ></el-avatar>
      </el-col>
      <el-col :lg="4" :sm="4" :xs="4">
        <el-avatar
          shape="square"
          :size="100"
          :fit="fill"
          :src="url"
        ></el-avatar>
      </el-col>
      <el-col :lg="4" :sm="4" :xs="4">
        <el-avatar
          shape="square"
          :size="100"
          :fit="fill"
          :src="url"
        ></el-avatar>
      </el-col>
    </el-row>

    <el-row>
      <el-col :lg="4"  :sm="4" :xs="4">创建客户旅程</el-col>
      <el-col :lg="4" :sm="4" :xs="4">抖音群发</el-col>
      <el-col :lg="4" :sm="4" :xs="4">公众号群发</el-col>
      <el-col :lg="4" :sm="4" :xs="4">短信触达</el-col>
      <el-col :lg="4" :sm="4" :xs="4">邮件触达</el-col>
      <el-col :lg="4" :sm="4" :xs="4">邮件触达</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    };
  },

  components: {},

  computed: {},

  methods: {},
};
</script>
<style lang='scss' scoped>
.quiteStart {
  padding: 30px;
  height: 300px;
}
</style>