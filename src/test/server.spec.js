/**
 * Created by levy on 2018/4/15.
 */
import requestsuper from 'supertest';
import app from './index.js';

//打开端口.端口测试 的时候要把项目关掉，否则会报冲突的错误
function request() {
    return requestsuper(app.listen())
}

describe('GET /index/praise', function() {
    it('respond with json', function(done) {
        request()
            .get('/index/praise')
            // .set('Accept', 'application/json')
            // .expect('Content-Type', /json/)
            .expect(200, done);
    });
});