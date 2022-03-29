<template>
    <div>
       <el-container>
        <el-aside style="background-color:rgb(50,64,87)"  class="aside">
          <el-menu background-color="rgb(50 ,64,87)" text-color="#fff" :router="true">
            <el-menu-item class="item" index="/">
                <i class="el-icon-odometer"></i>
                <span slot="title">Dashbard</span>
            </el-menu-item> 
            <el-submenu index="2" class="item">
                <template slot="title">
                    <i class="el-icon-help"></i>
                    <span>Example</span>   
                </template>
                <el-menu-item-group>
                    <el-menu-item index="2-1">Table</el-menu-item>
                    <el-menu-item index="2-2">Tree</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
           <el-menu-item index="3">
                <i class="el-icon-menu"></i>
                <span slot="title">Form</span>
            </el-menu-item>
            <el-submenu index="4" class="item">
                <template slot="title">
                    <i class="el-icon-s-operation"></i>
                    <span>Nested</span>   
                </template>
                <el-submenu index="1-4">
                    <template slot="title">Menu1</template>
                    <el-submenu index="1-4-1">
                        <template slot="title">
                            <span>Menu1-1</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-4-1-1">选项1</el-menu-item>
                            <el-menu-item index="1-4-1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="1-4-2">
                        <template slot="title">
                            <span>Menu1-2</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-4-2-1">选项1</el-menu-item>
                            <el-menu-item index="1-4-2-2">选项2</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-submenu>
                 <el-menu-item index="2-4">
                    <span slot="title">Menu2</span>
                 </el-menu-item>


            </el-submenu>
            <el-menu-item index="5" class="item">
                    <i class="el-icon-edit-outline"></i>
                    <span>External Link<a href="https://panjiachen.github.io/vue-element-admin-site/#/"></a></span>   
            </el-menu-item>
            <el-menu-item index="6">
                <i class="el-icon-menu"></i>
                <span slot="title">Donate</span>
            </el-menu-item>


          </el-menu>
        </el-aside>
          <el-container>
            <el-header class="header">
                <div>
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item>Dashbard</el-breadcrumb-item>
                        <el-breadcrumb-item v-for="(item,index) in this.$route.meta" :key="index">{{item}}</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
               
                <div>
                    <el-dropdown>
                        <img src="@/assets/2.jpg" alt="" class="img">
                        <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>首页</el-dropdown-item>
                        <el-dropdown-item>退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
                
            </el-header>
            <el-main>
              <!-- 二级路由出口组件 -->
                
                <router-view/>
            </el-main>
          </el-container>
        
    </el-container>
    </div>
</template>
<script>
export default {
    name:"HomeView",

}
</script>


<style scoped>
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #eff2f7;
    }
    .aside{
        height: 100vh;
    }
    .item{
        background-color: rgb(50,64,87);
        color: #fff;
    }
     .aside .item span{

        color: #fff;
    }
    .img{
        width: 36px;
        height: 36px;
        border-radius: 50%;
    }
</style>