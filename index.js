module.exports = function (arr ,capacity) {
  var size = arr.length
  var output = []
  var result = []

  for (let i = 0; i < Math.pow(size,capacity); i++) {
    let j = i 

    for (let k = 0; k < capacity; k++) {
      result[k] = arr[j % size]
      j = Math.floor(j / size)
    }
    output.push(result.join(''))
  }
  return output
}

