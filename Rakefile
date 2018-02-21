require 'bundler/gem_tasks'
require 'rspec/core/rake_task'
require 'shipyard-framework'
require 'shipyard-framework/icons'

RSpec::Core::RakeTask.new(:spec)
task :default => :spec

namespace :shipyard do
  desc 'Installs Docker on your local machine'
  task :install do
    sh 'brew bundle'
  end

  desc 'Builds the Docker image needed to run Shipyard locally.'
  task :build do
    sh 'docker build -t codeship/shipyard:latest .'
  end

  desc 'Pushes the latest the image to Docker hub.'
  task :push do
    sh 'docker push codeship/shipyard:latest'
  end

  desc 'Runs the Jekyll project locally in a Docker container'
  task :run do
    sh %(docker run -it -p 4000:4000 -v $(pwd):/shipyard/ codeship/shipyard:latest sh -c "jekyll serve -H 0.0.0.0 --watch --incremental --baseurl=''")
  end

  desc 'Runs the Jekyll project locally in a Docker container'
  task :console do
    sh 'docker run -it -p 4000:4000 -v $(pwd):/shipyard/ codeship/shipyard:latest /bin/bash'
  end

  namespace :test do
    desc 'Run RSpec tests'
    task :rspec do
      sh 'docker run -it --workdir /shipyard -v $(pwd):/shipyard/ codeship/shipyard:latest sh -c "rspec"'
    end

    desc 'Run Jekyll tests'
    task :jekyll do
      sh 'docker run -it --workdir /shipyard -v $(pwd):/shipyard/ codeship/shipyard:latest sh -c "./ci/jekyll"'
    end

    desc 'Run Percy tests'
    task :percy do
      sh 'docker run -it --workdir /shipyard -v $(pwd):/shipyard/ codeship/shipyard:latest sh -c "./ci/percy"'
    end

    desc 'Run Sass tests'
    task :sass do
      sh 'docker run -it --workdir /shipyard -v $(pwd):/shipyard/ codeship/shipyard:latest sh -c "./ci/sass_lint"'
    end
  end

  desc 'Compiles Shipyard and custom icons into an external svg definitions file.'
  task :icons, [:icon_directory, :output_directory] do |t, args|
    args.with_defaults(:icon_directory => '/app/assets/icons/', :output_directory => '/public/assets/')
    icons = Shipyard::Icons.new args.icon_directory, args.output_directory
    icons.write
  end
end
