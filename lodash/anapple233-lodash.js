/*
 compact,chunk,fill,drop,findIndex,findLastIndex,flatten,flattenDeep,flattenDepth
        fromPairs,toPairs,head,indexOf,lastIndexOf,initial,join,last,pull,reverse,every,some
        countBy,groupBy,keyBy,forEach,map,filter,reduce,reduceRight,size,sortBy,sample,
        isUndefined,isNull,isNil,max,min,maxBy,minBy,round,sumBy
        flagMap,flatMapDepth,get,has,mapKeys,mapValues
        range,stringifyJSON,concat,isEqual,repeat,padStart,padEnd,pad,keys,values,random,
        round,ceil,floor,cloneDeep
        trim,trimStart,trimEnd,assign,merge,
        */
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
  findIndex: function(users, callback, fromIndex = 0) {  //这里又接函数又接参数是怎么写的
    for (let user in users) {
      return function (o) {
        if(callback(o)) {

        }

      }

    }
  }
}
