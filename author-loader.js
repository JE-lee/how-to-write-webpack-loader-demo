const loaderUtils = require('loader-utils')
const fs = require('fs')
const path = require('path')

const tpl = path.resolve(__dirname, './author.a')

module.exports = function(source){
  const options = loaderUtils.getOptions(this)

  //let callback = this.async()
  // 添加loader的依赖，让其在watch mode 可以被监视到
  //this.addDependency(tpl)

  //fs.readFile(tpl,'utf-8',(err, author) => {
  //  if(err) return callback(err)
  //  callback(null, author + '\n' + `//日期：${options.date}` + source)
  //})
  source = source.replace(/\[name\]/g, options.name)
  return `export default ${JSON.stringify(source)}`
} 