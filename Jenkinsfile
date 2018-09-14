pipeline {
  agent {
    dockerfile {
      label 'docker'
      filename './Dockerfile'
    }
  }
  stages {
    stage('Test') {
      parallel {
        stage('Jekyll') {
          steps {
            echo 'Hello world'
          }
        }
        stage('RSpec') {
          steps {
            sh 'rspec -fd'
          }
        }
        stage('SASS') {
          steps {
            sh './ci/sass_lint'
          }
        }
      }
    }
    stage('Review') {
      when {
        not { branch 'master' }
      }
      stages {
        stage('Percy') {
          steps {
            echo 'This step only runs in CodeShip builds at the moment: https://app.codeship.com/projects/246808'
          }
        }
        stage('Staging') {
          steps {
            echo 'Hello world'
          }
        }
        stage('QA Team') {
          stages {
            stage('A') {
              steps {
                echo 'Hello world'
              }
            }
            stage('B') {
              steps {
                echo 'Hello world'
              }
            }
            stage('C') {
              steps {
                echo 'Hello world'
              }
            }
          }
        }
      }
    }
    stage('Deploy') {
      when { branch 'master' }
      parallel {
        stage('Update Percy') {
          steps {
            echo 'This step only runs in Codeship builds at the moment: https://app.codeship.com/projects/246808'
          }
        }
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
