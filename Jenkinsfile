pipeline {

    agent  any
    stages {
        
        stage('Clean WorkSpace and CheckOut'){
            steps{
                script { 
                    def a = 1
                }
            }
        }
        
        
        stage('Clean WorkSpace and CheckOut'){
            steps{
                cleanWs()
                checkout scm: [$class: 'GitSCM', branches: [[name: '*/${Branch}']],userRemoteConfigs:
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
