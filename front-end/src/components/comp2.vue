<template>
    <div>
        <el-form :model="form" label-position="left">

            <el-form-item label='ID'>
                <el-input v-model="form.id" placeholder="请输入内容" clearable></el-input>
            </el-form-item>
            <el-form-item label='NAME'>
                <el-input v-model="form.name" placeholder="请输入内容" clearable></el-input>
            </el-form-item>

            <el-from-item>
                <el-button @click='post'>插入数据</el-button>
            </el-from-item>
        </el-form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      form: {
        id: "",
        name: ""
      },
      methods: {
        post() {
          console.log('点击了post')
          axios
            .post(
              "http://127.0.0.1:3000/userpost",
              this.form
            )
            .then(res => console.log(res))
            .catch(err => console.log(err));
        }
      }
    };
  }
};
</script>

<style scoped>
</style>