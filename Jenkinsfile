pipeline {
  agent any
  stages {
    stage('Setup') {
      steps {
        sh 'chmod +x ci/setup'
        sh 'chmod +x ci/jekyll'
        sh 'chmod +x ci/sass_lint'
        sh './ci/setup'
      }
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
