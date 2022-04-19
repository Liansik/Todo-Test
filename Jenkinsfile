pipeline {

    agent  any
    parameters {
        gitParameter name: 'TAG',
                     type: 'PT_TAG',
                     defaultValue: 'main'
    }
    stages {
    
        stage('Clean WorkSpace and CheckOut'){
            steps{
                cleanWs()
                checkout([$class: 'GitSCM',
                          branches: [[name: "${params.TAG}"]],
                          doGenerateSubmoduleConfigurations: false,
                          extensions: [],
                          gitTool: 'Default',
                          submoduleCfg: [],
                          userRemoteConfigs:[[credentialsId: 'GitRep', url: 'https://github.com/Liansik/Todo-Test']]
                          ])
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
