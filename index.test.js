const resolveKeys = require('.')
const assert = require('assert')

test('resolves keys with corresponding result', async done => {
  const results = await resolveKeys({
    key1: new Promise((resolve) => setTimeout(() => resolve('value1'), 1000)),
    key2: new Promise((resolve) => setTimeout(() => resolve('value2'), 500))
  })

  assert.ok(results)
  assert.ok(results.key1)
  assert.equal(results.key1, 'value1')
  assert.equal(results.key2, 'value2')

  done()
})
