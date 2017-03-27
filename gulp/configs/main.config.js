module.exports = {
  paths: {
    sass: './sass/**/*.scss',
    entry: './js/index.js',
    js: './js/**/*.jsx',
    html: './*.html',
    dist: './public',
    images: './images/**/*',
  },
  output: {
    js: 'js',
    css: 'css',
    images: 'images',
  },
  production: false,
};
