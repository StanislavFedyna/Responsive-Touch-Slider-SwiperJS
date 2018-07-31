var gulp         = require('gulp'), 
    sass         = require('gulp-sass'), 
    browserSync  = require('browser-sync'), 
    csscomb      = require('gulp-csscomb'),
    del          = require('del');

gulp.task('sass', function(){
    return gulp.src('sass/**/*.scss') 
        .pipe(csscomb())
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('../Responsive-Touch-Slider-SwiperJS/css'))
        .pipe(browserSync.reload({stream: true})) 
});

gulp.task('browser-sync', function() { 
    browserSync({ 
        server: { 
            baseDir: '../Responsive-Touch-Slider-SwiperJS/'
        },
        notify: false
    });
});

gulp.task('watch', ['browser-sync'], function() {
    gulp.watch('sass/main.scss', ['sass']); 
    gulp.watch('*.html', browserSync.reload); 
});

