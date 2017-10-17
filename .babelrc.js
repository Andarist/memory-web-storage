const modules = process.env.BABEL_ENV === 'cjs' ? 'commonjs' : false

module.exports = {
  presets: [
    [
      'env',
      {
        loose: true,
        modules,
      }
    ]
  ],
  plugins: ['annotate-pure-calls'],
}
