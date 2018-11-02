var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano') ;
var babel = require('gulp-babel') ;
var imagemin = require('gulp-imagemin');


gulp.task('sass',function(){
	 return gulp.src("./src/sass/*.scss").pipe(sass()).pipe(gulp.dest('src/css'));
})
gulp.task('css',function(){
	return gulp.src("./src/css/*.css").pipe(sass()).pipe(cssnano()).pipe(gulp.dest('dist/css'));
})

gulp.task('es6',function(){
	return gulp.src("./src/js/*.js")
	.pipe(babel({presets : ['@babel/env']}))
	.pipe(gulp.dest("./src/js6"));
})
gulp.task('js',function(){
	return gulp.src("./src/js6/*.js").pipe(uglify()).pipe(gulp.dest('dist/js'));
})

gulp.task('img',function(){
	return gulp.src("./src/img/*").pipe(imagemin()).pipe(gulp.dest('dist/img'));
})
gulp.task('images',function(){
	return gulp.src("./src/images/*").pipe(imagemin()).pipe(gulp.dest('dist/images'));
})

gulp.task('default',function(){
	gulp.watch('./src/css/*.css',['css']);
	gulp.watch('./src/js/*.js',['js']);
	gulp.watch('./src/js/*.js',['es6']);
	
})
gulp.task('scss',function(){
	gulp.watch('./src/sass/*.scss',['sass']);
})