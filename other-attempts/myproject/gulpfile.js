'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
const babel = require('gulp-babel');

sass.compiler = require('node-sass');
 
//convert sass to css
gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
//convert es6 to es5
gulp.task('es6', () =>
    gulp.src('./es6/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('./newJS'))
);

//watch all tasks
gulp.task('watchAll', ()=>{
    gulp.watch('./sass/*.scss', gulp.series('sass'));
    gulp.watch('./es6/*.js', gulp.series('es6'));
});