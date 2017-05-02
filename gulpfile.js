const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

const babelOptions = {
    presets: ['es2015', 'stage-0'],
    plugins: [
        'typecheck',
        'transform-runtime',
        'transform-flow-strip-types'
    ]
}
 
gulp.task('dist:default', () => {
    return gulp.src('src/index.js')
        .pipe(babel(babelOptions))
        .pipe(rename('request.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('dist:minify', () => {
    return gulp.src('src/index.js')
        .pipe(babel(babelOptions))
        .pipe(uglify())
        .pipe(rename('request.min.js'))
        .pipe(gulp.dest('dist'));
});