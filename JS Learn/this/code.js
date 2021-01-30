

function check1() {
    return {
        name: 'Joseph',
        ref() {
            return this;
        },
    }
}

// 这里对象是没有this的，只是获取了函数的this
function check2() {
    return {
        name: 'Joseph',
        ref: this,
    }
}
alert(check1().ref());
alert(check2().ref);



