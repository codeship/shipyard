require 'bundler/gem_tasks'
require 'rspec/core/rake_task'
require 'shipyard-framework'
require 'shipyard-framework/icons'

RSpec::Core::RakeTask.new(:spec)
task :default => :spec

namespace :shipyard do
  desc "Compiles Shipyard and custom icons into an external svg definitions file."
  task :icons, [:icon_directory, :output_directory] do |t, args|
    args.with_defaults(:icon_directory => '/app/assets/icons/', :output_directory => '/public/assets/')
    Shipyard::Icons.new(args.icon_directory, args.output_directory)
  end
end
