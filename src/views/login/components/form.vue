<template>
  <div class="login-form">
    <h3 style="text-align: center;" class="login_title">数据内部平台 (内部版本 v1.0)</h3>
    <el-form ref="ruleForm" :model="ruleForm" status-icon :rules="rules" class="demo-ruleForm">
      <el-form-item prop="username">
        <el-input v-model="ruleForm.username" type="text" placeholder="账号" prefix-icon="el-icon-message" @keyup.enter.native="submitForm('ruleForm')" />

      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="ruleForm.password" type="password" autocomplete="off" placeholder="密码" prefix-icon="el-icon-key" @keyup.enter.native="submitForm('ruleForm')" />
      </el-form-item>

      <el-form-item>
        <el-button type="text" style="color: #000;" @click="vistorLogin">游客访问</el-button>
        <el-button type="text" style="color: #000; float: right;"  @click="findPassword">忘记密码</el-button>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" style="width: 100%; height: 50px;" :loading="loading" class="login_btn">
          <el-link icon="el-icon-s-promotion" :underline="false" style="color: white; " @click="submitForm('ruleForm')">登录</el-link>
          <el-link style="color: white; text-decoration: none; margin: 0 10px;"> / </el-link>
          <el-link icon="el-icon-edit-outline" :underline="false" style="color: white;"  @click="handleRegister">注册</el-link>
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { touristLogin } from '@/api/user'
export default {
  name: 'LoginForm',
  data: function() {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [{
          required: true,
          message: '用户名不能为空',
          trigger: 'blur'
        }
        ],
        password: [{
          required: true,
          message: '密码不能为空',
          trigger: 'blur'
        }]

      },
      loading: false,
      redirect: undefined
    }
  },
  watch: {
    $route: {
      // 加载登录页后，直接获取，登录页地址栏的的redirect参数，赋值给this.redirect
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true  // 加载时立即执行handler
    }
  },
  methods: {

    // 登录操作
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true
          // TODO: 图形滑块验证码start------------------
          this.$store.dispatch('user/login', this.ruleForm).then(() => {
            this.$message({
              type: 'success',
              message: '登录成功，欢迎使用!'
            })
            this.$router.push({ path: this.redirect || '/' })
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },

    // 游客访问
    vistorLogin(){
      touristLogin().then(
        res=>{
           const vistor = {
            username: res.data.username,
            password: res.data.password
          }
          this.$store.dispatch('user/login', vistor).then(() => {
            this.$message({
              type: 'success',
              message: '登录成功，您现在使用的是游客身份登录， 想要访问更多功能请注册!'
            })
            this.$router.push({ path: this.redirect || '/' })
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        }
      )
    },
    // 登录
    handleRegister(){
      let routeUrl = this.$router.resolve({
                path: "/register"
      });
           window.open(routeUrl.href, '_blank');
    },
    // 找回密码
    findPassword(){
      let routeUrl = this.$router.resolve({
                path: "/reset_pwd"
      });
           window.open(routeUrl.href, '_blank');
    }
  }

}
</script>

<style scoped="scoped">
	.login-form{
		width: 500px;
		height: 63vh;
		border: 1px solid #9e9e9e;
		border-left: 1.5px solid #9e9e9e;
		margin: -70px 10px 100px 60vw;
		box-shadow: 10px 10px 10px #9e9e9e;
    border-radius: 20px;
    background-color: rgba(255, 255,255, );
	}
	.login_title{
		/* color: #fafafa; */
		margin-top: 150px;
		margin-bottom: 20px;
	}
	.demo-ruleForm{
		padding: 25px 80px;
	}

  /* 给button做一个线性渐变 */
	.login_btn{
		border: none;
		background: linear-gradient(120deg,#448aff,#80cbc4,#448aff);
		background-size: 200%;
		transition: all 0.5s;
		box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
	}
  /* 当鼠标移入时，通过移动背景色，来达到变色效果 */
	.login_btn:hover {
		background-position: right;
  }


  @media (max-width: 768px) {
  .login-form{
    margin: -100px auto;
  }

}


  @media (max-width: 1024px) {
  .login-form{
    margin: -80px auto;
  }
}

  
</style>
