var test =require('tape')
var enumAll = require('./index.js')

test('test with few characters ', function (t) {
 var arr = ['a','b','c']
 var capacity  = 4
 
 var result = enumAll(arr, capacity)
 t.equal(result.length, Math.pow(arr.length, capacity)); 
 t.end()
})

test('test with all lowercase alphabet', function (t) {
 arr=[]
 for(let i = 0; i < 26; i++) {
   arr[i] = String.fromCharCode(97 + i )
 }
 var capacity  = 5
 
 var result = enumAll(arr, capacity)
 t.equal(result.length, Math.pow(arr.length, capacity)); 
 t.end()
})

test('test with all numeric characters', function (t) {
 arr=[]
 for(let i = 0; i < 10; i++) {
   arr[i] = String.fromCharCode(48 + i )
 }
 var capacity  = 2
 
 var result = enumAll(arr, capacity)
 console.log(result)
 t.equal(result.length, Math.pow(arr.length, capacity)); 
 t.end()
})
