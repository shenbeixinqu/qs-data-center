<!--  -->
<template>
  <div >
    <el-row>
      <el-col class="leftBanner">
        <div class ='logo'></div>
        <div class='banner'>
        </div>
      </el-col>
      <el-col :lg="6" class="registerForm" :offset="12">
        <register-form></register-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import registerForm  from './components/form'

export default {
  data () {
    return {
    };
  },

  components: {
    registerForm
  },

  computed: {},



  methods: {}
}

</script>
<style scoped>
.registerForm{
  margin-top: 240px;
}
.logo{
  position: fixed;
  top: 0px;
  left: 0px;
  height: 50px;
  width: 90px;
  background: url(../../assets/logo.png) no-repeat;
  background-size: 90px 50px;
  z-index: 2;
  margin-left: 70px;
  margin-top: 40px;
}
.banner{
  background-image: url(../../assets/register/registerBn.jpg);
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  width: 700px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: 1;
}
.r-form{
  position:absolute;
  padding-bottom: 100px;
  top: 100px;
  width: 100%;
}


@media (max-width: 1024px) {
  .leftBanner{
    display: none;
    
  }
  .registerForm{
    margin: 100px auto;
  }
}
</style>