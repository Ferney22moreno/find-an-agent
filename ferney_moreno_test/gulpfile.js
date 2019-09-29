const gulp = require('gulp'),
    sass = require('gulp-sass'),
    babel = require('gulp-babel'),
    open = require('gulp-open'),
    connect = require('gulp-connect'),
    minify = require('gulp-minify'),
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps'),
    minifyCSS = require('gulp-minify-css'),
    watch = require('gulp-watch');


gulp.task('connect', function () {
    connect.server({
        root: './',
        port: 8000,
        livereload: true
    });
});

gulp.task('open', function(){
    gulp.src('./index.html')
        .pipe(open({uri: 'http://localhost:8000/'}));
});

gulp.task('styles', function() {
    gulp.src(['./assets/sass/*.scss'])
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(gulp.dest('./assets/'))
        .pipe(connect.reload());
})

gulp.task('scripts', function() {
    gulp.src(['./assets/js/*.js'])
        .pipe(minify({
            ext:{
                src:'./assets/',
                min:'.min.js'
            },
        }))
        .pipe(gulp.dest('./assets/'))
        .pipe(connect.reload());
})

gulp.task('html', function() {
    gulp.src("./*.html")
        .pipe(gulp.dest('./'))
        .pipe(connect.reload());
})

gulp.task('files', function(){
    gulp.watch('./*.html', ['html'])
    gulp.watch('./assets/sass/*.scss', ['styles']);
    gulp.watch('./assets/js/*.js', ['scripts']);
})

gulp.task('watch', ['html','styles', 'scripts', 'connect', 'open', 'files']);

gulp.task('run', ['connect', 'open', 'files']);
