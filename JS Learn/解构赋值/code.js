


// 可以解构数组 你可以跳过不想要的 可以将剩下的整合再最后一个属性，也是一个数组
let [first, second,,fourth, ...rest] = [1, 2, 3, 4, 5, 6];
console.log(rest);

// 可以使用默认值

[first, second =3 ] = [1];
console.log(second);


// 结构对象，要注意如果没有let 需要将表达式用()包裹起来，因为编译器会将{}当成代码块处理

let obj = {
    a: 33,
    b: 44,
    c: 55,
}

// restObj是对象
let {a: width, b:height, c:name, d:other = 1000, ...restObj} = obj
// 这里有个很奇怪的现象，解构赋值如果改了名字没有调用，那后面的赋值会报错，调用之后就不会了
// ({width, height} = {width: 200, height: 300});

console.log(restObj);
console.log(width);

// 可以直接赋值对象，没有传参就都是默认参数
function method({a = 1, b = 2, c = 3} = {}) {
    return a+b
}

console.log(method());
