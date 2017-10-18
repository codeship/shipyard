require_relative '../lib/shipyard-framework/version'

puts "\n\n************** Build & Push to Rubygems.org **************"
system("bash -c 'gem build shipyard.gemspec'")
system("bash -c 'gem push shipyard-framework-#{Shipyard::VERSION}.gem'")
