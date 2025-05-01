pipeline {
    agent any

    environment {
        SONAR_HOST_URL = 'http://your-sonarqube-server:9000' // Specify the SonarQube URL
        SONAR_AUTH_TOKEN = 'sqa_16d8fbfcf7ee1b744332fd20478faf87894ce490' // Specify the authentication token
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
                withSonarQubeEnv('MySonarQube') { // 'MySonarQube' is the name of your SonarQube server configuration in Jenkins
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
