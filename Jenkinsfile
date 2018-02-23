pipeline {
  agent none
  stages {
    stage('Test') {
      parallel {
        stage('Jekyll') {
          agent {
            dockerfile {
              label 'docker'
              filename './Dockerfile'
            }
          }          
          steps {
            sh './ci/jekyll'
          }
        }
        stage('RSpec') {          
          agent {
            dockerfile {
              label 'docker'
              filename './Dockerfile'
            }
          }   
          
          steps {
            sh 'rspec -fd'
          }
        }
        stage('SASS') {          
          agent {
            dockerfile {
              label 'docker'
              filename './Dockerfile'
            }
          }
          
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
      steps {
        input 'Ready to review the styleguide?'       
      }
    }
    
    stage('Percy') {
      agent {
        dockerfile {
          label 'docker'
          filename './Dockerfile'
        }
      }      
      when {
        not { branch 'master' }
      }
      steps {
        sh './ci/percy'
      }
    }
    
    stage('Deploy') {
      when { branch 'master' }
      parallel {
        stage('RubyGems') {
          agent any
          steps {
            echo 'This step only runs in Travis CI builds at the moment: https://travis-ci.org/codeship/shipyard'
          }
        }
        stage('GitHub Pages') {
          agent any
          steps {
            echo 'This step only runs in Codeship builds at the moment: https://app.codeship.com/projects/246808'
          }
        }
      }
    }
  }
}
