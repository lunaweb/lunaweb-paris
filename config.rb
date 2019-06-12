###
# Page options, layouts, aliases and proxies
###

# Layout
page "/", :layout => "front"

# No layout
page '*.xml', layout: false
page '*.json', layout: false
page '*.txt', layout: false

# Ignore .md file in assets
ignore "assets/**/*.md"

###
# Dirs
###

# Source & build dir
set :source, "app"

# Assets dir
set :css_dir, "assets/stylesheets"
set :js_dir, "assets/javascripts"
set :images_dir, "assets/images"
set :fonts_dir, "assets/fonts"
set :data_dir, "data"

###
# External pipeline
###
activate :external_pipeline,
  name: :gulp,
  command: "gulp #{build? ? "build" : "" }",
  source: ".tmp/build",
  latency: 0

###
# Extensions
###

# Deploy
activate :deploy do |config|
  branch_name = `git rev-parse --abbrev-ref HEAD`
  config.build_before  = false
  config.deploy_method = :rsync
  config.host          = 'lunaweb@preprod-03.lunaweb.io'
  config.path          = "/home/prototype/.../#{branch_name}"
  config.clean         = true
end

# DatoCMS
# For more informations read the DatoCMS section of the README
activate :dato

###
# Engines
###

# Slim
set :slim, { :pretty => false }

###
# Environnement-specific confirgurations
###

# Development-specific configuration
# configure :development do
#   activate :livereload
# end

# Build-specific configuration
configure :build do
  # Prevent Middleman from trying to compile Sass files since there are compiled in .tmp/build
  ignore "assets/**/*.scss"
  # Prevent Middleman to include individual svg files which composing sprites
  ignore "assets/images/**/sprite*/**"


  # activate :asset_hash
  activate :relative_assets
  set :relative_links, true
  set :slim, { :pretty => true }
end
