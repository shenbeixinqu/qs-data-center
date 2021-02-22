<!--  -->
<template>
  <div class='resetPwdStep1'>
    
    <div class="mask">  
    <el-row>
    <el-col>
        <div class="logo">

        </div>
    </el-col>    
    </el-row>
    <el-row class="main">
      <el-col :lg="14" :offset="5">
        <el-steps :active="active" finish-status="success" align-center>
          <el-step title="填写用户名">
              
          </el-step>
          <el-step title="填写手机号">

          </el-step>
          <el-step title="填写验证码">

          </el-step>

          <el-step title="填写新密码">

          </el-step>
        </el-steps>

        <!-- <el-button style="margin-top: 12px" @click="next">下一步</el-button> -->
      </el-col>
   </el-row>

    <el-row class="form">
        <el-col :lg="4" :offset="10">
            <el-row>
                <h3>新密码：</h3> <el-input v-model="password" placeholder="密码" show-word-limit clearable
              prefix-icon='el-icon-key' show-password :style="{width: '100%'}"  @blur="outInput" ></el-input>
            </el-row>
            
            <el-row>
                <h3>确认密码：</h3>
                <el-input v-model="passwordAgain" placeholder="密码" show-word-limit clearable
              prefix-icon='el-icon-key' show-password :style="{width: '100%'}" @blur="finishInput" @keydown.enter.native="finishInput"></el-input>
            </el-row>
            
            <el-row class="commitBtn">
                 <el-button type="success" @click="next" style="width: 50%" disabled ref="commitBtn">确定</el-button>
            </el-row>
           
             <el-row class="tip">
                请妥善保管你的新密码(*´∇｀*)
            </el-row>
        </el-col> 
         
    </el-row>
    </div>
  </div>
</template>

<script>
import { resetPwd } from '@/api/user'
export default {
  data() {
    return {
      active: 3,
      password:'',
      passwordAgain: ''
    };
  },

  methods: {
    next() {
        resetPwd(this.passwordAgain).then(

         ()=>{
           this.$alert('密码已经修改，请用新密码登录', '密码格修改成功', {
          confirmButtonText: '确定',
          callback: action => {
           this.$router.push('/')
          }
          });
         }
          
        )
    },
    // 失去焦点时验证密码的格式
    outInput(){
       const pswRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/
       if(!pswRegex.test(this.password) && this.password != ''){
         this.$alert('密码必须包含大小写字母和数字的组合，可以使用特殊字符，长度在8-10之间', '密码格式不正确', {
          confirmButtonText: '确定',
          callback: action => {
           
          }
        });
        this.password = ""
      }

    },
    finishInput(){
      if(this.password != this.passwordAgain && this.passwordAgain != ''){
         this.$alert('两次输入的密码不一致', '密码有误', {
          confirmButtonText: '确定',
          callback: action => {
            this.passwordAgain = ''
          }
        });
      }else{
        this.$refs.commitBtn.disabled = false
      }
    }
  },
};
</script>
<style lang='scss' scoped>
.resetPwdStep1{
    background: url(../../../assets/register/p2.png) no-repeat;
    width: 100%;
    height: 100%;
    background-size: cover;
}

.mask{
    background: rgba(255, 255, 255, 0.3);
    width: 100%;
    height: 100%;
}
.logo{
  height: 50px;
  width: 90px;
  background: url(../../../assets/logo.png) no-repeat;
  background-size: 90px 50px;
  z-index: 2;
  margin-left: 70px;
  margin-top: 40px;
}

.main{
    margin-top: 60px;
    padding-top: 30px;
    padding-bottom: 30px;
    background: rgba(255, 255,255, 0.7);
}

.form{
    margin-top: 80px;
    padding-top: 20px;
    padding-bottom: 40px;
    background: rgba(255, 255,255, 0.7);
}
.commitBtn{
    margin-top: 20px;
}

.agreement{
    margin-top: 20px;
}


.tip{
    margin-top: 20px;
    color: #757575;
    font-size: 14px;
}
</style>