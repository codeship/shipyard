pipeline {
  agent any
  stages {
    stage('Setup') {
      steps {
        sh 'docker-compose run test ./ci/setup'
      }
    }
    stage('Test') {
      parallel {
        stage('Jekyll') {
          steps {
            sh 'docker-compose run test ./ci/jekyll'
          }
        }
        stage('RSpec') {
          steps {
            sh 'docker-compose run test bundle exec rspec'
          }
        }
        stage('SASS') {
          steps {
            sh 'docker-compose run test ./ci/sass_lint'
          }
        }
        stage('Percy') {
          steps {
            echo 'This step only runs in Codeship builds (https://app.codeship.com/projects/246808) where the data is sent directly to Percy (https://percy.io/codeship-inc/shipyard).'
          }
        }
      }
    }
    stage('Deploy') {
      when { branch 'master' }
      parallel {
        stage('RubyGems') {
          steps {
            echo 'This step only runs in Travis CI builds at the moment: https://travis-ci.org/codeship/shipyard'
          }
        }
        stage('GitHub Pages') {
          steps {
            echo 'This step only runs in Codeship builds at the moment: https://app.codeship.com/projects/246808'
          }
        }
      }
    }
  }
}
