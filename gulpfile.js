`use strict`;

const gulp = require(`gulp4`);             // подключаем gulp   
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');




gulp.task('server', function() {
    
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    browserSync.watch('./**/*.*').on('change', browserSync.reload);
});


gulp.task('sass', function () {
    return gulp.src('./style/sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer())
      .pipe(gulp.dest('./style/css'));
  });


gulp.task('sass:watch', function () {
    gulp.watch('./style/sass/**/*.scss', gulp.series('sass'));
  });


gulp.task('start', gulp.series(gulp.parallel( 'server' , 'sass:watch' )));









   










