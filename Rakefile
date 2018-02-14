require 'bundler/gem_tasks'
require 'rspec/core/rake_task'
require 'shipyard-framework'
require 'shipyard-framework/icons'

RSpec::Core::RakeTask.new(:spec)
task :default => :spec

namespace :shipyard do
  desc "Installs Docker on your local machine"
  task :install do
    sh "brew bundle"
    sh "sudo chown root:wheel $(brew --prefix)/opt/docker-machine-driver-xhyve/bin/docker-machine-driver-xhyve"
    sh "sudo chmod u+s $(brew --prefix)/opt/docker-machine-driver-xhyve/bin/docker-machine-driver-xhyve"
    sh "docker-machine create default --driver xhyve --xhyve-experimental-nfs-share"
    sh "eval $(docker-machine env default)"
    sh "docker-machine start default"
  end

  desc "Runs the Jekyll project locally in a Docker container"
  task :run do
    sh "docker-compose run dev"
  end

  desc "Compiles Shipyard and custom icons into an external svg definitions file."
  task :icons, [:icon_directory, :output_directory] do |t, args|
    args.with_defaults(:icon_directory => '/app/assets/icons/', :output_directory => '/public/assets/')
    icons = Shipyard::Icons.new args.icon_directory, args.output_directory
    icons.write
  end
end
