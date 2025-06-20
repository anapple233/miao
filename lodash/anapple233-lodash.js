var foobar = {
  compact : function (array) {
    return array.filter((item) => {
      return typeof(item) == 'number'

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
  }
}