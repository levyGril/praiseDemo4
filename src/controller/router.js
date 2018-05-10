/**
 * Created by levy on 2018/4/8.
 */
import Router from 'koa-router';
const router = new Router();
import praiseController  from './praiseController';

router.get('/', (ctx, next) =>{
    ctx.body="hello";
});

//首页页面渲染
router.get('/index/index', praiseController.index());

//拇指页面渲染
router.get('/index/thumb', praiseController.thumb());

//星星页面渲染
router.get('/index/star', praiseController.star());

// 点赞数记录
router.get('/index/praise',praiseController.updatePraiseCount());

module.exports = router;
