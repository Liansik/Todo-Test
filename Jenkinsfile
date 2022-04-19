pipeline {

    agent  any
    parameters {
        gitParameter branchFilter: 'origin/(.*)', defaultValue: 'main', name: 'branch', type: 'PT_BRANCH'
    }
    stages {
    
        stage('Clean WorkSpace and CheckOut'){
            steps{
                cleanWs()
                checkout scm: [$class: 'GitSCM', branches: [[name: '*/${branch}']],userRemoteConfigs:
                [[credentialsId: 'GitRep', url: 'https://github.com/Liansik/Todo-Test']]]
            }
        }
        
        stage("build") {
            steps {
                withEnv(["PATH+NODE=${tool name: 'Node', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'}/bin"]) {
                bat "npm install"
                bat "npm run start"
                }
            }
        }

        stage("test") {
            steps {
                withEnv(["PATH+NODE=${tool name: 'Node', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'}/bin"]) {
                bat "npm run test"
                junit "results-Junit1.xml"
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
