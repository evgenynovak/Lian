`use strict`;

const gulp = require(`gulp4`);             // подключаем gulp   
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');




gulp.task('server', function() {
    
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
    browserSync.watch('./dist/**/*.*').on('change', browserSync.reload);
});


gulp.task('sass', function () {
    return gulp.src('./src/style/sass/main.sass')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer())
      .pipe(gulp.dest('./dist/css'));
  });


gulp.task('sass:watch', function () {
    gulp.watch('./src/style/sass/**/*.sass', gulp.series('sass'));
  });


gulp.task('default', gulp.series(gulp.parallel( 'server' , 'sass:watch' )));









   










