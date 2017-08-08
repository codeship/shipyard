lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'shipyard-framework/version'

Gem::Specification.new do |spec|
  spec.name          = 'shipyard-framework'
  spec.version       = Shipyard::VERSION
  spec.authors       = ['Shipyard']
  spec.email         = ['ryanwilke@gmail.com']
  spec.summary       = 'A lightweight CSS framework for developing mobile-first projects in Ruby on Rails.'
  spec.homepage      = 'https://github.com/shipyard-framework'
  spec.license       = 'MIT'

  # Rails Dependencies
  # spec.add_runtime_dependency 'sassc-rails', '~> 1.3', '>= 1.3.0'
  # spec.add_runtime_dependency 'slim-rails', '~> 3.1', '>= 3.1.0'
  # spec.add_runtime_dependency 'sassc', '~> 1.11.4'
  spec.add_runtime_dependency 'actionview'

  spec.add_development_dependency 'bundler', '~> 1.15', '>= 1.15.3'

  spec.executables = `git ls-files -- bin/*`.split("\n").map{ |f| File.basename(f) }
  spec.files = `git ls-files`.split("\n")
end
