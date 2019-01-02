const compile = require('../compile')
const assert = require('assert')

describe('author-laoder', function(){
  it('is add?', async function(){
    this.timeout(0)
    let result 
    try {
       result = await compile('example.txt', { name: '李丽珍' })
    } catch (error) {
      done('fail')
    }
    
    const output = result.toJson().modules[0].source
    assert.ok(true, output.indexOf('作者：李丽珍') !== -1)
  })
})