pipeline {
    agent any

    environment {
        CI = 'true'
        SONAR_SCANNER_HOME = tool 'SonarQubeScanner'  // Use exact name from Global Tool Config
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
                withSonarQubeEnv('SonarQubeScanner') {  // Use exact name from Jenkins → Configure System
                    sh """
                        ${SONAR_SCANNER_HOME}/bin/sonar-scanner \
                          -Dsonar.projectKey=myapp \
                          -Dsonar.sources=. \
                          -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info
                    """
                }
            }
        }
    }
}
