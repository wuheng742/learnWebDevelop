

1. 对象是包含了键值对的特殊关联数组
2. 键都是字符串，即使你写了数字，也会转换成字符串, 键还有一种类型是Symbol
3. 中括号包裹的键是计算属性，可以写表达式
4. 可以使用in 关键字 查询有没有这个属性  "a" in obj
5. delete 可以删除属性
6. 遍历属性使用for in ,如果键可以转成成整数，就会按照整数进行排序，否则是按照创建先后排序
7. 对象是通过引用来被传递的
8. 可以使用Object.assign() 进行浅拷贝，如果对象内还有对象，可以通过lodash库内的函数来操作, 如果拷贝中键重复，后者会覆盖前者。
   1. 可以用来mixin 就是混入，因为没有多重继承，这个方式可以帮助一个对象，获得其他对象的方法，但是要注意名字如果重复，会覆盖
   


### 对象与原始值的转换

1. 任何对象都是true 所以不需要转换成boolean
2. 在转换中会有三种情况  string number 和 default, 后两种我们一起当做number处理
3. obj[Symbol.toPrimitive] 会最先被调用，如果这个属性为空，则调用toString(), 然后是valueOf(),后两者没有要求你一定要返回原始值，但是第一个不返回原始值就会报错, 约定俗成的规矩就是返回原始值，toString是字符串，valueOf是数字。
4. 我们一般使用日志打印时，用toString()就可以了
   

### 原型
1. protoType 是对象中的一个属性，存着指向的原型，而__proto__属性则是前面属性的读写方法，是古老时代遗留下来的，但是很好用
2. 如果访问对象的属性或者方法，找不到，就会顺着原型链往上找
3. for in 会将原型链上的属性也遍历出来.
4. 在函数上有一个protoType普通属性，默认是这个对象，{constructor: 指向自己}，会在被new调用的时候赋值给对象的protoType属性
   1. 不要去覆盖函数的这个属性，可以添加属性,但是我们一般也不这么做，容易冲突,除非我们是在实现polyfilling


### 关于类
1. 类也有声明和表达式两种方式，和函数一样，在表达式中的名字仅供内部使用
2. 在类中的属性是绑定在创建的对象上的，而方法则是在构造器方法的protoType里面。
3. 在类中定义方法使用类的属性和箭头函数，this就不会丢失，因为class创建的对象内部有一个this指向对象，箭头函数就会在创建时的词法环境里找到这个this，并且正确的引用他
4. extends 可以继承其他的类，就是将那个类的protoType属性中的对象赋值过来
5. static 是创建类方法和类属性，就是在这个初始化的方法上直接添加方法和属性，而不是放在protoType对象内，也会被extends关键字一起继承,继承的实现就是将要继承的类对象直接赋值给当前类对象的[ProtoType]属性
6. #name 这是最新的私有方法和属性的语言层面的实现，但是太严格了，_开头为私有方法还是比较好用的，必须严格的区分公共和私有的内容，不造成调用和逻辑层面上的耦合，这是提升代码质量的好习惯.
7. 内建的类，比如Array,Object, 自身不会继承上一级的类方法。
8. instanceOf 用在对象上，根据类的protoType进行比较，typeOf则是用在原始类型上，toString可以用来自定义字符串形式的类型返回

### 关于super
1. js特地给函数新增了一个属性，[HomeObject] 来指向函数创建时候的类或者对象，供之后的super关键字查找自己的父类使用，避免循环调用，特别注意，在对象中，只有eat() {} 这样定义会有这个属性, eat: function() {} 在属性中定义函数，这样是没有的,也就无法使用super
2. 将带有super的方法进行复制是不安全的.



### 其他需要关注的
1. Object的属性除了value还有一些特性可以修改。这些叫做数据属性，控制着这个属性是否可遍历，是否可删除，修改。
2. 还有一个属性叫做访问器属性，有get 和 set 没有value 和writeable ,其他的和数据属性一样
3. 对象属性加上下划线表示是私有属性，这是共识，并没有在编译层面提供支持。