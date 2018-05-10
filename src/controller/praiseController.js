/**
 * Created by levy on 2018/4/8.
 */

import PraiseService from '../model/praiseService';

const PraiseController = {

    // 首页
    index(){
        return async (ctx, next)=> {
            await ctx.render('index',{
                title: "praise thumb"
            });
        }
    },
    // 拇指组件
    thumb(){
        return async (ctx, next)=> {
            await ctx.render('thumb-component',{
                title: "thumb praise"
            });
        }
    },
    // 星星组件
    star(){
        return async (ctx, next)=> {
            await ctx.render('star-component',{
                title: "star praise"
            });
        }
    },
    updatePraiseCount(){
        return async (ctx, next)=> {
            const praiseModel = new PraiseService();
            ctx.body = await praiseModel.updatePraiseNum();
        }
    }
};

export default PraiseController;

