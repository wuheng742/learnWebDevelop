let array1 = new Array();

let array2 = [];

array2.push(1);
array2.pop();

array2.shift(1);
array2.unshift();

// 第一个是位置，第二个是删除几个，后面的都是增加的
array2.splice(0, 1, 3, 4, 5)

// 截取数组，没有终点就默认截取后面所有的
array2.slice(1, 3);

// 连接数组，或者其他元素，可以混合一起连接，数组会将里面的内容拿出来连接
array2.concat(array1, 2, 3, 4);


// 类数组实现了特殊的方法，他的属性就也可以被连接
let likeArray = {
    0: "something",
    1: "else",
    [Symbol.isConcatSpreadable]: true,
    length: 2
};


alert(array2.concat(likeArray));

// 类数组无法迭代
for (const value of likeArray) {
    console.log(value);
}

