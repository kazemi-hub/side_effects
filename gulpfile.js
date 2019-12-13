var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var browserSync = require('browser-sync').create();
gulp.task('browserSync', function() {
    browserSync.init({
       server: {
          baseDir: 'build'
       },
    })
})

gulp.task('js', function(){
    gulp.src('src/scripts/*.js')
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/scripts/'))
    .pipe(browserSync.reload({
        stream: true
     }));
});

gulp.task('css',function(){
    gulp.src('src/styles/*.css')
    .pipe(concat('styles.css'))
    .pipe(minify())
    .pipe(gulp.dest('build/styles/'))
    .pipe(browserSync.reload({
        stream: true
     }));
});

gulp.task('default', ['browserSync','js','css'],function(){
    gulp.watch('src/styles/*.css', function() {
        gulp.run('css');
     });
     gulp.watch('src/scripts/*.js', function() {
        gulp.run('js');
     });
})