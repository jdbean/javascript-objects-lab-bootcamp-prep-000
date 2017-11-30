var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, obj)
  return newObj.[key] = value
}
