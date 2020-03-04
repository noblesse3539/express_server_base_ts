pipeline {
    agent { docker { image 'node:10.15'}}
    stages {
        stage('build') {
            steps {
                sh 'docker image build -t ketchupserver:1.0 .'
            }
        }
        stage('test') {
            steps {
                sh 'docker ps'
            }
        }
        stage('deploy') {
            steps {
                sh 'docker container run --publish 4000:3000 --detach --name ks ketchupserver:1.0'
            }
        }
    }
}