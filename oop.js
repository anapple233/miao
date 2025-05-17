



  class Vector {
    constructor(x, y) {
      this.x = x
      this.y = y
    }
    plus(v) {
      let x = this.x + v.x
      let y = this.y + v.y
      return new Vector(x, y)
    }
    minus(v) {
      let x = this.x - v.x
      let y = this.y - v.y
      return new Vector(x, y)
    }
    get length() {
      return Math.sqrt(this.x * this.x + this.y * this.y)
    }
  }







  // Complex类表示一个复数
  // 它有两个属性，real和imag分别表示实部和虚部
  class Complex {
    constructor(real, imag) {
      this._real = real
      this._imag = imag
    }

    get real () {
      return this._real
    }

    get imag () {
      return this._imag
    }
    plus(c) {
      let real = this.real + c.real
      let imag = this.imag + c.real
      return new Complex (real, imag)
    }
    minus(c) {
      let real = this.real - c.real
      let imag = this.imag - c.real
      return new Complex (real, imag)
    }
    mul(c) {
      let real = this.real * c.real - this.imag * c.imag
      let imag = this.real * this.imag + this.imag * c.real
      return new Complex(real, imag)
    }
    div(c) {
      let helper = new Complex(c.real, -c.imag)
      let up = this.mul(helper)
      let down = c.mul(helper)
      let real = up.real / down.real
      let imag = up.imag / down.real
      return new Complex(real, imag)
    }
  }




  // 实现一个类似js中Array的类型
  // 即长度可变的数组
  // 实现过程中只能通过new Array(n)创建出固定长度的数组
  // 此后再也不能修改这个数组的长度
  //    如push，pop，shift，unshift，修改length，给length及以上的下标赋值
  class ArrayList {
    constructor() {
      this._flag = 8
      this.arr = new Array(this._flag)
      this._length = 0
    }
    get flag () {
      return this._flag
    }

    // 返回第idx位置的值
    at(idx) {
      if (idx < - this.length)
      if (this.length < idx) {
        return undefined
      }

      if (idx < 0) {
        idx = this.length + idx
      }
      return this.arr[idx]
    }
    push(val) { //加减的length用this还是原来的
      if (this.length == this._flag) {
        let twoFlag = this.flag * 2
        let _array = new Array(twoFlag)
        for (let i = 0; i < this.length; i++) {
          _array[i] = this.arr[i]
        }
        this.arr = _array
      }
      this.arr[this.length] = val
      this._length++
    }
    pop() {
      if (this._length == 0) {
        return undefined
      }
      let result = this.arr[this.length - 1]
      if (this._length < this._flag / 4 && this._flag > 16) {
        this._flag /= 2
        let newArr = new Array(this._flag)
        for (let i = 0; i < this.arr.length - 1; i++) {
          newArr[i] = this.arr[i]
         }
        this.arr = newArr
        this._length--
        return result
      } else {
        return this.arr[--this._length]
      }
    }
    // 返回数组元素的数量
    get length() {
      return this._length
    }

    set length(l) {
      if (l > this._length) {
        l = this.length
      }
    }
  }




  for (var i = 0; i < 10000; i++) {
    h.push(i)
  }

  console.log(h.at(15)) // 14
  console.log(h.at(80)) // 79
  console.log(h.length) // 100
  console.log(h.pop()) // 99
  console.log(h.length) // 99



  /**
   * 用单向链表实现一个先进先出的队列
   *
   */
  class Queue {
    constructor() {
      this.header = null
      this.footer = null
      this._size = 0
    }
    // 将值val放进队列，放进队列的元素会先进先出
    enqueue(val) {
      let node = { val : val, next : null}
      this._size++
      if (this.header == null) {
        this.header = this.footer = node
        return this
      } else {
        this.footer.next = node  //挂到尾节点并且指向尾节点
        this.footer = node
        return this
      }
    }
    // 返回队头元素，当队列为空时，返回undefined
    dequeue() {
      if (this.header == null) {
        return undefined
      }
      this._size--
      if (this.header == this.footer == null) {
        let val = this.header.val
        this.header = null
        this.footer = null
        return val
      }

      let val = this.header.val
      this.header = this.header.next
      return val
    }
    // 返回但不删除队头元素
    peek() {
      if (this._size == 0) {
        return undefined
      }
       return this.header.val
    }
    // 返回队列的长度
    get size() {
      return this._size
    }
  }





  // 表达一个“集合”
  // 即元素不重复的合集
  class MySet {
    constructor() {
      this._size = 0
      this._values = []
    }
    // 往集合中增加一个元素，但元素如果已经在集合里，则不用增加了
    add(val) {
      if (this.has(val)) {
        return val
      }
      this._values.push(val)
      this._size++
    }
    // 判断集合中是否有val
    has(val) {
      return this._values.includes(val)
    }
    // 从集合中删除val
    delete(val) {
      let idx = this._values.indexOf(val)
      let result = []
      for (let i = 0; i < this._size; i++) {
        if (i == idx) {
          continue
        }
        result.push(this._values[i])
      }
      this._size--
      return this._values = result
    }
    // 清空集合中的元素
    clear() {
      let result = []
      return this._values = result
    }
    // 返回集合中元素的数量
    get size() {
      return this._size
    }
  }




  // 表达一个映射
  // 每组映射有一个key和一个value确定
  // 增删改查：
  // 实现过程中不能将对象做为映射来使用（意思是不能使用对象“随意增减属性”的功能）
  class MyMap {

    constructor() {
      this._keys = []
      this._vals = []
      this._size = 0
    }
    // 把key的值设置为val
    // 如果存在key，将其值由旧的映射为新的
    // 如果不存在key，则新增这一组映射
    set(key, val) {     //   obj[key] = val
      let idx = this._keys.indexOf(`${key}`)
      if (idx == -1) {
        this._keys.push(key)
        this._vals.push(val)
        this._size++
      } else {
        this._vals[idx] = val
      }
      return this
    }
    // 获取key的映射目标    obj[key]
    get(key) {
      for (let i = 0; i < this._vals.length; i++) {
        if (this._keys === key) {
          return this._vals[i]
        }
      }
      return undefined
    }
    // 判断当前map中是否存在key     key in obj
    has(key) {
      for (let i = 0; i < this._size; i++) {
        if (this._keys[i] === key) {
          return true
        }
      }
      return false
    }
    // 删除key对应的映射对
    delete(key) {   //    delete   obj[key]
      let idx = this._keys.indexOf(`${key}`)
      this._keys.splice(idx, 1)
      this._vals.splice(idx, 1)
      this._size--
      return this
    }

    clear () {
      this._keys.length = 0
      this._vals.length = 0
      this._size = 0
    }
    // 返回当前map中映射对的数量
    get size() {
      return this._size
    }
  }
