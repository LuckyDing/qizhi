<template>
  <div class="content">
    <el-container>
      <el-header class="header">
        <div style="display:inline-block">
          <router-link :to="{ path: '/Menus/Foods/FIndex' }"><span class="link">用户反馈</span></router-link>
          <span>&ensp;>&ensp;反馈详情</span>
        </div>
      </el-header>
      <el-main style="padding:20px">
        <div class="food_content">
          <div class="item table">
            <el-row>
              <el-col :span="6"><div class="grid-content table_label">用户邮箱</div></el-col>
              <el-col :span="18"><div class="grid-content">{{food.user}}</div></el-col>
              <el-col :span="6"><div class="grid-content table_label">反馈时间</div></el-col>
              <el-col :span="18"><div class="grid-content">{{food.add_time}}</div></el-col>
              <el-col :span="6"><div class="grid-content table_label" style="line-height:180px;height:180px">内容</div></el-col>
              <el-col :span="18"><div class="grid-content" style="height:180px">{{food.content}}</div></el-col>
              <el-col :span="6"><div class="grid-content table_label" style="height:120px;line-height:120px;">图片</div></el-col>
              <el-col :span="18">
                <div class="grid-content" style="height:120px;">
                  <div class="images_box">
                    <img v-for="(item, index) in food.images" :src='item' :key="index"/>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="action">
          <el-button type="primary" plain>&ensp;删除&ensp;</el-button>
          <el-button type="primary" plain @click.native="$back">&ensp;关闭&ensp;</el-button>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
const foods = () => {
  let data = []
  for (let i = 0; i < 10; i++) {
    data[i] = {
      change_time: '2018/01/01 10:00',
      status: '已创建'
    }
  }
  return data
}
export default {
  data () {
    return {
      currentPage: 1,
      foods: foods(),
      food: {
        id: 0,
        add_time: '2018/01/01 10:00',
        user: 'laay@google.com',
        uid: 1,
        images: [
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=236648677,732500117&fm=27&gp=0.jpg',
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=236648677,732500117&fm=27&gp=0.jpg',
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=236648677,732500117&fm=27&gp=0.jpg',
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=236648677,732500117&fm=27&gp=0.jpg'
        ],
        content: 'tejsdsjfafjt  jtaj afk jsaf '
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
  padding:0 !important;
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
.food_content{
  display: flex;
}
.food_content .item{
  width: 100%
}
.food_content .grid-content{
  height: 48px;
  line-height: 48px;
  text-align: left;
  padding:0 2em;
}
.images_box{
  display: flex;
}
.images_box img{
  height: 100px;
  display: block;
  flex: 1;
  margin-top: 10px;
  margin-right: 10px;
}
.images_box img:last-child{
  margin-right: 0;
}
</style>
