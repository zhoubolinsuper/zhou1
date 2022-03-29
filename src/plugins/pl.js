
//防抖插件
let Mypl = function(Vue){
    Vue.prototype.debouncefn = function(fn,wait) {
        let timer = null
        return function() {
            clearTimeout(timer)
            timer = setTimeout(function(){
                fn()
            },wait)
        }
    }
    Vue.prototype.throttlefn = function() {
        console.log("====")
    }
}
export default Mypl