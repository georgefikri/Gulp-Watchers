'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
const watchSass = require("gulp-watch-sass");
var gutil = require('gulp-util');
const babel = require('gulp-babel');
sass.compiler = require('node-sass');

//convert SASS to CSS
gulp.task('sass', function () {
  return gulp.src('./css/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/compiled'));
});

//watch SASS
gulp.task("watch", () => watchSass([
    "./css/sass/*.scss"
  ])
    .pipe(sass())
    .pipe(gulp.dest("./css/compiled")));


//convert ES6 to ES5
gulp.task('default', () =>
gulp.src('./js/*')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(gulp.dest('./js/compiled'))
);

//watch JS 
gulp.task("watchJS", () => {
    gulp.watch('./js/*', gulp.series("default"));
})
gulp.task("newJS", gulp.series("watchJS"));


//watch both css & JS 
gulp.task('watchssss', function() {
    gulp.watch('./css/sass/*.scss', gulp.series('sass'));
    gulp.watch('./js/*', gulp.series('default'));
});

