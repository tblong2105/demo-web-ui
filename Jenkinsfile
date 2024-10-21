pipeline {
    agent any

    environment {
        CI = 'false'  // Disables treating warnings as errors in the CI environment
    }
    
    stages {
        stage('Clone Frontend Repository') {
            steps {
                git branch: 'master', url: 'https://github.com/tblong2105/demo-web-ui.git'
            }
        }

        stage('Build Frontend') {
            steps {
                // Install dependencies and build ReactJS
                sh 'npm install'
                sh 'npm run build'
            }
        }
    }

    post {
        success {
            echo 'ReactJS build and deploy successful!'
        }
        failure {
            echo 'ReactJS build failed!'
        }
    }
}
