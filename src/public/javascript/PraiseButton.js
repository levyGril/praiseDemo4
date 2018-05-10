/**
 * Created by levy on 2018/3/26.
 */
//import API from './API.js';

import css from "../stylesheet/index.css";

class PraiseButton{

    /**
     * [praise 该方法返回当前实例的点赞次数]
     * @return {[type]} [description]
     */
    clickAction(){
        axios.get('/index/praise').then(function (res) {
            console.log(res);
        }).catch(function (err) {
            console.log(err);
        });

    }

}

export default PraiseButton;

