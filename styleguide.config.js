const path = require('path')

module.exports = {
    webpackConfig: require('./webpack.doc.config'),
	exampleMode: 'expand',
	styleguideDir: 'dist',
    components: 'ts/*.ts'
  }