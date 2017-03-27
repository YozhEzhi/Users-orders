const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const register = require('./gulp/utils/register');
const config = require('./gulp/configs/main.config');

register(gulp, plugins, config)([
  'build-js',
  'build-scss',
  'copy',
  'serve',
  'watch',
  'deploy',
]);

gulp.task('build', gulp.parallel('build-js', 'build-scss', 'copy'));
gulp.task('default', gulp.series('build', gulp.parallel('watch', 'serve')));
