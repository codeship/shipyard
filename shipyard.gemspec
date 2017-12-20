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
  # spec.add_runtime_dependency 'actionview', '~> 5.0'
  spec.add_runtime_dependency 'sprockets-es6', '~> 0.9.2'
  spec.add_runtime_dependency 'nokogiri'

  spec.add_development_dependency 'bundler', '~> 1.15'
  spec.add_development_dependency 'sass', '~> 3.5', '>= 3.5.2'
  spec.add_development_dependency 'rspec', '~> 3.6'
  spec.add_development_dependency 'percy-cli', '~> 1.2', '>= 1.2.9'
  spec.add_development_dependency 'html-proofer', '~> 3.7', '>= 3.7.4'
  spec.add_development_dependency 'jekyll', '~> 3.6'
  spec.add_development_dependency 'jekyll-assets', '~> 2.3'

  spec.executables = `git ls-files -- bin/*`.split("\n").map{ |f| File.basename(f) }
  spec.files = `git ls-files`.split("\n")
end
