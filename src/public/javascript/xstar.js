/**
 * Created by levy on 2018/5/8.
 */
import PraiseButton from './PraiseButton.js';
const f = new PraiseButton();
xtag.register('x-star', {
    content:
        `
        <div id="starSys">
            <ul class="star">
                <li><a href="#" title="1" class="one-star"></a></li>
            </ul>
        </div>
        `
    ,
    methods: {
        praise: function () {
            f.clickAction();
            let animation = $(".one-star");
            animation.addClass('on');
            //_this.num = add(_this.num);
            setTimeout(function () {
                animation.removeClass('on');
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