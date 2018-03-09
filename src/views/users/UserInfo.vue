<template>
  <div class="content">
    <el-container>
      <el-header class="header">
        <div style="display:inline-block">
          <router-link :to="{ path: '/Menus/Users/UIndex' }"><span class="link">用户管理</span></router-link>
          <span>&ensp;>&ensp;用户详情</span>
        </div>
      </el-header>
      <el-main style="padding:20px">
        <div class="section">
          <p class="table_title">用户信息</p>
          <el-row class="table background-white">
            <el-col :span="5"><div class="grid-content">邮箱</div></el-col>
            <el-col :span="7"><div class="grid-content">jdjdkd@gmail.com</div></el-col>
            <el-col :span="5"><div class="grid-content">昵称</div></el-col>
            <el-col :span="7"><div class="grid-content">lena</div></el-col>
            <el-col :span="5"><div class="grid-content">性别</div></el-col>
            <el-col :span="7"><div class="grid-content">女</div></el-col>
            <el-col :span="5"><div class="grid-content">出生日期</div></el-col>
            <el-col :span="7"><div class="grid-content">1990/01/01</div></el-col>
            <el-col :span="5"><div class="grid-content">注册时间</div></el-col>
            <el-col :span="7"><div class="grid-content">1990/01/01 10:00</div></el-col>
            <el-col :span="5"><div class="grid-content"></div></el-col>
            <el-col :span="7"><div class="grid-content"></div></el-col>
            <el-col :span="5"><div class="grid-content">历史设备数</div></el-col>
            <el-col :span="7"><div class="grid-content">2</div></el-col>
            <el-col :span="5"><div class="grid-content">历史食物数</div></el-col>
            <el-col :span="7"><div class="grid-content">5</div></el-col>
          </el-row>
        </div>
        <div class="section">
          <p class="table_title">设备信息</p>
          <el-table :data="equipment" style="width: 100%;" :border="true">
            <el-table-column prop="id" label="序号" width="80"></el-table-column>
            <el-table-column prop="name" label="设备名称" width="200"></el-table-column>
            <el-table-column prop="bind_time" label="绑定时间" width="200"></el-table-column>
            <el-table-column prop="undbind_time" label="解绑时间" width="200"></el-table-column>
            <el-table-column prop="mac" label="MAC地址" width="200"></el-table-column>
            <el-table-column prop="address" label="设备地区" width="200"></el-table-column>
            <el-table-column prop="status" label="设备状态"></el-table-column>
          </el-table>
        </div>
        <div class="section">
          <p class="table_title">食物信息</p>
          <el-table :data="foods" style="width: 100%;" :border="true">
            <el-table-column prop="id" label="序号" width="80"></el-table-column>
            <el-table-column prop="name" label="食物名称" width="400"></el-table-column>
            <el-table-column prop="store_time" label="存入时间" width="400"></el-table-column>
            <el-table-column prop="status" label="食物状态" width="200"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button class="hover" type="text" @click.native="food(scope.row.id)">查看</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="table_footer">
            <el-pagination
             @current-change="handleCurrentChange"
             :current-page="currentPage"
             :page-size="100"
             layout="total,prev, pager, next, jumper"
             :total="400">
            </el-pagination>
          </div>
        </div>
        <div class="action">
          <el-button type="primary" plain @click.native="$back">&ensp;返回&ensp;</el-button>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
const equipmentList = () => {
  let data = []
  for (let i = 0; i < 3; i++) {
    data[i] = {
      id: i,
      name: 'Qi Vacuum',
      bind_time: '2018/01/01 10:00',
      undbind_time: '2018/01/11 10:00',
      mac: '192.168.191.1',
      address: '纽约',
      status: '已绑定'
    }
  }
  return data
}
const foods = () => {
  let data = []
  for (let i = 0; i < 10; i++) {
    data[i] = {
      id: i,
      name: '西瓜',
      store_time: '2018/01/01 10:00',
      status: '已创建'
    }
  }
  return data
}
export default {
  data () {
    return {
      currentPage: 1,
      equipment: equipmentList(),
      foods: foods()
    }
  },
  methods: {
    handleCurrentChange (val) {
      console.log('当前页:' + val)
    },
    food (id) {
      this.$router.push({path: '/Menus/Foods/FoodInfo/' + id})
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
.section{
  margin-bottom: 1em;
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
</style>
