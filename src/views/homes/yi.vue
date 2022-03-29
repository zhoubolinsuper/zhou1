<template>
    <div class="bor">
        <el-table :data="arrs" >
            <el-table-column prop="id" label="id"></el-table-column>
                
            
            <el-table-column prop="title" label="title"></el-table-column>
                
            
            <el-table-column prop="Author" label="Author"></el-table-column>

            <el-table-column prop="Page" label="Page"></el-table-column>

            <el-table-column prop="Status" label="Status"></el-table-column>

            <el-table-column prop="Dis" label="Dis"></el-table-column>

        </el-table> 
    

    </div>
</template>
<script>
import instance from "../../api/index"
export default {
    name:"HomeIndex",
    data(){
        return {
            arrs:null,
            // form:{
            //     id:0,
            //     name:"张三",
            //     text:"xxxx"
            // },
            // formLabelWidth:"120px",
            // i:0
        }
    },
    methods: {
  
    handleEdit(a,b){
        this.i=0
        console.log(a,b)
        this.dialogFormVisible = !this.dialogFormVisible
        this.form.id=b.id
        this.form.name=b.name
        this.form.text=b.text
    },  
  
     async  getHomeIndex(){
            let {data}= await instance.get("/homeindex")
            console.log(data)
            this.arrs=data
        },

    },
    created(){
        this.getHomeIndex()
    }
}
</script>
<style scoped>
    .bor{
        border: 1px solid rgb(223, 219, 219);
    }
    .addbtn{
        float: right;
        margin-right: 140px;
        margin-top: 40px;
    }
</style>

