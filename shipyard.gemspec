lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'shipyard-framework/version'

Gem::Specification.new do |spec|
  spec.name          = 'shipyard-framework'
  spec.version       = Shipyard::VERSION
  spec.authors       = ['Codeship']
  spec.email         = ['design@codeship.com']
  spec.summary       = 'A lightweight CSS framework for developing mobile-first projects in Ruby on Rails.'
  spec.homepage      = 'https://github.com/codeship/shipyard'
  spec.license       = 'MIT'

  # Rails Dependencies
  spec.add_runtime_dependency 'actionview'
  spec.add_development_dependency 'bundler'
  spec.add_development_dependency 'sass', '~> 3.4', '>= 3.4.22'
  spec.add_development_dependency 'rspec', '~> 3.6'
  spec.add_development_dependency 'percy-cli', '~> 1.3.1'
  spec.add_development_dependency 'html-proofer', '~> 3.15', '>= 3.15.3'
  spec.add_development_dependency 'jekyll','~> 4.1', '>= 4.1.1'
  spec.add_development_dependency 'jekyll-assets'

  spec.files = Dir['app/**/*']
  spec.files += Dir['lib/**/*']
  spec.files += Dir['assets/**/*']
end
