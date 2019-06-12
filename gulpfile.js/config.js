var tmp = '.tmp';
var publicAssets = `${tmp}/build/assets`;
var sourceAssets  = './app/assets';
var nodeModules = './node_modules';

var config = {
  publicAssets: publicAssets,
  sourceAssets: sourceAssets,
};

// CLEAN
config.clean = {
  src: [
    `${tmp}`,
  ]
};

// IMAGES
config.images =  {
  src: [sourceAssets + '/images/**/*.{jpg,jpeg,png,gif,svg}', '!' + sourceAssets + '/images/**/sprite*/*.svg'],
  dest: publicAssets + '/images',
};

// STYLESHEETS
config.stylesheets =  {
  src: sourceAssets + '/stylesheets/**/*.scss',
  dest: publicAssets + '/stylesheets',
  sass: {
    includePaths: [nodeModules],
    outputStyle: 'compressed'
  },
  autoprefixer: {
    browsers: ['last 2 versions', 'ie >= 10']
  }
};

// JAVASCRIPTS
config.javascripts = {
  src: sourceAssets + '/javascripts/**/[^_]*.js',
  src_watch: sourceAssets + '/javascripts/**/*.js',
  dest: publicAssets + '/javascripts',
  include: {
    includePaths: [sourceAssets + '/javascripts', nodeModules],
  },
  minify: {
    ext: {
      min: '.js'
    }
  }
};

// FONTS
config.fonts = {
  src: sourceAssets + '/fonts/**/*.{svg,eot,ttf,woff,woff2}',
  dest: publicAssets + '/fonts',
};

// SPRITE
config.sprite = {
  src: sourceAssets + '/images/**/sprite*/',
  src_watch: sourceAssets + '/images/**/sprite*/**/*.svg',
  dest: publicAssets + '/images',
};

// BROWSERSYNC
config.browsersync = {
  port: 3001,
  logSnippet: false,
  open: false,
  socket: {
    domain: 'localhost:3001'
  }
};

// DELIVER
var tmpDeliver = `${tmp}/deliver`;

config.deliver = {
  copy: {
    src_build: ['./build/**'],
    src_sources: './app/assets/**/*',
    dest_build: `${tmpDeliver}/build`,
    dest_sources: `${tmpDeliver}/sources`
  },
  zip: {
    prefix: 'livrable-',
    src: `${tmpDeliver}/**`,
    dest: './livrables'
  }
};

// STYLEGUIDE
// var styleguideDest = './app/styleguide';

// config.styleguide = {
//   src: './hologram_config.yml',
//   src_assets: './vendor/hologram/assets/**/*.{css,js}',
//   src_browsersync: './app/styleguide/**.html',
//   src_watch: [
//     './hologram_config.yml',
//     './vendor/hologram/**',
//     `${styleguideDest}/**`
//   ],
//   dest_assets: styleguideDest,
//   dest_browsersync: styleguideDest,
//   include: {
//     includePaths: [nodeModules],
//   },
// };

// config.deliver.copy.src_build.push('!./build/styleguide', '!./build/styleguide/**');
// config.deliver.copy.src_styleguide = ['./build/styleguide/**/*', './build/asset*/**/*'];
// config.deliver.copy.dest_styleguide = `${tmpDeliver}/styleguide`;

// config.clean.src.push(`${styleguideDest}`);

// Export
module.exports = config;
