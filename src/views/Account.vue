<template>
  <div class="content">
    <el-container>
      <el-header class="header">
        <div style="display:inline-block"><span>用户管理</span>
        </div>
      </el-header>
      <el-main>
        <div class="form">
          <el-form ref="form" :model="form" label-width="6em">
            <el-form-item label="帐号:" :rules="[{ required: true, message: '邮箱不能为空'}]">
              <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码:" :rules="[{ required: true, message: '请输入密码'}]">
              <el-input :type="inputType" v-model="form.password"></el-input><span class="showPassword" @click="seePassword">显示密码</span>
            </el-form-item>
          </el-form>
          <div class="action">
            <el-button type="primary" plain @click.native="$back">&ensp;取消&ensp;</el-button>
            <el-button type="primary" @click.native="save">&ensp;保存&ensp;</el-button>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0,
      inputType: 'password',
      form: {
        username: 'Admin',
        password: '123456'
      },
      title: '添加管理员',
      isAdd: 1
    }
  },
  mounted: function () {
    let type = this.$route.params.type
    if (type === 'add') {
      this.isAdd = 1
      this.title = '添加管理员'
      this.btnLabel = '上一步'
    } else {
      this.isAdd = 0
      this.title = '编辑管理员信息'
    }
  },
  methods: {
    seePassword: function () {
      if (this.inputType === 'password') {
        this.inputType = 'tel'
        this.hidden = false
      } else {
        this.inputType = 'password'
        this.hidden = true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
  font-size: 14px;
  color:#666;
  background-color:#f9f9f9;
}
.link{
  color:#999;
  text-decoration:underline;
}
.link:hover{
  color:#00b8ff;
}
.header{
  height:51px !important;
  line-height:51px;
  padding: 0 32px;
  background-color: #f3f3f3
}
.form{
  /* border: 1px solid #e4e4e4; */
  padding:3em 0 10em 0;
  margin-top: 8%
}
.form form{
  margin: 0 auto;
  width: 36%
}
.form >>> .el-input{
  width: 100%
}
.users{
  line-height: 48px;
  height: 48px;
  background-color: #f3f3f3;
  padding-left: 1em;
  border: 1px solid #e4e4e4;
  border-bottom: 0px solid #e4e4e4;
}
.action{
  text-align: center;
  margin-top: 4em;
}
.showPassword{
  position: absolute;
  right: -5em;
  text-decoration: underline;
}
</style>
