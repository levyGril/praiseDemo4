/**
 * Created by levy on 2018/5/8.
 */
import pjax from 'jquery-pjax';
$('.praise-btn').bind('click',function(){
    var btnName=$(this).attr('title');
    console.log(btnName);
    $.pjax({
        url: '/index/'+btnName,
        container: '#main'
    })
});