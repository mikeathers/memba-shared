import {Construct} from 'constructs'
import {Stack, StackProps} from 'aws-cdk-lib'

import {
  createARecordForDistribution,
  createBucket,
  createBucketDeployment,
  createCertificate,
  createDistribution,
  handleAccessIdentity,
  getHostedZone,
  getSecurityHeader,
} from './aws'
import CONFIG from './config'

export class DeploymentStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props)

    const url = CONFIG.STORYBOOK_URL
    const hostedZoneUrl = CONFIG.HOSTED_ZONE_URL

    const hostedZone = getHostedZone({scope: this, domainName: hostedZoneUrl})

    const responseHeadersPolicy = getSecurityHeader(this)

    const bucket = createBucket({
      bucketName: `${CONFIG.STACK_PREFIX}Bucket`,
      scope: this,
    })

    const accessIdentity = handleAccessIdentity({
      scope: this,
      bucket,
      name: `${CONFIG.STACK_PREFIX}CloudFrontOriginAccessIdentity`,
    })

    const certificate = createCertificate({
      scope: this,
      url,
      hostedZone,
      name: `${CONFIG.STACK_PREFIX}Certificate`,
    })

    const distribution = createDistribution({
      scope: this,
      bucket,
      url,
      certificate,
      accessIdentity,
      securityHeadersPolicy: responseHeadersPolicy,
      distributionName: `${CONFIG.STACK_PREFIX}CloudfrontDistribution`,
    })

    createBucketDeployment({
      scope: this,
      bucket,
      filePath: './build',
      deploymentName: `${CONFIG.STACK_PREFIX}BucketDeployment`,
    })

    createARecordForDistribution({
      scope: this,
      hostedZone,
      url,
      distribution,
      name: `${CONFIG.STACK_PREFIX}ARecord`,
    })
  }
}
