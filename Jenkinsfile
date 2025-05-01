pipeline {
    agent {
        docker {
            image 'node:6-alpine'
        }
    }

    environment {
        CI = 'true'  // Optional: set the CI environment variable
    }

    stages {
        stage('Build') {
            steps {
                script {
                    // Running npm install inside the Docker container
                    sh 'npm install'
                }
            }
        }
    }
}
