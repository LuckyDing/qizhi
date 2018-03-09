<template>
  <div class="content">
    <el-container>
      <el-header style="height:51px">
        <div class="tabs">
          <span class="tab_item tab_item_on">设备管理</span>
          <el-button class="float-right" style="margin-top: 1em;" size="mini" icon="el-icon el-icon-refresh">&ensp;刷新</el-button>
        </div>
      </el-header>
      <el-main style="padding:0 20px">
        <div class="data_chat">
          <el-row :gutter="20">
            <el-col :span="8">
              <h2 class="data_num">100</h2>
              <p>设备总数</p>
            </el-col>
            <el-col :span="8">
              <h2 class="data_num">50</h2>
              <p>已绑定</p>
            </el-col>
            <el-col :span="8">
              <h2 class="data_num">40</h2>
              <p>已解绑</p>
            </el-col>
          </el-row>
        </div>
        <div class="search_box">
          <div class="search_content">
            <div class="search_item float-right">
              <label>输入搜索：</label><el-input size="small" v-model="name" placeholder="MAC地址"></el-input>
              <el-button size="small" style="margin-top:1em;">&ensp;查询</el-button>
            </div>
          </div>
        </div>
        <div class="table">
          <el-table :data="equipment" style="width: 100%;" :border="true">
            <el-table-column prop="id" label="序号" width="80"></el-table-column>
            <el-table-column prop="name" label="设备名称" width="150"></el-table-column>
            <el-table-column prop="bind_time" label="绑定时间" width="150"></el-table-column>
            <el-table-column prop="undbind_time" label="解绑时间" width="150"></el-table-column>
            <el-table-column prop="username" label="所属用户" width="150"></el-table-column>
            <el-table-column prop="mac" label="MAC地址" width="150"></el-table-column>
            <el-table-column prop="address" label="设备地区" width="150"></el-table-column>
            <el-table-column prop="status" label="设备状态"></el-table-column>
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
      </el-main>
    </el-container>
  </div>
</template>

<script>
const equipmentList = () => {
  let data = []
  for (let i = 0; i < 20; i++) {
    data[i] = {
      id: i,
      name: 'Qi Vacuum',
      bind_time: '2018/01/01 10:00',
      undbind_time: '2018/01/11 10:00',
      username: 'jakd',
      mac: '192.168.191.1',
      address: '纽约',
      status: '已绑定'
    }
  }
  return data
}
export default {
  data () {
    return {
      activeName: 'first',
      name: '',
      equipment: equipmentList(),
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
      this.$router.push({ path: 'UserInfo/' + id })
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
  margin-top: 1.5em;
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
.data_chat{
  border: 1px solid #888;
  text-align: center;
  margin: 2em 0;
  padding: 2em 0;
}
.data_num{
  margin-bottom: 0.5em;
  font-size: 36px;
}
</style>
