
### Generator

1. 生成器，内部通过yield来返回数据
2. 可以用来替代迭代器，他的语法是 function* func(){}, 调用这个方法就会自动生成一个迭代器，然后调用next()方法，就可以获得yield后的数据，{done:boolean, value:any} 返回的数据和迭代器是一样的，可以通过next()传递数据进去，但是第一次调用next无法传递数据.
   1. 在调用next()后，程序会暂停在yield代码上，等待下一次调用
   2. 可以使用for...of迭代。

3. Symbol.asyncIterator 是异步迭代器的symbol标志，异步迭代器需要next()返回一个promise对象，我们通常使用async标记next,并且在其中使用await, 如果使用for...of 应该使用await关键字修饰 for await(let i of items) {}, 生成器和迭代器的规则一致。
