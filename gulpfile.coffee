gulp         = require 'gulp'
sync         = require('browser-sync').create()
notify       = require 'gulp-notify'

coffee       = require 'gulp-coffee'

source       = require 'vinyl-source-stream'
buffer       = require 'vinyl-buffer'
uglify       = require 'gulp-uglify'
clean        = require 'gulp-clean-css'
htmlmin      = require 'gulp-htmlmin'
concat       = require 'gulp-concat'
stylus       = require 'gulp-stylus'
pug          = require 'gulp-pug'
sourcemaps   = require 'gulp-sourcemaps'
gulpif       = require 'gulp-if'
fs           = require 'fs-extra'
objectus     = require 'objectus'

axios        = require 'axios'

env = 'dev'

dirs =
  coffee: 'resources/coffee'
  pug:    'resources/views'
  stylus: 'resources/stylus'
  svg:    'resources/vector'

config = {}

objectify = (complete) ->
  objectus 'config/', (error, result) ->
    notify error if error
    config = result

    axios.get('https://basal.tech/api/structures/?client=' + config.basal.client)
      .then (response) ->
        config.blog = response.data.data[0]
        fs.writeFileSync(dirs.coffee + '/config.coffee', "config = " + JSON.stringify(config) + ";", 'utf8')
        #complete?()
        console.log 'fetching config'
      .catch (error) ->
        console.log error

objectify()

gulp.task 'objectus', objectify

gulp.task 'goprod', ->
  env = 'prod'

gulp.task 'vendor', ->

  gulp.src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/moment/min/moment.min.js',
    'node_modules/jquery.scrollto/jquery.scrollTo.js',
  ])

  .pipe(gulpif(env != 'dev',uglify()))
  .pipe(concat('vendor.js'))
  .pipe gulp.dest('public/javascript/')

  gulp.src([
  ])

  .pipe(gulpif(env != 'dev',clean()))
  .pipe(concat('vendor.css'))
  .pipe gulp.dest('public/css/')

gulp.task 'coffee', ->
  gulp.src(dirs.coffee + '/*.coffee')
    .pipe(gulpif(env == 'dev', sourcemaps.init(loadMaps: true)))
    .pipe(coffee(bare: true)
      .on('error', notify.onError((error) ->
        title: "Coffee error"
        message: error.message + "\r\n" + error.filename + ':' + error.location.first_line
        sound: 'Pop'
      )))
    .pipe(gulpif(env != 'dev',uglify()))
    .pipe(concat('bundle.js'))
    .pipe(gulpif(env == 'dev',sourcemaps.write()))
    .pipe(gulp.dest('./public/javascript'))
    .pipe(sync.stream())

gulp.task 'stylus', ->
  #objectify ->
    gulp.src(dirs.stylus + '/main.styl')
      .pipe(gulpif(env == 'dev',sourcemaps.init(loadMaps: true)))
      .pipe(stylus(rawDefine: config: config)
      .on('error', notify.onError((error) ->
        title: 'Stylus error: ' + error.name
        message: error.message
        sound: 'Pop'
      )))
      .pipe(gulpif(env != 'dev',clean()))
      .pipe(gulpif(env == 'dev',sourcemaps.write()))
      .pipe(gulp.dest('public/css/'))
      .pipe(sync.stream())

gulp.task 'pug', ->
  objectify ->
    gulp.src(dirs.pug + '/**/index.pug')
      .pipe(pug(
        pretty: true
        locals:
          config: config
      ).on('error', notify.onError((error) ->
        title: 'Pug error: ' + error.name
        message: error.message
        sound: 'Pop')))
      .pipe(gulpif(env != 'dev',htmlmin(
        collapseWhitespace: true
        processScripts: ['application/ld+json', 'text/javascript']
      )))
      .pipe(gulp.dest('public'))
      .pipe sync.stream()

    #for entry in config.blog.entries
    config.blog.entries.forEach (entry) ->

      dir = dirs.pug + '/blog/article/' + entry.name + '/'

      if (!fs.existsSync(dir))
        fs.mkdirSync dir
        try
          fs.copySync(dirs.pug + '/blog/article/template.pug', dir + 'article.pug')
          console.log 'copy success'
        catch e then console.log e

      gulp.src(dir + 'article.pug')
        .pipe(pug(
          pretty: true
          locals:
            config: config
            entry: entry
            name: entry.name
        ).on('error', notify.onError((error) ->
          title: 'Pug error: ' + error.name
          message: error.message
          sound: 'Pop')))
        .pipe(gulpif(env != 'dev',htmlmin(
          collapseWhitespace: true
          processScripts: ['application/ld+json', 'text/javascript']
        )))
        .pipe(gulp.dest('public/blog/article/' + entry.name + '/'))
        .pipe sync.stream()

        fs.removeSync('public/blog/article/' + entry.name + '/index.html')
        fs.moveSync(
          'public/blog/article/' + entry.name + '/article.html',
          'public/blog/article/' + entry.name + '/index.html'
        )

watch = ->
  gulp.watch 'config/**/*', ['objectus','pug','stylus']
  gulp.watch [dirs.coffee + '/**/*.coffee','!' + dirs.coffee + '/config.coffee'], ['coffee']
  gulp.watch dirs.stylus + '/**/*.styl', ['stylus']
  gulp.watch dirs.pug + '/**/*.pug', ['pug']
  gulp.watch dirs.svg + '/**/*.svg', ['pug']
  gulp.watch 'public/images/**/*', ['pug']

gulp.task 'sync', ->
  sync.init
    notify: false
    open: false
    server: baseDir: 'public/'
    ghostMode:
      clicks: false
      forms: false
      scroll: false
    scrollProportionally: false
  watch()

gulp.task 'watch', watch
gulp.task 'default', ['objectus','stylus','pug','vendor','coffee']
gulp.task 'prod', ['goprod','default']
