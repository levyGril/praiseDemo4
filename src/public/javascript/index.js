/**
 * Created by levy on 2018/4/9.
 */
window.add = function (num) {
    return num + 1;
};

// 稀释函数
window.throttle = function(fn, wait){
    var timer;
    return function (...args) {
        if(!timer){
            timer = setTimeout(()=> timer=null,wait); //强制置为空
            return fn.apply(this, args);
        }
    }
};