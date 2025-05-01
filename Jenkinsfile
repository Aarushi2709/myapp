pipeline {
    agent any  // Run on any available agent
    stages {
        stage('Checkout') {
            steps {
                // Check out the code from the Git repository
                git 'https://github.com/Aarushi2709/myapp.git'
            }
        }
        stage('Build') {
            steps {
                script {
                    // Run Docker container using node:14-alpine image
                    docker.image('node:14-alpine').inside {
                        // Install the dependencies in the Docker container
                        sh 'npm install'
                    }
                }
            }
        }
    }
}
