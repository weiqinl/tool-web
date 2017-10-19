var path = require('path')
var gulp = require('gulp')
var cleanCSS = require('gulp-clean-css')
var cssWrap = require('gulp-css-wrap')
gulp.task('css-wrap', function () {
	return gulp.src(path.resolve('./element-#20a0ff/index.css'))/* 找需要添加命名空间的css文件，支持正则表达式 */
		.pipe(cssWrap({
			selector: '.custom-20a0ff' /* 添加的命名空间 */
		}))
		.pipe(cleanCSS())
		.pipe(gulp.dest('dist/20a0ff-index')) /* 存放的目录 */
})