

// 创建一个空的对象 user。
let user = {};
// 为这个对象增加一个属性，键是 name，值是 John。
user.name = "John";
// 再增加一个属性，键是 surname，值是 Smith。
user.surname = 'Smith';
// 把键为 name 的属性的值改成 Pete。
user.name = 'Peter';
// 删除这个对象中键为 name 的属性。
delete user.name;

// 写一个 isEmpty(obj) 函数，当对象没有属性的时候返回 true，否则返回 false。

function isEmpty(obj) {

    let isEmpty = true;
    for(let key in obj) {
        isEmpty = false
        break;
    }
    return isEmpty;
}

// 更好的答案
function isEmpty(obj) {

    for(let key in obj) {
        return false;
    }
    return true;
}



let obj = {
    name: 'alias',
    age: 26,
};

let newObj = {};
Object.assign(obnewObj, obj);



let obj = {
    [Symbol.toPrimitive]: function(hint) {
        return hint === 'string' ? 'string' : 100;
    },
    toString() {
        return 'string';
    },
    valueOf() {
        return 200;
    }
}
