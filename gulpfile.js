var gulp 		 = require('gulp');
var pumbler 	 = require('gulp-plumber');
var browserSync  = require('browser-sync');
var reload 		 = browserSync.reload;
var less 		 = require('gulp-less');
var runSequence  = require('run-sequence');
//var imagemin     = require('gulp-imagemin');
var cp           = require('child_process');
var uglify 		 = require('gulp-uglify');
var concat 		 = require('gulp-concat');

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

//Monta o site do Jekyll
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    //Linux/Mac
    //return cp.spawn('jekyll', ['build'], {stdio: 'inherit'}).on('close', done);
	//WINDOWS
    return cp.exec('jekyll', ['build'], {stdio: 'inherit'}).on('close', done);
});

//Refaz o site e atualiza a página
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

//Espera até que o jekyll-build seja executado e então levanta o servidor utilizando o _site como pasta raiz
gulp.task('browser-sync', ['less', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});

// gulp.task('browser-sync',function () {
// 	browserSync({
// 		notify:true,
// 		port: 3000,
// 		proxy: "localhost:4000"
// 	});	
// });

//Less Task
gulp.task('less',function(){
	gulp.src('src/less/main.less')
	//.pipe(pumbler())	
	.pipe(less({		
		compress: true
	}))
	.pipe(gulp.dest('_site/assets/css'))
	.pipe(browserSync.reload({stream:true}))
	.pipe(gulp.dest('assets/css'))
});


//Js Task
gulp.task('js', function (){
	return gulp.src('src/js/**/*')
	.pipe(pumbler())
	.pipe(concat('main.js'))
	.pipe(uglify())
	.pipe(gulp.dest('assets/js'))
});

// Imagemin Task
 gulp.task('imagemin', function(){
 	return gulp.src('src/img/**/*')
 	.pipe(pumbler())
 	.pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true}))
 	.pipe(gulp.dest('assets/img'))
 });

gulp.task('watch', function (){
	gulp.watch('src/less/**/*.less', ['less']);
	gulp.watch('src/js/**/*.js', ['js']);
	gulp.watch('src/img/**/*.{jpg, png, gif}', ['imagemin']);
	gulp.watch(['*.html','index.html', '_includes/*.html', '_layouts/*.html', '_posts/*'], ['jekyll-rebuild']);
});

gulp.task('default', ['js', 'less', 'browser-sync', 'watch']);