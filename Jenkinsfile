pipeline {
  agent any
  stages {
    stage('Jekyll') {
      parallel {
        stage('Jekyll') {
          steps {
            sh 'echo "hello"'
          }
        }
        stage('Percy') {
          steps {
            sh 'echo "percy"'
          }
        }
        stage('RSpec') {
          steps {
            sh 'RSpec'
          }
        }
        stage('SASS') {
          steps {
            sh 'echo "SASS"'
          }
        }
      }
    }
  }
}