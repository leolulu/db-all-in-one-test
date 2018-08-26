<template>
  <div>
    <el-container>
      <el-header class="elhead">
        <el-button-group class='headerButtom'>
          <el-button icon="el-icon-search" circle @click="get" class="head-logo"></el-button>
          <el-button icon="el-icon-bell" @click='post'>POST</el-button>
        </el-button-group>
      </el-header>
      <el-container class="mymian">
        <el-aside class="elaside" width='250px'>
          <el-menu router>
            <el-menu-item :index="index" v-for='(i,index) in urllist' :key='index' :route='i.path'>选项{{i.name}}</el-menu-item>
          </el-menu>
        </el-aside>
        <el-main class="elmain">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import axios from "axios";
import comp1 from './comp1.vue'

export default {
  components: {
    comp1
  },
  data() {
    return {
      menuid: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16],
      urllist:[
        {name:1,path:'/page1'},
        {name:2,path:'/page2'},
        {name:3,path:'/page3'},
        {name:4,path:'/page4'},
        {name:5,path:'/page5'},
      ],
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
    },
    post() {
      axios
        .post(
          "http://127.0.0.1:3000/posttest?name=leo&shoe[color]=blue&shoe[type]=shit",
          {
            firstName: "Fred",
            lastName: "Flintstone"
          }
        )
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped lang='scss'>
.elhead {
  background-color: #fa7878;
  display: flex;
  align-items: center;
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