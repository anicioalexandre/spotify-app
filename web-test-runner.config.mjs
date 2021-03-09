import { chromeLauncher } from '@web/test-runner-chrome'

export default /** @type {import('@web/test-runner').TestRunnerConfig} */ {
  files: 'src/design-system/**/*.test.js',
  preserveSymlinks: true,
  nodeResolve: true,
  browsers: [
    chromeLauncher({
      launchOptions: {
        args: ['--no-sandbox']
      }
    })
  ]
}
