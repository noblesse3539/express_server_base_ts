pipeline {
    agent none
    stages {
        stage('build') {
            steps {
                sh 'docker-compose build'
            }
        }

        stage('Deliver') {
            steps {
                sh 'docker-compose up'
                input message: 'Finished using the server? (Click "Proceed" to continue)'
                sh 'docker-compose down'
            }
        }
    }
}