var gulp        = require('gulp');
var $           = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;


var sassPaths = [
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

// SASS Compiler + autoprefixer
gulp.task('sass', function() {
  return gulp.src('scss/template.scss')
    .pipe($.sass({
      includePaths: sassPaths
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
});

// CSS Minify + rename to *.min.css
gulp.task('minify-css', ['sass'], function() {
  return gulp.src(['css/*.css', '!css/*.min.css'])
    .pipe($.cleanCss())
    .pipe($.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('css'));
});

// Static Server + watching scss/html files
gulp.task('serve', function() {

    browserSync.init({
      server: "./"
    });

    gulp.watch("./scss/*.scss", ['minify-css']);
    gulp.watch(["./*.html", "./css/*.min.css"]).on('change', reload);
});

// Tasks
gulp.task('default', ['serve', 'minify-css']);
