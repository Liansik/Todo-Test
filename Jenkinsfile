pipeline {

    agent  any
    
    stages {

        stage("build") {
            steps {
                CHANGE_BRANCH == "dev"
                withEnv(["PATH+NODE=${tool name: 'Node', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'}/bin"]) {
                bat "npm install"
                bat "npm run start"
                }
            }
        }

        stage("test") {
            steps {
                CHANGE_BRANCH == "dev"
                withEnv(["PATH+NODE=${tool name: 'Node', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'}/bin"]) {
                bat "npm run test"
                }
            }
        }
    }
    post {
        always{
            echo 'test'
        }
    }
}