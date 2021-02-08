
### Promise

1. 回调就是你希望知道一件事情到底是做好了还是做差了，需要给你一个反馈，好了要怎么样，差了要怎么样
2. promise 类的对象有两个特别的属性，state 和 result
   1. state 有4个状态 pending settled fulfilled reject
      1. pending就是任务还在处理，没有结果的状态
      2. settled 就是 有了一个状态，不一定是成功或者失败
      3. fulfilled 是得到了满意的结果
      4. reject 一般都是被拒绝了，返回了错误
   2. result 就是处理完后返回的信息
3. 你需要在初始化promise的时候传入一个方法，带着两个参数，resolve和reject , 这两个会由promise传入，是两个方法，然后你在成功的时候调用resolve, 错误的时候调用reject,这样promise就可以将他们向外传递，并且改变状态，里面的执行过程，称为生产过程，你可以选择延迟执行，也可以马上执行完成。
4. 可以使用结果的函数在这里称为消费者，消费传递出来的数据
   1. then() 有两个参数，可以传两个函数，第一个是处理fulfilled 的参数，第二个是处理reject的参数，一般我们都只传入第一个
   2. catch(), 其实就是传入第二个参数的then , then(null, (rejectValue)=> {})
   3. finally(), settled状态就会被调用，一般写一些生产过程结束后的收尾工作，然后会将得到的结果往下传递。
5. promise 链条，可以在then中 return 一个thenable的对象，后面的then就会接收到这个对象，这个对象可以自定义。
   1. 链式调用可以处理多个异步的任务，并且不会有向右增长的代码

6. fetch() 是进行网络请求的方法，在服务器响应病返回header后,会放回一个response的对象,然后使用这response.json的方法，来获取从服务器获得的完整数据，这里就是有两个耗时操作，一个是fetch的时候，第二个是response.json(),他也会返回一个Promise对象，在完全加载完成并且转成json之后，会返回这个数据
7. 在promise的生产者代码区域和之后的事件处理区域，都有隐藏的try...catch进行包裹，如果在其中出现了错误，就会转移到最近的catch，catch如果处理完成，就可以继续处理下面的then，也可以选择抛出，就会往下找下一个catch,也可以不处理，这个链式调用就会中断，然后就会触发全局的unhandledrejection事件，告诉开发者哪里出错了
8. promise的几个主要类方法
   1. all()  放进去一个可迭代的对象，然后会等待里面的对象全部fulfilled,然后就传回一个结果数组,如果其中有一个出现了reject,则其他的全部忽略，只返回一个error
   2. allSettled() 和 all一样，唯一的区别在于，不管其实是否有reject,都会等待全部settled后返回,返回一个对象{state: 'fulfilled or reject', value:'error or result'} 
   3. race() 返回可迭代对象中，最快完成fulfilled 的那一个，其他的忽略
   4. resolve()  将一个值通过resolve返回，就是包装成了一个promise对象返回, 如果原来就是promise对象，就会直接返回了
   5. reject() 和上面一样，只是使用reject返回, 基本不使用。

9. Promisification 也就是将一个普通的回调函数,promisfy化，就是转换成返回pormise对象，主要就是将传入的返回函数重写成promise形式的，然后再传回原函数中调用。就是外部添加一个装饰器函数.

10. js给Promise打造了一个promise jobs的队列，专门处理这些异步的方法，也叫做微任务队列，其中then,finally,catch,都是异步的微任务，会在当前js执行完毕后按添加的先后顺序执行.


##### Async/await
1. async 是修饰函数的，await是修饰thenable对象的
2. async 修饰的函数总是返回一个Promise对象，并且只有在被修饰的函数内，才可以使用await
3. await 触发后函数的代码会暂停，直到返回resolve值或者reject, 出现reject可以使用try...catch捕获，也可以不理会，在函数调用的时候添加catch统一捕获。
4. async 和 await 不能放在最顶层的代码结构中.