<template>
  <div class="content">
    <el-container>
      <el-header class="header">
        <div style="display:inline-block">
          <router-link :to="{ path: '/Menus/Foods/FIndex' }"><span class="link">食物管理</span></router-link>
          <span>&ensp;>&ensp;食物详情</span>
        </div>
      </el-header>
      <el-main style="padding:20px">
        <div class="food_content">
          <div class="item background-image" :style="{'background-image': 'url('+food.img+')'}"></div>
          <div class="item table">
            <el-row>
              <el-col :span="6"><div class="grid-content table_label">食物名称</div></el-col>
              <el-col :span="18"><div class="grid-content">{{food.name}}</div></el-col>
              <el-col :span="6"><div class="grid-content table_label">创建时间</div></el-col>
              <el-col :span="18"><div class="grid-content">{{food.add_time}}</div></el-col>
              <el-col :span="6"><div class="grid-content table_label">食物状态</div></el-col>
              <el-col :span="18"><div class="grid-content">{{food.status}}</div></el-col>
              <el-col :span="6"><div class="grid-content table_label">所属用户</div></el-col>
              <el-col :span="18"><div class="grid-content">
                <router-link :to="{ path: '/Menus/Users/UserInfo/' + food.uid }">
                  <span class="underline">{{food.user}}</span>
                </router-link>
              </div></el-col>
              <el-col :span="6"><div class="grid-content table_label">提醒时间</div></el-col>
              <el-col :span="18"><div class="grid-content">{{food.remind_time}}</div></el-col>
              <el-col :span="6"><div class="grid-content table_label" style="height:96px;line-height:96px;">备注</div></el-col>
              <el-col :span="18"><div class="grid-content" style="height:96px;">{{food.remark}}</div></el-col>
            </el-row>
          </div>
        </div>
        <div class="section">
          <p class="table_title">食物历史状态</p>
          <el-table :data="foods" style="width: 100%;" :border="true" :header-cell-style="{'background-color': '#eee'}">
            <el-table-column prop="status" label="食物状态" width="200"></el-table-column>
            <el-table-column prop="change_time" label="更改时间"></el-table-column>
          </el-table>
        </div>
        <div class="action">
          <el-button type="primary" plain @click.native="$back">&ensp;返回&ensp;</el-button>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      food: {
        id: 0,
        name: '西瓜',
        add_time: '2018/01/01 10:00',
        status: '已绑定',
        user: 'laay@google.com',
        uid: 1,
        img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=236648677,732500117&fm=27&gp=0.jpg',
        remind_time: '2018/01/01 10:00',
        remark: 'tejsdsjfafjt  jtaj afk jsaf '
      }
    }
  },
  methods: {
    next () {
      this.$router.push({path: '/Index/Menus/10/AdminRight/SetRight/add/0'})
    },
    handleCurrentChange (val) {
      console.log('当前页:' + val)
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
.action{
  text-align: center;
  margin-top: 4em;
}
.grid-content{
  border-bottom: 1px solid #888;
  border-right: 1px solid #888;
  height: 36px;
  line-height: 36px;
  text-align: center;
}
.table_title{
  margin-bottom: 0.5em;
}
.table{
  border-top: 1px solid #888;
  border-left: 1px solid #888;
}
.table_label{
  background-color: #eee;
  text-align: center !important;
  padding-left:0 !important;
}
.section{
  margin-top: 3em;
}
>>> .el-table th{
  text-align: center;
}
.el-table{
  font-size: 12px;
  text-align: center;
}
.table_footer{
  background-color: #fff;
  line-height: 50px;
  height: 50px;
  padding: 0 1.5em;
  border: 1px solid #e4e4e4;
  border-top: 0;
  font-size: 12px;
}
.hover:hover{
  text-decoration: underline;
}
.el-pagination {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  float: right;
  margin-top: 1em;
}
.food_content{
  display: flex;
}
.food_content .item img{
  width: 100%;
  max-height: 100%;
}
.food_content .item:first-child{
  width: 40%;
  margin-left: 0;
}
.food_content .item{
  height: 342px;
  margin-left: 2%;
  width: 58%
}
.food_content .grid-content{
  height: 48px;
  line-height: 48px;
  text-align: left;
  padding-left: 2em;
}
.background-image{
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
