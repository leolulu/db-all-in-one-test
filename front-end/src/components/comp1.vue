<template>
    <div>
        <el-table :data="tabledata">
            <el-table-column prop="id" label="ID"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="url" label="网址"></el-table-column>
            <el-table-column prop="country" label="国家"></el-table-column>
            <el-table-column prop="alexa" label="AXELA"></el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>