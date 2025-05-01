pipeline {
    agent any  // This will use the default Jenkins agent, no Docker required.
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'  // Ensure Node.js is installed on your Jenkins host.
            }
        }
     
    
    }
}
