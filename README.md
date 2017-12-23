# enum-all
enumerate all the elments in a given array for given capacity

[![Build Status](https://travis-ci.org/incessantmeraki/enum-all.svg?branch=master)](https://travis-ci.org/incessantmeraki/enum-all)

## Usage

### Example

```js
  //generate all 3 letter string using numbers between 1 and 5
  var enumAll = require('enum-all')
  
  var arr = ['1','2','3','4','5']
  var capacity = 3

  //result is an array containing all possible combinations
  var result = enumAll(arr, capacity) 
  console.log(result)
```

### API

#### ` require('enum-all')(arr, capacity)`
returns an array containing all combinations of elements in an array arr for given capacity

## License

MIT
