#!/bin/bash

COMMIT_SHA=$1
GITHUB_TOKEN=$2

COMMIT_MESSAGE=$(curl https://api.github.com/repos/mikeathers/memba-shared/git/commits/"$COMMIT_SHA" \
    --header "authorization: Bearer $GITHUB_TOKEN" \
    --header "content-type: application/json" | jq '.message')

function cloneRepo() {
    git config --global user.email "standard.version@cinch.co.uk"
    git config --global user.name "Standard Version"

    git clone "https://$1@github.com/cinch-labs/design-system.git"
    cd design-system || exit
}

function installDependencies() {
    echo "always-auth=true
    @cinch-labs:registry=https://npm.pkg.github.com/
    //npm.pkg.github.com/:_authToken=$1" >.npmrc

    yarn install
}

function createRelease() {
    case $1 in

    *"major:"*)
        echo "Creating a major release..."
        yarn release-major
        ;;

    *"minor:"*)
        echo "Creating a minor release..."
        yarn release-minor
        ;;

    *"patch:"*)
        echo "Creating a patch release..."
        yarn release-patch
        ;;

    *"alpha:"*)
        echo "Creating a alpha release..."
        yarn pre-release-alpha
        ;;

    *"beta:"*)
        echo "Creating a beta release..."
        yarn pre-release-beta
        ;;

    *)
        return 1
        ;;

    esac
}

cloneRepo "$GITHUB_TOKEN"
installDependencies "$GITHUB_TOKEN"

if createRelease "$COMMIT_MESSAGE"; then
    git push --follow-tags origin master
else
    echo "Commit message does not contain prefix to trigger a release"
fi
