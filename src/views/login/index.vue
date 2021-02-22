<template>
  <div class="login">
    <div class="logobar">
      <div class="logo"><img src="https://s3.ax1x.com/2021/01/25/sLPH8P.png" alt="" width="130px"></div>
    </div>

    <div class="main">
      <loginForm />
    </div>

    <div class="footer">
      <div class="Form_main">
        <div class="Form_main_left">
          <div class="bot_sp">小程序</div>
          <div class="con_d">
            <div class="con_sp csw_01">
              <img src="../../assets/mini1.jpg" width="72" height="72" title="京东门店" style="margin-right: 10px;">
              <img src="../../assets/mini2.jpg" width="72" height="72" title="淘宝门店">
              <br>
              微信扫一扫
            </div>
          </div>
        </div>
        <div class="Form_main_mid">
          <div class="bot_sp">联系方式</div>
          <div class="con_d">
            电话：0573-82283307<br>
            邮箱：softide@softide.cn<br>
            地址：浙江省嘉兴市
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import loginForm from './components/form.vue'
export default {
  components: {
    loginForm
  },
  data: function() {
    return {
    }
  },
  methods: {
    handleLogin: function() {

    }
  }

}
</script>

<style scoped>

	.logobar{
		width: 100%;
		height: 18vh;
	}
	.main{
		width: 100%;
		height: 50vh;
	}
	.footer{
		width: 100%;
		height: 20vh;
    margin-top: 10vh;
	}
	.logo{
		margin-left: 200px;
		padding-top: 35px;
	}
	.main{
		border-top:15px #d3d3d3 solid ;
		border-bottom:15px #d3d3d3 solid ;
		background: url(https://s3.ax1x.com/2021/01/25/sLEvhd.jpg) no-repeat ;
	}

       .Form_main {
           width: 1060px;
           margin: 40px auto 0;
           overflow: hidden
       }

       .Form_main_left {
           width: 270px;
           float: left
       }

       .bot_sp {
           color: #333;
           font-size: 16px;
           line-height: 24px;
           margin-bottom: 10px
       }

       .con_d {
           width: 100%;
           line-height: 28px;
           font-size: 14px;
           color: #666;
           margin-bottom: 20px
       }

       .con_sp {
           overflow: hidden;
           float: left;
           line-height: 22px;
           color: #888;
           font-size: 12px
       }

       .csw_01 {
           width: 160px;
           text-align: center;
           margin-right: 60px
       }

       .Form_main_mid {
           width: 300px;
           float: left;
           margin-left: 40px
       }

       .bot_sp {
           color: #333;
           font-size: 16px;
           line-height: 24px;
           margin-bottom: 10px
       }

       .con_d {
           width: 100%;
           line-height: 28px;
           font-size: 14px;
           color: #666;
           margin-bottom: 20px
       }


@media (max-width: 1024px) {
  .footer{
    display: none;
  }
}
</style>
