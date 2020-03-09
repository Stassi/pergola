import typescript from 'rollup-plugin-typescript2'
import packageJSON from './package.json'

export default {
  input: 'src/index.ts',
  plugins: [typescript()],
  output: [
    {
      file: packageJSON.main,
      format: 'cjs'
    },
    {
      file: packageJSON.module,
      format: 'es'
    },
    {
      file: packageJSON.browser,
      format: 'iife',
      name: packageJSON.name
    }
  ]
}
