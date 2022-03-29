import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta:["首页"],
    children:[
    {path:"",name:"mm",component:()=>import("../views/homes/index.vue")},
    {path:"2-1",meta:["Example","Table"],component:()=>import("../views/homes/yi.vue")},
    {path:"2-2",meta:["Example","Tree"],component:()=>import("../views/homes/er.vue")},
    {path:"3",meta:["From","index"],component:()=>import("../views/homes/Form.vue")},
    {path:"1-4-1-1",meta:["Nested","xuan一"],component:()=>import("../views/Nested/Nest1.vue")},
    {path:"1-4-1-2",meta:["Nested","xuan二"],component:()=>import("../views/Nested/Nest2.vue")},
    {path:"5",meta:["Exter","1"],component:()=>import("../views/homes/Exter.vue")},

    ]
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path:"/form",
    name:"MyFrom",
    component:()=>import("../views/MyForm.vue")
  },{
    path:"/login",
    name:'MyLogin',
    component:()=>import("../views/MyLogin.vue")
  },




];

const router = new VueRouter({
  routes,
});

router.beforeEach(function(to,from,next){
  console.log(to,from)
  if(to.path==="/login"){
    next()
  }else{
    let token = localStorage.getItem("token")
    if(!token)return next({path:"/login"})
    if(token)return next()
  }
}) 

export default router;
