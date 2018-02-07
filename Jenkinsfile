pipeline {
  agent any
  stages {
    stage('Setup') {
      steps {
        sh './ci/setup'
      }
    }
    stage('Test') {
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
    stage('Deploy') {
      steps {
        echo 'Deploying to RubyGems'
        echo 'Deploying to GitHub Pages'
      }
    }
  }
}
