module.exports = async function resolveKeys (object) {
  const keys = Object.keys(object)
  const results = await Promise.all(keys.map(key => object[key]))
  return keys.reduce((acc, key, i) => Object.assign(acc, { [key]: results[i] }), {})
}
