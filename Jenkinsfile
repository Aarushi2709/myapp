pipeline {
    agent {
        docker {
            image 'node:14-alpine'  // Docker image with Node.js
            label 'docker'          // Optional: use this if you have a node label for Docker agents
        }
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
