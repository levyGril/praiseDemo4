/**
 * Created by levy on 2018/4/15.
 */
import rp from 'request-promise';

class PraiseService {

    constructor(ctx){
        this.ctx = ctx;
    }

    updatePraiseNum(){
        const options = {
            method: 'GET',
            uri: 'http://localhost/praiseApiService.php'
        };

        return new Promise((resolve, reject)=>{
            rp(options)
                .then(function (parsedBody) {
                    const info = JSON.parse(parsedBody);
                    resolve({data: info.result});
                })
                .catch(function (err) {
                   reject({});
                });
        });
    }

}

export default PraiseService;