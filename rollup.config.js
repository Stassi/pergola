import typescript from 'rollup-plugin-typescript2'
import npmPackage from './package.json'

const { main, module, name, browser } = npmPackage

export default {
  input: 'src/index.ts',
  plugins: [typescript()],
  output: [
    {
      file: main,
      format: 'cjs'
    },
    {
      file: module,
      format: 'es'
    },
    {
      name,
      file: browser,
      format: 'iife'
    }
  ]
}
