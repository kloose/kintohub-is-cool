#!/bin/sh

#if [[ ! -e /tools ]]; then
    mkdir -p /tools
    curl -o /tools/google-cloud-sdk.tar.gz https://dl.google.com/dl/cloudsdk/channels/rapid/downloads/google-cloud-sdk-287.0.0-linux-x86_64.tar.gz
    tar -xvf /tools/google-cloud-sdk.tar.gz -C /tools/
    /tools/google-cloud-sdk/install.sh -q
    source /tools/google-cloud-sdk/path.bash.inc
    yum -y install which openssh-clients
    gcloud components install kubectl -q
    gcloud components install beta -q
#elif [[ ! -d /tools ]]; then
#    echo "/tools already exists but is not a directory" 1>&2
#fi

#if [[ ! -e ~/.docker ]]; then
    mkdir -p ~/.docker
#elif [[ ! -d ~/.docker ]]; then
#    echo "~/.docker already exists but is not a directory" 1>&2
#fi
