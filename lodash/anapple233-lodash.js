
var anapple233 = {
  compact : function (array) {
    return array.filter((item) => {
      return typeof(item) == 'number' && !Number.isNaN(item)  && item != 0
    })
  },
  chunk: function(array, size = 1){
    let result = []
    let flag = 0
    let arr = []
    let len = array.length
    array.forEach((item, idx) => {
      if (flag == size) {
        result.push(arr)
        flag = 0
        arr = []
      }
      arr.push(item)
      flag++
    })
    result.push(arr)
    return result
  },
  fill: function(array, value) {
    let len = array.length
    return new Array(len).fill(value)
  },
  drop: function(array, n = 1) {
    let i = n
    let len = array.length
    let result = []
    while (i < len) {
      result.push(array[i])
      i++
    }
    return result
  },
  findIndex: function(users, callback, fromIndex = 0) {
    let value
    debugger;

    function isInclude (obj1, obj2) {
      for (let key in obj1) {

      }
    }
    if (typeof callback  === 'function') {
      value = callback
    } else {
      for (let i = 0; i < users.length; i++) {
        for (let key in users[i]) {
          if (typeof callback === 'string') {
            if (users[i][callback] && users[i][callback] === users[i][key]) {
              return i
            }
          } else if (Array.isArray(callback)) {

          } else {
            if (callback[key] === users[i][key]) {
              return i
            } else {
              break
            }
          }
        }
      }

    }
  },
  flatten: function (array) {
    debugger;
    let result = []
    for (let i = 0; i < array.length; i++) {
      Array.isArray(array[i]) ? result.push(...array[i]) : result.push(array[i])
    }
    return result
  },
  flattenDeep: function(array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        result.push(...this.flattenDeep(array[i]))
      } else {
        result.push(array[i])
      }
    }
    return result
  },
  flattenDepth: function(array, depth = 1, flag = -1) {
    let result = []
    flag++
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        if (depth === flag) {
          result.push(array[i])
        } else {
          result.push(...this.flattenDepth(array[i], depth, flag))
        }
      } else {
        result.push(array[i])
      }
    }
    return result
  },
  fromPairs: function (pairs) {
    let result = {}
    for (let i = 0; i < pairs.length; i++) {
      result[pairs[i][0]] = pairs[i][1]
    }
    return result
  },
  toPairs: function (object) {
    let result = []
    let flag = []
    debugger;
    Object.keys(object).forEach(e => {
      flag.push(e, object[e])
      result.push(flag)
      flag = []
    })
    return result
  },
  head: function (arr) {
    if (arr.length > 0) {
      return arr[0]
    } else {
      return
    }
  },
  indexOf: function (arr, value, fromIndex = 0) {
    for (let i = fromIndex; i < arr.length; i++) {
      if (arr[i] === value) {
        return i
      }
    }
    return -1
  },
  lastIndexOf: function (arr, value, fromIndex = arr.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {
      if (arr[i] === value) {
        return i
      }
    }
    return -1
  },
  initial: function (arr) {
    arr.pop()
    return arr
  },
  join: function (arr, separator = ',') {
    let result = ''
    if (arr.length == 1) {
      return arr[0]
    } else if (arr.length == 0) {
      return result
    }

    for (let i = 0; i < arr.length; i++) {
      if (i == arr.length - 1) {
        result += arr[i]
      } else {
        result += arr[i] + separator
      }
    }
    return result
  },
  last : function (arr) {
    return arr[arr.length - 1]
  },
  pull : function (arr, ...value) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
      let flag = false
      for (let j = 0; j < value.length; j++) {
        if (arr[i] === value[j]) {
          flag = true
        }
      }
      if (!flag) {
        result.push(arr[i])
      }
    }
    return result
  },
  //双指针实现反转数组
  reverse: function (arr) {
    let first = 0
    let last = arr.length - 1
    while (first < last) {
      let flag = arr[first]
      arr[first] = arr[last]
      arr[last] = flag
      first++
      last--
    }
    return arr
  },
  countBy: function (arr, callback) {
    let result = {}
    if (typeof callback === 'function') {
      for (let i = 0; i < arr.length; i++) {
        let kind = callback(arr[i])
        if (!result[kind]) {
          result[kind] = 1
        } else {
          result[kind]++
        }
      }
      return result
    } else if (typeof callback === 'string') {
      for (let i = 0; i < arr.length; i++) {
        let kind = arr[i][callback]
        if (!result[kind]) {
          result[kind] = 1
        } else {
          result[kind]++
        }
      }
      return result
    }

  },
  groupBy: function (arr, callback) {
    let result = {}
    if (typeof callback === 'function') {
      for (let i = 0; i < arr.length; i++) {
        let kind = arr[i][callback]
        if (!result[kind]) {
          result[kind] = []
        }
        result[kind].push(arr[i])
      }
      return result
    } else if (typeof callback === 'string') {
      for (let i = 0; i < arr.length; i++) {
        let kind = arr[i][callback]
        if (!result[kind]) {
          result[kind] = []
        }
        result[kind].push(arr[i])
      }
      return result
    }
  },
  keyBy: function (arr, callback) {
    let result = {}
    for (let i = 0; i < arr.length; i++) {
      if (typeof callback === 'function') {
        let key = callback(arr[i])
        result[key] = arr[i]
      } else if (typeof callback === 'string') {
        result[arr[i][callback]] = arr[i]
      }
    }
    return result
  },
  forEach: function (arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i, arr)
    }
  },
  map: function (arr, callback, thisArg) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
      result.push(callback.call(thisArg,arr[i], i, arr))
    }
    return result
  },
  filter: function (arr, callback) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        result.push(arr[i])
      }
    }
    return result
  },

  reduce: function (collection, callback, acc) {
    let result = acc
    for (let key in collection) {
      let res = callback(result, collection[key], key)
      if (Array.isArray(collection)) {
        result = res
      }
    }
    return result
  },
  size: function (collection) {
    if (Array.isArray(collection) || typeof collection === 'string') {
      return collection.length
    } else {
      let result = Object.keys(collection)
      return result.length
    }
  },
  sortBy: function (collection, callback) {
    let result = Array.isArray(collection)? [] : {}

  }
}
/*
 ,findIndex,findLastIndex
  every,some,reduceRight
  ,sortBy,sample,
  isUndefined,isNull,isNil,max,min,maxBy,minBy,round,sumBy
  flagMap,flatMapDepth,get,has,mapKeys,mapValues
  range,stringifyJSON,concat,isEqual,repeat,padStart,padEnd,pad,keys,values,random,
  round,ceil,floor,cloneDeep
  trim,trimStart,trimEnd,assign,merge,
        */
