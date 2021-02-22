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
                <h3>手机号：</h3><el-input placeholder="请输入手机号" v-model="mobile" prefix-icon='el-icon-mobile' :maxlength="11" show-word-limit @blur="outInput"></el-input>
            </el-row>
            
           
            <!-- <el-row>
                <h3>验证码：</h3>
                <el-button type="info" style="width: 100%">点击开始验证</el-button>
            </el-row>
             -->
           

            <el-row class="commitBtn">
                 <el-button type="success" @click="next" style="width: 50%">验证手机号</el-button>
            </el-row>
            
            <el-row class='tip'>
             验证通过将收到<i>验证码</i>
            </el-row>
            <!-- <el-row class="agreement">
                 <el-checkbox v-model="checked">我已阅读并同意<el-link href="http://willwong.gitee.io/qs_manual" target="_blank" type="primary"> 《账号身份验证服务协议》</el-link></el-checkbox>
            </el-row> -->
        </el-col> 
         
    </el-row>
    </div>
  </div>
</template>

<script>
import { resetPwd_mobile }  from '@/api/user'
export default {
  data() {
    return {
    active: 1,
    checked: false,
    mobile:''
    };
  },

  methods: {
    next() {
      resetPwd_mobile(this.mobile).then(
        ()=>{
           this.$router.push('/reset_pwd/step3')
        }
      )
     
    },

    // 失去焦点验证手机号
    outInput(){
      const moblieRegex = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
      if(!moblieRegex.test(this.mobile) && this.mobile != ''){
          this.$alert('请输入正确的手机号', '手机号无效', {
          confirmButtonText: '确定',
          callback: action => {
           
          }
        });
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
  margin-top: 10px;
  color:#616161;
  font-size: 14px;
}
</style>