<template>
    <div class="login">
        <div class="myfrom">
            <div class="title">
                <h3>Login Form</h3>
            </div>
            <el-form :model="formdata" :rules="rules">
                <el-form-item prop="user"  class="input">
                    <el-input placeholder="用户名" v-model="formdata.user"></el-input>
                </el-form-item>
                <el-form-item prop="pw" class="input">
                    <el-input placeholder="密码"  v-model="formdata.pw" ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="btn" @click="submitfn">登录</el-button>
                </el-form-item>
            </el-form>
            <p class="pp">username: admin password: any</p>
        </div>
    </div>
</template>
<script>
import instance from '../api/index'
export default {
    name:"MyLogin",
    data(){
        let userfn=function(rule,value,callback){
            console.log(rule)
            let zhanghao=/^[a-z]\w{2,6}\w$/;
            if(zhanghao.test(value)) return
            return callback(new Error("用户格式错误"))
        }
        let pwfn=function(rule,value,callback){
            console.log(rule)
            let mima=/^\w{2,6}\$/;
            if(mima.test(value)) return
            return callback(new Error("密码格式错误"))
        }
        return{
            formdata:{
                user:"admin",
                pw:"123456",
                
            },
            rules:{
                user:[{validator : userfn, trigger :"blur"}],
                pw:[{validator : pwfn , trigger : "blur"}]
            },
            newdebouncefn:null 
            
        }
    },
    created(){
        this.newdebouncefn = this.debouncefn(this.loginfn,2000)
    },
    methods: {
        submitfn(){
            this.newdebouncefn()
        },
        async loginfn(){
            let user = this.formdata.user
            let pw = this.formdata.pw
            let {data} = await instance.post("/login",{user,pw})
            console.log(data.data)
            if(data.message === "fail") return this.$message.error("登录失败")
            if(data.message === "success"){
                localStorage.setItem("token",data.data.token)
                this.$message({
                    type:"success",
                    message:"登录成功",
                    duration:2000,
                    onClose:()=>{
                        this.$router.push({name:"mm"})
                    }
                })
            }
        }
    },
}
</script>
<style scoped>
    .pp{
        color:#fff;
        font-size:15px;
    }
  .login{
        width: 100vw;
        height: 100vh;
        background-color: #324057;
    }
    .login .title{
        width: 370px;
        position: absolute;
        left: 50%;
        margin-left: -185px;
        text-align: center;
        top: -80px;
    }
    .login>.myfrom>.title>h3{
        color: #fff;
        
    }
    .login .myfrom{
        width: 500px;
        height: 300px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -185px;
        margin-top: -130px;
        box-sizing: border-box;
        padding:40px 20px;
      
    }
    .login .btn{
        width: 100%;
    }
    .login .tip{
        font-size: 12px;
        color: red;
        text-align: center;
    }
</style>