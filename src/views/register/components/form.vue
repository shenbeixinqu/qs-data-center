<template>
  <div>
    <h1>   欢迎注册  </h1>
    <el-row :gutter="15">
      <el-form ref="elForm" :model="formData" :rules="rules" size="medium" >
        <el-col :span="24">
          <el-form-item  prop="username">
            <el-input v-model="formData.username" placeholder="昵称" clearable prefix-icon='el-icon-user' size='large' @blur="nameOutblur">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item  prop="password">
            <el-input v-model="formData.password" placeholder="密码" show-word-limit clearable
              prefix-icon='el-icon-key' show-password :style="{width: '100%'}" ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item  prop="mobile">
            <el-input v-model="formData.mobile" placeholder="手机号" :maxlength="11" show-word-limit clearable
              prefix-icon='el-icon-mobile' :style="{width: '100%'}" @blur="mobileOutblur" @focus="mobileFocus" ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24" >

          <el-col :span="12">
          <el-form-item  prop="vCode">
            
              <el-input v-model="formData.vCode" placeholder="验证码" show-word-limit clearable
              prefix-icon='el-icon-chat-dot-square' :style="{width: '100%'}"></el-input>
           
          </el-form-item>
           </el-col>
            <el-col :span="12">
              <el-button type="primary"  @click="getVcode" ref='vcodeBtn'>获取验证码</el-button>
            </el-col>
          
        </el-col>
        <el-col :span="24">
        <el-form-item>
        <el-button type="primary" style="width: 100%; height: 50px;" :loading="loading" class="register_btn">
          <el-link icon="el-icon-s-promotion" :underline="false" style="color: white; " @click="submitForm">提交</el-link>
          <el-link style="color: white; text-decoration: none; margin: 0 10px;"> / </el-link>
          <el-link icon="el-icon-edit-outline" :underline="false" style="color: white;"  @click="resetForm">重置</el-link>
        </el-button>
      </el-form-item>
        </el-col>
      </el-form>
    </el-row>
  </div>
</template>
<script>
import { register } from '@/api/user'
import { resiveVcode } from '@/api/user'
import { isNameExist }  from '@/api/user'
import { isExistMobile }  from '@/api/user'
export default {
  components: {},
  props: [],
  data() {
    return {

      formData: {
        username: '',
        password: '',
        mobile: '',
        vCode: '',
      },
      rules: {
        username: [{
          required: true,
          message: '请输入昵称',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }, {
          pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/,
          message: '密码必须包含大小写字母和数字的组合，可以使用特殊字符，长度在8-10之间',
          trigger: 'blur'
        }],
        mobile: [{
          required: true,
          message: '请输入手机号',
          trigger: 'blur'
        }, {
          pattern: /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
          message: '请输入有效手机号',
          trigger: 'blur'
        }],
        vCode: [{
          required: true,
          message: '请输入验证码',
          trigger: 'blur'
        }, {
          pattern: /^\d{6}$/,
          message: '验证码为6位的数字',
          trigger: 'blur'
        }],
      },
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    nameOutblur(){
      // alert('昵称输入框失去焦点');
      isNameExist(this.formData.username).then(
       
      )
    },
    mobileOutblur(){
         isExistMobile(this.formData.mobile).then(
       
      )
    },
    mobileFocus(){

    },
    submitForm() {
      this.$refs['elForm'].validate(valid => {
        if (valid) {
          register(this.formData).then(
            ()=>{
           this.$alert('欢迎您成为本系统的注册用户', '注册成功', {
          confirmButtonText: '确定',
          callback: action => {
           this.$router.push('/')
          }
          });
         }
          )
        }
      })
    },
    resetForm() {
      this.$refs['elForm'].resetFields()
    },
    getVcode(){
      this.$refs.vcodeBtn.disabled = true
      console.log(this.$refs.vcodeBtn)
      setTimeout(() => {
        this.$refs.vcodeBtn.disabled = false
      }, 10000);
      console.log(this.$refs.vcodeBtn)
      resiveVcode().then(

      )
    }
  }
}

</script>
<style scoped>
.el-input{
    margin-bottom: 20px;
 }

	.register_btn{
		border: none;
		background: linear-gradient(120deg,#448aff,#80cbc4,#448aff);
		background-size: 200%;
		transition: all 0.5s;
		box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
	}
	.register_btn:hover {
		background-position: right;
  }



</style>
