#!/usr/bin/env bash

SCRIPT_DIR=$(dirname $0)
RUN_BUILD=
RUN_DEPLOY=
VERSION=

check_error() {
  if [[ $1 -ne 0 ]]; then
    echo "ERROR: Previous command had an error, exiting"
    exit $1
  fi
}

#checkJQ() {
#  IS_INSTALLED=$(which jq | 2>&1)
#  echo "DEBUG: ${IS_INSALLED}"
#  if [[ "$IS_INSTALLED" -eq "1" ]]; then
#    echo "ERROR: JQ is not in the path"
#    exit 99
#  fi
#}

getVersion() {
  VERSION=$1
  check_error $?
  if [[ $VERSION -eq "" ]]; then
    echo "Version not set, pulling from package.json"
    VERSION=$(cat "${SCRIPT_DIR}"/package.json | jq -r .version)
  fi
}

while getopts p:b:d:v: option; do
  case "${option}" in
  b) RUN_BUILD=${OPTARG} ;;
  d) RUN_DEPLOY=${OPTARG} ;;
  v) VERSION=${OPTARG} ;;
  *) echo "Invalid Flags" && exit 99 ;;
  esac
done

if [[ "${VERSION}" == "" ]]; then
  getVersion
fi

if [[ "${VERSION}" == "" ]]; then
  echo "Attempted to set version, but could not - please use -v"
  exit 99
fi

IMAGE_NAME=asia.gcr.io/mpl-test-272715/mpl-nomad-admin-ui:${VERSION}

echo "Compiling ${IMAGE_NAME}/${VERSION}"
yarn build

echo "Building ${IMAGE_NAME}/${VERSION}"
docker build -t "${IMAGE_NAME}" .

echo "Pushing ${IMAGE_NAME}/${VERSION}"
docker push "${IMAGE_NAME}"
