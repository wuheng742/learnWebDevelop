

1. 在输出值的时候，会有隐式的类型转换，当然也可以进行显示的类型转换
2. String(value) 将转换成字符串，很粗暴的 true => 'true'  123 => '123'  null = 'null'
3. Number(value) 转成数值  
   1. 字符串去掉首位空格，然后是纯数字，就输出数字, 否则为NaN
   2. 空字符串输出0
   3. undefined 变成  NaN    null 则是 0    true是1  false 是 0
4. Boolean(value)  0,null,undefined,'',NaN 都是false  其他是true