interface ConfigProps {
  STACK_PREFIX: string
  REGION: string
  AWS_ACCOUNT_ID_PROD: string
  AWS_ACCOUNT_ID_DEV: string
  STORYBOOK_URL: string
  HOSTED_ZONE_URL: string
}

const CONFIG: ConfigProps = {
  STACK_PREFIX: 'Storybook',
  REGION: 'eu-west-2',
  AWS_ACCOUNT_ID_PROD: '635800996936',
  AWS_ACCOUNT_ID_DEV: '544312030237',
  STORYBOOK_URL: 'storybook.memba.co.uk',
  HOSTED_ZONE_URL: 'memba.co.uk',
}

export default CONFIG
