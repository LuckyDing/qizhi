<template>
  <div v-title="'首页'">
    <el-container>
      <el-header class="system_name">
        <div>Qi Vacuum 后台管理系统</div>
      </el-header>
      <el-main style="margin-top:60px">
        <el-container>
          <el-aside width="7em" class="aside" :style="{height: asideHeight +'px'}">
            <!-- <div class="logo">
              <img src="./../assets/images/logo.png" />
            </div> -->
            <el-menu @select="selected" :default-active="defaultActive" background-color="#333" text-color="#fff" active-text-color="#fff">
              <el-menu-item v-for="(item, index) in menus" :key="index" :index="item.path">
                <i class="iconfont" :class="item.icon"></i>
                <span slot="title">{{item.name}}</span>
              </el-menu-item>
            </el-menu>
          </el-aside>
          <el-main style="margin-left:112px;">
            <router-view/>
            <el-footer class="copyright">
              Copyright © Qi Zhi Kitchen, All Rights Reserved.
            </el-footer>
          </el-main>
        </el-container>
      </el-main>
    </el-container>
  </div>
</template>

<script>
const menusList = () => [
  {
    name: '用户管理',
    icon: 'icon-user1',
    label: 'Users',
    path: '/Menus/Users/UIndex'
  },
  {
    name: '设备管理',
    icon: 'icon-shebei',
    label: 'Equipment',
    path: '/Menus/Equipment'
  },
  {
    name: '食物管理',
    icon: 'icon-baoguo',
    label: 'Foods',
    path: '/Menus/Foods/FIndex'
  },
  {
    name: '推送管理',
    icon: 'icon-tuisong',
    label: 'Message',
    path: '/Menus/Message/MIndex'
  },
  {
    name: '用户反馈',
    icon: 'icon-label',
    label: 'Feedback',
    path: '/Menus/Feedback/FDIndex'
  },
  {
    name: '操作指南',
    icon: 'icon-xitongshezhi',
    label: 'Article',
    path: '/Menus/Article/AIndex'
  },
  {
    name: '我的帐号',
    icon: 'icon-user',
    label: 'Account',
    path: '/Menus/Account'
  }
]
export default {
  data () {
    return {
      asideHeight: 0,
      menus: menusList(),
      defaultActive: ''
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      const clientHeight = document.documentElement.clientHeight
      this.asideHeight = clientHeight
      let path = this.$route.path
      const begin = this.$findPositionOfCharacter(this.$route.path, '/', 2)
      const end = this.$findPositionOfCharacter(this.$route.path, '/', 3)
      if (end === -1) {
        path = path.substring(begin + 1, path.length)
      } else {
        path = path.substring(begin + 1, end)
      }
      let vm = this
      // console.log(path)
      vm.menus.forEach(function (item, index) {
        if (item.label === path) {
          vm.defaultActive = item.path
          return false
        }
      })
    })
  },
  watch: {
    asideHeight (val) {
      // console.log(val)
    }
  },
  methods: {
    selected (index) {
      this.$router.push({ path: index })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.aside{
  background-color:#333;
  position:fixed;
  text-align:center;
  padding-bottom:140px;
  z-index:9;
  top:60px;
  left:0;
  height: 100%;
}
.aside >>>.el-menu-item, .el-submenu__title{
  padding: 0;
  padding-left:0 !important;
  height: 40px;
  line-height: 40px;
}
.aside >>> .el-menu-item.is-active{
  background-color: #00b8ff !important;
}
>>> .el-main{
  padding: 0;
  position: relative;
}
>>> .el-menu{
    border-right: solid 0px #e6e6e6;
}
>>> .el-menu-item {
    font-size: 12px;
}
>>> .el-menu-item i{
  color:#fff;
}
.iconfont{
  margin-right: 5px;
  width: 24px;
  text-align: center;
  font-size: 18px;
  vertical-align: middle;
}
.logo{
  background-color: #333;
  padding: 0.5em;
  text-align: center;
  width: 5em;
  /* border-right: solid 1px #e6e6e6; */
  box-sizing: border-box;
}
.logo img{
  width: 58%;
  display: block;
  margin: 0 auto;
}
.menu_footer{
  text-align: center;
  color:#fff;
  font-size: 16px;
  position: fixed;
  bottom: 0;
  left:0;
  background-color: #333;
  width: 5em;
}
.menu_footer .iconfont{
  margin-right: 0;
}
.menu_footer li{
  padding: 1em;
  border-bottom: 1px solid #888;
  font-size: 12px;
}
.menu_footer li:hover{
  background-color:#00b8ff;
}
.menu_footer li:last-child{
  border-bottom: 0px solid #888;
}
.menu_footer li i{
  font-size: 1.75em;
}
.menu_footer .icon-usered{
    font-size: 3em;
}
.mypop{
  background-color: #fff;
  box-shadow: 1px 1px 1px #e4e4e4;
  position: absolute;
  left: 80px;
  top: 0;
  width: 300px;
  z-index: 2017
}
.login_section{
  text-align: right;
  color:#999;
  padding: 1em 1em 0 1em;
}
.login_section .login_header{
  border-bottom: 1px solid #e4e4e4;
  padding: 0 1em;
}
.login_header span{
  padding: 12px 0;
  display: inline-block;
}
.login_info{
  clear: both;
  padding: 0.5em 0;
  text-align: left;
}
.login_info p{
  padding: 1em;
  position: relative;
}
.underline{
  color:#666
}
.underline:not(:last-child)::after{
  content: '';
  position:absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  border-bottom: 1px solid #e4e4e4;
}
.system_name{
  line-height: 60px;
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  font-size: 24px;
  height: 60px;
  border-bottom: 1px solid #888;
  z-index: 9999;
  background-color: #eee;
}
</style>
