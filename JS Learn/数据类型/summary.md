

### 原始类型
1. Number 是数字类型，可以是浮点数和整数，其中特殊的是Infinity, NaN
   1. Infinity 是超过范围后的直
   2. NaN是计算错误后的值，计算过程有一步出错，就会将NaN当做最终值传递出去，所以在js中，数学计算是安全的，不会在运行时崩溃
   3. 数字有精度，在计算加减之后，需要使用toFixed(),约束小数点后的位数，不然会有很奇怪的事情发生
   4. parseInt, parseFloat, 可以在数字和字符串混合的字符串中提取数字，前提是第一个字符必须为数字。
   5. 可以在数字后面加e来表示后面的0的个数，可以是正的或者负的，1e2 = 100, 1e-2 = 0.01
   6. 直接在数字后面调用方法，需要2个点, 1234..toString(8), 这里的8是进制的意思，可以填入不同的进制进行转换
   7. ~将数字转成整数，去掉小数，要求数组是32bit内的，转换方式是-(n + 1)
2. String 是字符串类型, 在js中没有字符类型
   1. 有三种方式 双引号，单引号和反引号
   2. `${1 + 2}` 反引号可以插入变量或者表达式
   3. 可以使用for...of 遍历
   4. 无法改写部分，只能整个替换
3. Boolean 布尔值  true false 
4. BigInt 超级大的数字，后面加个n
5. Symbol 对象中的唯一标识符
6. null 表示未知,没有，空的值,一般未知的值可以复制null, null并不表示没有对象，而是没有一切值
7. undefined 表示未被赋值，变量没赋值的时候默认就是这个类型，不要手动使用它来赋值，应该是用null表示没有.

### 原始类型的方法

1. 为了保持原始类型的轻量，使用了对象包装器，会在调用方法的时候创建对象将原始类型包装，然后调用完方法销毁
2. 引擎高度优化了这个过程，可能连创建对象都跳过了，但是必须合理的瞒过编译器
3. 不要手动的通过new创建原始类型的对象，会造成混淆。
4. 这和类型转换不同，没有new，类型转换还是原始类型之间的转换，不涉及对象包装。


### 引用类型
5. Object 对象