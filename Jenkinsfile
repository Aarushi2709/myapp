pipeline {
    agent any
    tools {
        sonarQubeScanner 'SonarQubeScanner' // Make sure the scanner is set correctly
    }
    environment {
        SONAR_HOST_URL = 'http://your-sonarqube-server:9000'
        SONAR_AUTH_TOKEN = 'your-sonarqube-auth-token'
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
        stage('SonarQube Analysis') {
            steps {
                script {
                    // Run the SonarQube analysis
                    sh '''
                    sonar-scanner \
                        -Dsonar.projectKey=your_project_key \
                        -Dsonar.sources=. \
                        -Dsonar.host.url=$SONAR_HOST_URL \
                        -Dsonar.login=$SONAR_AUTH_TOKEN
                    '''
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    sh 'npm test -- --coverage'
                }
            }
        }
    }
}
