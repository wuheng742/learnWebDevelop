



### Map
1. 类似于其他编程语言中的字典，但是是有序的
2. 可以使用任意的值当做键，不会自动转成字符串
3. 是可迭代对象
4. 可以使用Object.entries(obj) 将普通对象变成真正的数组，然后通过new Map()转换成Map
5. Object.fromEntries(map.entries())  Map转成普通对象

### Set
1. 类似于其他编程语言中的集合，但是是有序的
2. 值不会重复
3. 迭代的时候方法和Map一致，方便和Map互相转换

### weakMap  weakSet
1. 不阻止内存回收,不可迭代
2. 主要是作为暂存使用，weakMap可用方法delete has get set 方法， weakSet可用方法 has set delete