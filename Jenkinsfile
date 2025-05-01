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
        // stage('Test') {
        //             steps {
        //                 sh './Jenkins/scripts/test.sh'
        //             }
        //         }
        //         stage('Deliver') {
        //                     steps {
        //                         sh './jenkins/scripts/deliver.sh'
        //                         input message: 'Finished using the web site? (Click "Proceed" to continue)'
        //                         sh './jenkins/scripts/kill.sh'
        //                     }
        //                 }

    }
}
