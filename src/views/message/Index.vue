<template>
  <div class="content">
    <el-container>
      <el-header style="height:51px">
        <div class="tabs">
          <span class="tab_item tab_item_on">推送管理</span>
          <!-- <el-button class="float-right" style="margin-top: 1em;" size="mini" icon="el-icon el-icon-refresh">&ensp;刷新</el-button> -->
        </div>
      </el-header>
      <el-main style="padding:0 20px">
        <div class="search_box">
          <div class="search_content">
            <div class="search_item">
              <!-- <label>输入搜索：</label><el-input size="small" v-model="name" placeholder="用户名/姓名"></el-input>
              <el-button size="small" style="margin-top:1em;">&ensp;查询</el-button> -->
              <router-link :to="{ path: 'MessageEdit'}">
                <el-button size="small" icon="el-icon-plus" class="float-right" style="margin-top:1em;">&ensp;新建推送</el-button>
              </router-link>
            </div>
          </div>
        </div>
        <div class="table">
          <el-table :data="dataList" style="width: 100%" :border="true">
            <el-table-column label="选择" width="58">
              <template slot-scope="scope">
                <el-checkbox v-model="scope.row.checked"></el-checkbox>
              </template>
            </el-table-column>
            <el-table-column prop="id" label="序号" width="80"></el-table-column>
            <el-table-column prop="title" label="标题" width="360"></el-table-column>
            <el-table-column prop="add_time" label="推送时间" width="300"></el-table-column>
            <el-table-column prop="status" label="推送状态" width="200">
              <template slot-scope="scope">
                <span v-if="scope.row.status === 0" color="red">失败</span>
                <span v-else>成功</span>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button class="hover" type="text" @click.native="edit(scope.row.id)">查看</el-button>
                <el-button type="text">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="table_footer">
            <el-button class="hover" @click="checkAll" type="text">全选</el-button>
            <el-button class="hover" @click="cancelAll" type="text">反选</el-button>
            <span class="btn-danger hover" type="text">批量删除</span>
            <el-pagination
             @current-change="handleCurrentChange"
             :current-page="currentPage"
             :page-size="100"
             layout="total,prev, pager, next, jumper"
             :total="400">
           </el-pagination>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
const datalist = () => {
  let data = []
  for (let i = 0; i < 10; i++) {
    data[i] = {
      'checked': false,
      'title': 'Hlinna',
      'add_time': '2017-08-05 15:47:44',
      'status': 1,
      'id': i
    }
  }
  return data
}
export default {
  data () {
    return {
      activeName: 'first',
      name: '',
      dataList: datalist(),
      currentPage: 1
    }
  },
  methods: {
    checkAll () {
      this.dataList.forEach(function (item, index) {
        item.checked = true
      })
    },
    cancelAll () {
      this.dataList.forEach(function (item, index) {
        item.checked = false
      })
    },
    handleCurrentChange (val) {
      console.log('当前页:' + val)
    },
    edit (id) {
      this.$router.push({ path: 'MessageInfo/' + id })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
  font-size: 14px;
  color:#666;
}
.tabs{
  line-height: 51px;
  height: 51px;
  background-color: #f3f3f3;
  padding:0 32px;
}
.tabs .tab_item{
  line-height: 51px;
  height: 51px;
  padding: 0 0.5em;
  position: relative;
  display: inline-block;
}
.tab_item_on{
  color:#00b8ff;
}
.tab_item_on::after{
  content: '';
  position:absolute;
  right: 0;
  bottom: 0;
  border-bottom: 2px solid #00b8ff;
  width: 100%
}
.el-header{
  padding: 0 !important
}
.search_box{
  background-color: #f3f3f3;
  /* border: 1px solid #e4e4e4; */
  font-size: 12px;
}
.search_box .arrow_up{
  color:#999;
  margin-right: 1em;
}
.el-icon{
  font-size: 16px;
  margin-right: 5px;
}
.search_header{
  padding:0 1em ;
  line-height: 48px;
  height: 48px;
}
.search_content{
  height: 58px;
  line-height: 58px;
  background-color: #fff;
  /* border-top: 1px solid #e4e4e4; */
  padding: 0 3em;
  font-size: 14px;
}
.search_item label{
 margin-right: 0.5em;
}
.search_item .el-input{
  width: 200px;
}
.table{
  /* margin-top: 1.5em; */
}
>>> .el-table th{
  text-align: center;
}
>>> .el-table td{
  padding: 5px 0;
}
.el-button{
  font-size: 12px;
}
.el-table{
  font-size: 12px;
  text-align: center;
}
.table_header{
  background-color: #f3f3f3;
  line-height: 50px;
  height: 50px;
  padding: 0 1em;
  border: 1px solid #e4e4e4;
  border-bottom: 0;
  font-size: 14px;
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
.btn-danger{
  color:red;
  margin-left: 20px;
}
</style>
