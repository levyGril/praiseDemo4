/**
 * Created by levy on 2018/4/9.
 */
const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('babel', function () {
    return gulp.src(["src/**/*.js", "!src/public/**/*.js"])  //只编译node，排除public下面的文件 , "!src/public/**/*.js"
        .pipe(babel())
        .pipe(gulp.dest("./build"));
});

//在命令行gulp auto启动此任务
gulp.task('auto',function(){
    //监听文件修改，当文件修改则执行babel任务
    gulp.watch('src/**/*.js',['babel'])
});

gulp.task('default', ['babel', 'auto']); //默认开启这个任务