

### 函数声明
1. 函数名称是一个行为，需要简洁有代表性的名字， get,show,check,create,calc, 每个函数实现最小单一功能
2. 函数可以传入无限个参数，但是只有被规定的参数可以获取，还有一个地方可以获取所有的传入参数，就是arguments, arguments是类数组
3. 函数的return为空或者没有return，就等于返回undefined, 
4. 函数的参数是对传入值的拷贝
5. 函数可以有默认值，默认值可以是需要经过计算的语句
6. function name() {} 叫做函数声明 在代码块执行之前就会被创建，所以可以在代码块的任意地方被调用
7. 当做值传入的时候，可以省略名字，变成匿名函数
8. 函数就是对象，其中有两个属性，一个是name 函数的名字,一个是length 指的是函数定义的时候的参数个数，rest参数不会算在里面
   


### 函数表达式
1. 表达式是需要赋值给一个变量
2. 只有代码执行到这个赋值操作的时候，函数才会被创建。
3. 函数就是一种特殊的值，可以进行赋值，传递操作。
4. 函数表达式也可以在声明的时候再取个名字，但是仅供函数内部调用使用 let func = function a() { a(); };

### 特殊的创建函数的方法
1. let func = new Function ([arg1, arg2, ...argN], functionBody);
2. 可以根据字符串创建函数，处于全局的词法空间。
3. 要避免与其他的重名冲突。

### 箭头函数
1. 简洁是特点
2. 没有this
3. 没有arguments
4. 不能使用new
5. 适合用在，没有自己的上下文，需要他人上下文的短代码。

### 构造器函数
1. 构造函数就是普通的函数
2. 约定必须大写开头，然后调用的时候即使没有参数也需要写小括号
3. 为了批量的制造对象而生的
4. 隐式的将this赋值为空对象，隐式返回这个this, 如果显示的返回其他对象，则这个this就无效了，如果显式返回原始类型的值，则会直接隐式返回this的。


### Rest 参数与 Spread 语法
1. rest参数是出现在函数的末尾，将剩下的所有参数打包成一个数组
2. spread语法是将数组或者对象，将他们展开来使用，可以用他方便的进行复制，当然也是浅层拷贝.



### 调度函数
1. setTimeOut() 传入函数，毫秒数，参数，一定的延迟后调用函数，延迟时间准，可以重复调用,返回一个值来控制取消他
   
2. setInterval() 传入函数，毫秒数，参数， 根据间隔调用函数，可能出现函数的运行时间超过时间间隔，就会变成连续的调用。
3. 如果没用最好取消掉，因为函数会被持有，占用内存，函数还会持有用到的词法环境里的参数，所以可能很大。
4. 连续无间隔调用,前几次都是立即执行，后面则是变成了间隔4毫秒。


### 装饰器模式和转发
1. 通过装饰器函数，赋予原本函数更多的功能，并且不会增加原本函数的复杂度
2. func.call(), 可以传入this, 参数，适合可迭代对象
3. func.apply(), 可以传入this, 参数，适合类数组对象 ，比较快，很多引擎有优化
4. 上面两种方法可以将别人的函数借来使用，比如, [].join.apply(arguments);

### 绑定this
1. func.bind() 传入this和一些想要绑定的参数，绑定参数生成的叫做偏函数，方便在已经实现了的函数上，细分函数的用途。