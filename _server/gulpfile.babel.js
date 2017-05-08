import connect from 'gulp-connect';
import gulp from 'gulp';

const PATH = {
	DEST: '../',
};

gulp.task('default', function() {
	connect.server({
		root: PATH.DEST,
		port: 9001,
		debug: true,
		livereload: true
	});
});