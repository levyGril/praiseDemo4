/**
 * Created by levy on 2018/4/10.
 */
import path from 'path';

const config = {
    // 启动端口
    port: 3009,
    staticDir: path.join(__dirname,'..'),
    viewDir: path.join(__dirname,'..','views')
};

export default config;