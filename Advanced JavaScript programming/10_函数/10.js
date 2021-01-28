
// 调用对象使用this 并且传参
function sum(a, b) {
    console.log(a + b);
}

function test(a, b) {
    console.log(a);
    console.log(b);
    sum.apply(this, [a, b]);

}

test(1, 2);