/**
 * Created by levy on 2018/4/30.
 */

import PraiseButton from './PraiseButton.js';
const f = new PraiseButton();
xtag.register('x-praise', {
    content:
    '<div id="app" class="container">'+
    '    <div class="wrapper">'+
    '        <div class="wrist"></div>'+
    '        <div class="one"></div>'+
    '       <div class="circle"></div>'+
    '    </div>'+
    '    <span class="hide" id="animation">+1</span>'+
    '</div>',
    methods: {
        praise: function () {
            f.clickAction();
            let animation = $("#animation");
            animation.addClass('num');
            //_this.num = add(_this.num);
            setTimeout(function () {
                animation.removeClass('num');
            }, 800);

           // animation.text(`+${_this.num}`);
        },
        throttle: function(fn, wait){
            var timer;
            return function (...args) {
                if(!timer){
                    timer = setTimeout(()=> timer=null,wait); //强制置为空
                    return fn.apply(this, args);
                }
            }
        }
    },
    events: {
        click: function (e) {
            let _this = this;
            // if (e.target.id=='app') {
            _this.throttle(_this.praise(), 500);
            // }
        }
    }
});

// throttle(()=> { // //函数稀释
//     console.log("进入稀释函数");
//     $("#animation").addClass('num');
//     console.log(this.num);
//     this.num = add(this.num);
//     console.log(this.num);
//     setTimeout(function () {
//         $("#animation").removeClass('num');
//     }, 1000);
//
//     // 页面的点赞更新
//     $("#animation").text(`+${this.num}`);
// }, 500)

