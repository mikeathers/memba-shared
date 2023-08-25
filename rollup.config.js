// eslint-disable-next-line @typescript-eslint/no-var-requires
require('ts-node').register({
  compilerOptions: {
    module: 'CommonJS',
  },
})

module.exports = require('./rollup.config.ts')
