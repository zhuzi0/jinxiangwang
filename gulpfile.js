var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano') ;


gulp.task('css',function(){
	return gulp.src("./src/css/*.css").pipe(sass()).pipe(rename({"suffix" : ".min"})).pipe(cssnano()).pipe(gulp.dest('dist/css'));
})
gulp.task('js',function(){
	return gulp.src("./src/js/*.js").pipe(rename({"suffix" : ".min"})).pipe(uglify()).pipe(gulp.dest('dist/js'));
})

gulp.task('default',function(){
	gulp.watch('./src/css/*.css',['css']);
	gulp.watch('./src/js/*.js',['js']);
})