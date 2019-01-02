const webpack = require('webpack')
const path = require('path')
const memoryfs = require('memory-fs')

module.exports = function ( entry, options = {}) {
  const compiler = webpack({
    entry: path.resolve(__dirname, `./${entry}`),
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: entry
    },
    module: {
      rules: [
        {
          test: /.txt$/,
          use: {
            loader: path.resolve(__dirname, './author-loader.js'),
            options
          }
        }
      ]
    }
  })

  // 虚拟文件系统
  compiler.outputFileSystem = new memoryfs()

  // 执行webpack 编译
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err || stats.hasErrors()) reject(err)
      else resolve(stats) 
    })
  })
}