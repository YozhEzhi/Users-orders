module.exports = (gulp, plugins, config) => (tasks) => {
  tasks.forEach(task => gulp.task(task, require(`../${task}`)(gulp, plugins, config)));
};
