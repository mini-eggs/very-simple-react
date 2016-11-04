var gulp = require('gulp')
var uglify = require('gulp-uglifyjs')
var concat = require('gulp-concat')
var pump = require('pump')
var concatCss = require('gulp-concat-css')
var uglifycss = require('gulp-uglifycss')
var watch = require('gulp-watch')
var babel = require('gulp-babel')
var es2015 = require('babel-preset-es2015')
var react = require('babel-preset-react')
var browserify  = require('browserify')
var babelify = require('babelify')
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')
var uglify = require('gulp-uglify')
var sourcemaps = require('gulp-sourcemaps')
var livereload = require('gulp-livereload')

var filesCss = [
    'node_modules/material-design-lite/material.min.css',
    'src/css/*.css'
]

gulp.task('js-dev', function () {
    return browserify({entries: './src/javascript/main.js', debug: false})
        .transform("babelify", { presets: ["es2015", "react"] })
        .bundle()
        .pipe(source('bundle.min.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./src'))
});

gulp.task('js', function () {
    return browserify({entries: './src/javascript/main.js', debug: false})
        .transform("babelify", { presets: ["es2015", "react"] })
        .bundle()
        .pipe(source('bundle.min.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('./src'))
});

gulp.task('css', function () {
  return gulp.src(filesCss)
    .pipe(concatCss("bundle.min.css"))
    .pipe(uglifycss())
    .pipe(gulp.dest('src/'))
})

gulp.task('watch', function() {
    gulp.watch('src/javascript/**/*.*', ['js-dev'])
    gulp.watch('src/css/**/*.*', ['css'])
})

gulp.task('default', ['js', 'css'])