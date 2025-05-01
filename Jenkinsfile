pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            // No need for '-p' argument in the pipeline
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
