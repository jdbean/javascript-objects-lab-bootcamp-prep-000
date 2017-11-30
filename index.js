var recipes = { key1: 'value1' }

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign(object, key, value)
  return newObj.key = value
}
