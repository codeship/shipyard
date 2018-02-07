pipeline {
  agent any
  stages {
    node('Setup') {
      sh '''
        chmod +x ci/setup
        chmod +x ci/jekyll
        chmod +x ci/sass_lint
        ./ci/setup
      '''
    }
    parallel {
      stage('Jekyll') {
        steps {
          sh './ci/jekyll'
        }
      }
      stage('RSpec') {
        steps {
          sh 'bundle exec rspec'
        }
      }
      stage('SASS') {
        steps {
          sh './ci/sass_lint'
        }
      }
    }
  }
}
