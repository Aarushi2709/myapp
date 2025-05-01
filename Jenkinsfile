pipeline {
    agent any  // Use the default Jenkins agent
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests & Coverage') {
            steps {
                sh 'npm test -- --coverage'
            }
        }
    }
}
