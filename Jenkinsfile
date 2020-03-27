pipeline {
    agent none
    stages {
        stage('build and run') {
            steps {
                step([$class: 'DockerComposeBuilder', dockerComposeFile: 'docker-compose.yml', option: [$class: 'StartAllServices'], useCustomDockerComposeFile: false])
            }
        }
    }
}