`use strict`;

const gulp = require(`gulp4`);             // подключаем gulp   
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');




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

gulp.task('js', function () {
    return gulp.src([
        './node_modules/jquery/dist/jquery.js',
        './node_modules/owl.carousel2/dist/owl.carousel.min.js',
        './src/js/**/*.js'
    ])
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./dist/js'));
});



gulp.task('watch', function () {
    gulp.watch('./src/style/sass/**/*.sass', gulp.series('sass'));
    gulp.watch('./src/js/**/*.js', gulp.series('js'));
  });


gulp.task('default', gulp.series(
    gulp.parallel( 'sass' ),
    gulp.parallel( 'js' ),
    gulp.parallel( 'server' , 'watch' )
));









   










