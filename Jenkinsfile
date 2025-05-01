pipeline {
    agent any
    environment {
        CI = 'true'
        SONAR_SCANNER_HOME = tool 'SonarQubeScanner'
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

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('MySonarQube') {
                    sh "${SONAR_SCANNER_HOME}/bin/sonar-scanner"
                }
            }
        }
    }
}
