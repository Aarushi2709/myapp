pipeline {
    agent any

    environment {
        CI = 'true'
        SONAR_SCANNER_HOME = tool 'SonarQubeScanner'  // Tool name from Global Tool Configuration
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
                withSonarQubeEnv('SonarQubeScanner') {  // SonarQube server name from Jenkins settings
                    sh """
                        ${SONAR_SCANNER_HOME}/bin/sonar-scanner \
                          -Dsonar.projectKey=myapp \
                          -Dsonar.sources=. \
                          -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info
                    """
                }
            }
        }

        stage('Quality Gate Check') {
            steps {
                timeout(time: 1, unit: 'MINUTES') {
                    script {
                        def qg = waitForQualityGate()
                        if (qg.status != 'OK') {
                            error "Pipeline aborted due to failing Quality Gate: ${qg.status}"
                        }
                    }
                }
            }
        }
    }
}
