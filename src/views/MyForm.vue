<template>
  <div>
    <el-form :model="form" :rules="rules">
       <el-form-item prop="name">
          <!-- 用户名 -->
        <el-input v-model="form.name"></el-input>
       </el-form-item>
       <el-form-item prop="pw">
          <!-- 密码输入框 -->
        <el-input v-model="form.pw"></el-input>
       </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name:"MyForm",
  data(){
    return {
      form:{
        name:"yx",
        pw:"123"
      },
      rules:{
        name:[{type:"string",reqired:true,pattern:/zhangsan/,message:"用户不正确"}],
        pw:[]
      }
    }
  },
}
</script>