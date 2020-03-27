pipeline {
    agent {
        dockerfile {
            dir 'server'
            args '--network ketchup_mysql-net -p 3000:3000'
        }
    }
    stages {
        stage('build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Deliver') {
            steps {
                sh 'npm start'
            }
        }
    }
}