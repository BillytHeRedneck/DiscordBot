def projectName = 'test'
def version = "0.0.${currentBuild.number}"
def dockerImageTag = "${projectName}:${version}"

pipeline {
  agent any

  stages {
    stage('Build Container') {
      steps {
        bat "docker build -f DockerFile -t ${dockerImageTag} ."
      }
    }

    stage('Deploy Container To Openshift') {
      steps {
        bat "oc login https://localhost:8443 --username admin --password admin --insecure-skip-tls-verify=true"
        bat "oc project ${projectName} || oc new-project ${projectName}"
        bat"oc delete all --selector app=${projectName} || echo 'Unable to delete all previous openshift resources'"
        bat "oc new-app ${dockerImageTag} -l version=${version}"
        bat "oc expose svc/${projectName}"
      }
    }
  }
}