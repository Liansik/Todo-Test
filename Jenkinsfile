pipeline {

    agent  any
    
    stages {
        
       stage('Checkout Codebase'){
            steps{
                cleanWs()
                checkout scm: [$class: 'GitSCM', branches: [[name: '*/dev']],userRemoteConfigs:
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
            cleanWs(cleanWhenNotBuilt: false,
                    deleteDirs: true,
                    disableDeferredWipeout: true,
                    notFailBuild: true,
                    patterns: [[pattern: '.gitignore', type: 'INCLUDE'],
                               [pattern: '.propsfile', type: 'EXCLUDE']])
        }
    }
}
