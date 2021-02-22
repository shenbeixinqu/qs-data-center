
<template>
  <div class="navbar">
    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" id="hamburger-container"/>

    <breadcrumb class="breadcrumb-container" id="breadcrumb-container"/>

    <div class="right-menu">
      <template v-if="device!=='mobile'">

       <!-- <guide class="right-menu-item"></guide> -->


         <el-tooltip content="页面搜索" effect="dark" placement="bottom">
            <search id="header-search" class="right-menu-item" />
         </el-tooltip>
       

        <!-- <error-log class="errLog-container right-menu-item hover-effect" /> -->

        <el-tooltip content="全屏" effect="dark" placement="bottom">
           <screenfull id="screenfull" class="right-menu-item hover-effect" />
        </el-tooltip>
       

        <!-- <el-tooltip content="帮助" effect="dark" placement="bottom">
          <size-select id="size-select" class="right-menu-item hover-effect" />
        </el-tooltip> -->

      </template>


      <el-dropdown class="avatar-container" trigger="click" id='avatar-container'>
        <div class="avatar-wrapper">
          <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item>
              返回首页
            </el-dropdown-item>
          </router-link>

          <!-- TODO:// 添加操作 -->
          
          <el-dropdown-item @click.native="returnSetting">个人中心</el-dropdown-item>
          
          <a target="_blank" href="http://willwong.gitee.io/qs_manual/">
            <el-dropdown-item>使用手册</el-dropdown-item>
          </a>
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">注销登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>


    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import Screenfull from '@/components/Screenfull'
import Search from '@/components/HeaderSearch'
import ErrorLog from '@/components/ErrorLog'
import Guide from '@/components/Guide/index'
import SizeSelect from '@/components/SizeSelect'

export default {
  components: {
    Breadcrumb,
    Hamburger,
    Screenfull,
    Search,
    Guide
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'device'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    returnSetting(){
      this.$router.push('/setting/personalCenter')
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .045)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .045)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>

