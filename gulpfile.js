/**
 * Created by mike on 15-8-21.
 */
// 先引入依赖模块
var gulp = require("gulp"), browserSync = require("browser-sync");

// 自动刷新 browser-sync start
gulp.task('browser',function(){
    browserSync({
        // host: 172.16.157.1,
        port: 8888,
        open: true,
        // 路径显示/d 开始
        //startPath: "/d",
        //timestamps:false,
        /*server: {
            directory: true,
            middleware: function(req,res,next){
                console.log("中间件");
                next();
            },
            baseDir: './'
        },*/
        // 指定浏览器
        // browser: "google chrome" // 或  ["google chrome","firefox"]
        // 延迟刷新，默认0
        reloadDelay: 1000,
        // 是否载入css修改，默认true
        injectChanges: false
    });
});
gulp.task('bro',function(){
    gulp.src('./views/**.html')
        .pipe(browserSync.reload({stream:true}));
});
gulp.task('default',['bro','browser'],function(){
    gulp.watch('./views/**.html',['bro']);
});
// 自动刷新 browser-sync end