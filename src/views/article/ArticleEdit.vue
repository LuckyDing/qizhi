<template>
  <div class="content">
    <el-container>
      <el-header class="header">
        <div style="display:inline-block">
          <router-link :to="{ path: '/Index/Menus/10/AdminRight/ArIndex' }"><span class="link">操作指南</span></router-link>
          <span>&ensp;>&ensp;{{title}}</span>
        </div>
        <!-- <el-button size="mini" icon='el-icon-arrow-left' class="float-right margin-1em" @click.native="$back">返回</el-button> -->
      </el-header>
      <el-main style="padding:0 20px">
        <div class="form">
          <div class="form_item">
            <span class="form_cell">标题：</span>
            <el-input class="form_cell" v-model="form.username" :maxlength="30" :placeholder="'不超过30个字'"></el-input>
          </div>
          <div class="form_item">
            <span class="form_cell">内容：</span>
            <UEditor class="form_cell" :config='config' ref="ue1"></UEditor>
          </div>
          <el-button v-if="isAdd === 1" type="primary" style="margin:0 auto;display:block;margin-top:5em;" @click.native="next">下一步，分配管理员权限</el-button>
          <div class="action" v-else>
            <el-button type="primary" plain @click.native="$back">&ensp;取消&ensp;</el-button>
            <el-button type="primary"  @click.native="show_content" plain>&ensp;预览&ensp;</el-button>
            <el-button type="primary" @click.native="save">&ensp;保存&ensp;</el-button>
          </div>
        </div>
      </el-main>
    </el-container>
    <el-dialog :visible.sync="dialog" center>
        <div v-html="content"></div>
    </el-dialog>
  </div>
</template>

<script>
import UEditor from '../../components/Ueditor'
export default {
  components: {
    UEditor
  },
  data () {
    return {
      dialog: false,
      active: 0,
      content: '',
      form: {
        username: '',
        name: '',
        tel: '',
        role: '',
        password: '',
        passwordCheck: ''
      },
      title: '编辑内容',
      isAdd: 1,
      config: {
        initialFrameWidth: null,
        initialFrameHeight: 500
      }
    }
  },
  mounted: function () {
    let type = this.$route.params.type
    if (type === 'add') {
      this.isAdd = 1
    } else {
      this.isAdd = 0
    }
  },
  methods: {
    next () {
      this.$router.push({path: '/Index/Menus/10/AdminRight/SetRight/add/0'})
    },
    show_content () {
      this.content = this.$refs.ue.getUEContent()
      this.dialog = true
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
  padding:3em 0 10em 0;
}
.form form{
  margin: 0 auto;
  width: 36%
}
.form_item{
  display: flex;
  margin-bottom: 1em;
}
.form_cell{
  width: 100%;
}
.form_item .form_cell:first-child{
  width: 4em;
}
.action{
  text-align: center;
  margin-top: 4em;
}
img{
  max-width: 100%;
}
</style>
