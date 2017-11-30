var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign(object, key, value)
  newObj.key = value
  return newObj
}
