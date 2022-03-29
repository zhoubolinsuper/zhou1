let Mock=require("mockjs")
let data=[
    {id:0,title:"qwertyuiop",Author:"name",Page:"178",Status:"dart",Dis:"1629-05-05"},
    {id:1,title:"qwertyuiop",Author:"name",Page:"178",Status:"dart",Dis:"1629-05-05"},
    {id:2,title:"qwertyuiop",Author:"name",Page:"178",Status:"dart",Dis:"1629-05-05"},
    {id:3,title:"qwertyuiop",Author:"name",Page:"178",Status:"dart",Dis:"1629-05-05"},
    {id:4,title:"qwertyuiop",Author:"name",Page:"178",Status:"dart",Dis:"1629-05-05"},
    {id:5,title:"qwertyuiop",Author:"name",Page:"178",Status:"dart",Dis:"1629-05-05"},
]
Mock.mock("/api/homeindex","get",function(config){
    console.log(config)
    return data
})

Mock.mock(/\/api\/homeindex\/\d/,"delete",function(config){
    console.log(config.url)
    let arr= config.url.split("/")
    let id=arr.pop()
    data.splice(id,1)
    // data =data.map(function(item,index){
    //     item.id=index
    // })  
    data.forEach(function(item,index){
        item.id  =index
    })
    return data 

})


Mock.mock(/\/api\/homeindex\/edit\/\d/,"put",function(config){
    console.log(config.url)
    let canshu = config.body //string
    canshu= JSON.parse(canshu) //obj

    let arr= config.url.split("/")
    let id=arr.pop()   //获取id、
    data[id].name = canshu.name
    data[id].text= canshu.text
    return data 
})

//添加
Mock.mock("/api/homeindex",'post',function(config){
    let obj=JSON.parse(config.body)
    let name=obj.name
    let text=obj.text
    data.push({id:data.length,name,text})
    return data;
})
