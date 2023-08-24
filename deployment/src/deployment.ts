#!/usr/bin/env node
import 'source-map-support/register'
import {App} from 'aws-cdk-lib'

import {getVersion} from './helpers'
import CONFIG from './config'
import {DeploymentStack} from './deployment-stack'

const app = new App()
const stackName = `${CONFIG.STACK_PREFIX}DeploymentStack`

const defaultConfig = {
  stackName,
  tags: {
    service: 'storybook-deployment',
    version: 'N/A',
    env: 'prod',
  },
}

const config = {
  dev: {
    env: {
      account: CONFIG.AWS_ACCOUNT_ID_DEV,
      region: CONFIG.REGION,
    },
    tags: {
      ...defaultConfig.tags,
      version: getVersion(),
    },
  },
  prod: {
    env: {
      account: CONFIG.AWS_ACCOUNT_ID_PROD,
      region: CONFIG.REGION,
    },
    tags: {
      ...defaultConfig.tags,
      version: getVersion(),
      env: 'prod',
    },
  },
}

new DeploymentStack(app, stackName, {
  ...defaultConfig,
  ...config['prod'],
})
