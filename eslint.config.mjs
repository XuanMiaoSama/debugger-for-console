import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: ['dist', 'node_modules', 'out', 'coverage', '.vscode-test'],
  },
  {
    rules: {
      'curly': 'off',
      'style/brace-style': 'off',
      'style/operator-linebreak': 'off',
    },
  },
)
