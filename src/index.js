/**
 * Created by levy on 2018/4/7.
 */

import Koa from 'koa';

const app = new Koa();

import staticCache from 'koa-static-cache';

import config from './config/default';

app.use(staticCache(config.staticDir, { dynamic: true }, {
    maxAge: 365 * 24 * 60 * 60
}));

import views from 'koa-views';
// import render from 'koa-views-render';

//配置模板解析器
app.use(views(config.viewDir,{
    map:{
        html:'swig'
    }
}));

// import bodyParser from 'koa-bodyparser'; // 引用一个中间件来处理提交的数据
// app.use(bodyParser());

import router from './controller/router'; //路由

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(config.port, function () {
    console.log(config.port+"koa server is running");
});

export default app;
