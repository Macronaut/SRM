const
  //------------- GULP
  gulp = require('gulp'),

  //------------- GLOBAL

  browserSync = require('browser-sync').create(),
  runSequence = require('run-sequence'),
  inject = require('gulp-inject'),
  watch = require('gulp-watch'),

  //------------- SASS
  beautify = require('gulp-cssbeautify'),
  sass = require('gulp-sass');

gulp.task('sync', function() {
    browserSync.init({
        server: { baseDir: "./prod" }
    })
})

gulp.task('css', function() {
  return gulp.src('./dev/assets/sass/**/*.scss')
    .pipe(sass())
    .pipe(beautify())
    .pipe(gulp.dest('./prod/assets/css'))
})

gulp.task('js', function() {
  return gulp.src('./dev/assets/js/**/*.js')
    .pipe(gulp.dest('./prod/assets/js'))
})

gulp.task('html', function() {
  return gulp.src('./dev/index.html')
    .pipe(gulp.dest('./prod'))
})

gulp.task('html:injects', function() {
  return gulp.src( './prod/index.html' )
  .pipe(inject(gulp.src(["./prod/assets/css/**/*.css", "./prod/assets/js/**/*.js"], {read: false}), {relative: true, removeTags: true}))
  .pipe(gulp.dest( './prod' ))
})

gulp.task('browsersync:reload', function() { browserSync.reload(); })

gulp.task('watch', function() {
  gulp.watch('./dev/assets/sass/**/*.scss', function() { runSequence('css', 'browsersync:reload'); })
  gulp.watch('./dev/assets/js/**/*.js', function() { runSequence('js', 'browsersync:reload'); })
  gulp.watch('./dev/index.html', function() { runSequence('html','html:injects', 'browsersync:reload'); })
});

gulp.task('default', function(callback) {
  runSequence('css', 'js', 'html', 'html:injects', 'watch', 'sync');
});
