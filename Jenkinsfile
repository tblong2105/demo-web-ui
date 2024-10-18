pipeline {
    agent any

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

        stage('Deploy Frontend') {
            steps {
                // Deploy frontend (e.g., Docker or server script)
                sh 'docker build -t reactjs-app .'
                sh 'docker run -d -p 3000:3000 reactjs-app'
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
