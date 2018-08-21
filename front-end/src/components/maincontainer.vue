<template>
    <div>
        <el-container>
            <el-header class="elhead">
                <el-button icon="el-icon-search" circle @click="get" class="head-logo"></el-button>
            </el-header>
            <el-container class="mymian">
                <el-aside class="elaside" width='250px'>
                    <el-menu>
                        <el-menu-item :index="index+'i'" v-for='(i,index) in menuid' :key='index'>选项{{i}}</el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main class="elmain">
                    <el-table :data="tabledata">
                        <el-table-column prop="id" label="ID"></el-table-column>
                        <el-table-column prop="name" label="姓名"></el-table-column>
                        <el-table-column prop="url" label="网址"></el-table-column>
                        <el-table-column prop="country" label="国家"></el-table-column>
                        <el-table-column prop="alexa" label="AXELA"></el-table-column>
                    </el-table>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      menuid: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16],
      tabledata: []
    };
  },
  methods: {
    get() {
      axios
        .get("http://127.0.0.1:3000/user")
        .then(res => {
          console.log(res.data);
          this.tabledata = res.data;
        })
        .catch(err => console.log("eooro: ", err));
    }
  }
};
</script>

<style scoped lang='scss'>
.elhead {
  background-color: #fa7878;
}
.elaside {
  background-color: #fff;
  height: 800px;
}
.elmain {
  background-color: #fff;
  height: 800px;
  padding-bottom: 0px;
}
.head-logo {
  vertical-align: middle;
}
.mymian {
  border-bottom: 1px solid #ddd;
}
</style>