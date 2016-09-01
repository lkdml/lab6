var gulp = require('gulp');

gulp.task('nombreTarea', function() {
	  // codigo de la tarea
	  console.log("mi nombre es TAREA");
	});

//var uglify = require('gulp-uglify');

gulp.task('minjs', function() {
    		gulp.src('app/js/*.js') // carpeta de origen
        	.pipe(uglify())
	        .pipe(gulp.dest('app/dist')); // carpeta de destino
	   });

var server = require('gulp-server-livereload');

gulp.task('serve', ['nombreTarea'], function() {
	gulp.src('app')
  .pipe(server({
	  port: 8100,
	  defaultFile: 'index.html',
	  livereload: true,
	  open: true
    }));
});

gulp.task('watch', function(){
	gulp.watch('app', ['nombreTarea']);
});