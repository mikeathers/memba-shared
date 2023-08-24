#!/usr/bin/env bash

#dev
export ACCOUNT_ID="635800996936"

#prod
#export ACCOUNT_ID="943918019765"

role_arn="arn:aws:iam::${ACCOUNT_ID}:role/infra-service-deployment"

export AWS_DEFAULT_REGION="eu-west-2"
KST=($(aws sts assume-role --role-arn "${role_arn}" --role-session-name infra-deployment-service --query '[Credentials.AccessKeyId,Credentials.SecretAccessKey,Credentials.SessionToken]' --output text))
unset AWS_SECURITY_TOKEN
export AWS_ACCESS_KEY_ID=${KST[0]}
export AWS_SECRET_ACCESS_KEY=${KST[1]}
export AWS_SESSION_TOKEN=${KST[2]}
export AWS_SECURITY_TOKEN=${KST[2]}

cd ../
cdk synth