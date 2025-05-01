pipeline {
    agent any
    
    tools {
        // Specify the SonarQube Scanner tool to use
        sonarQubeScanner 'SonarQubeScanner'  // Ensure this matches the name configured in Global Tool Configuration
    }

    environment {
        // Configure SonarQube environment variables (if needed)
        SONARQUBE_SCANNER_HOME = tool name: 'SonarQubeScanner', type: 'ToolLocation'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Aarushi2709/myapp.git'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                script {
                    // Run the SonarQube analysis
                    withSonarQubeEnv('MySonarQube') {
                        sh 'sonar-scanner'
                    }
                }
            }
        }
    }
}
