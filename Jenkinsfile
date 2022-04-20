pipeline {

    agent  any
    parameters {
        listGitBranches(
            branchFilter: 'refs/heads.*/(.*)',
            defaultValue: 'default',
            name: 'Branch',
            type: 'BRANCH',
            remoteURL: 'https://github.com/Liansik/Todo-Test',
            credentialsId: 'GitRep')
    }
    stages {
    
        stage('Clean WorkSpace and CheckOut'){
            steps{
                cleanWs()
                checkout([$class: 'GitSCM',
                          branches: [[name: "${Branch}"]],
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
            emailext body: 'Test 2', subject: 'Test 1 ', to: 'kirnichnyilya@gmail.com'
        }
    }
}
