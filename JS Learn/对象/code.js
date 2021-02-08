

// // 创建一个空的对象 user。
// let user = {};
// // 为这个对象增加一个属性，键是 name，值是 John。
// user.name = "John";
// // 再增加一个属性，键是 surname，值是 Smith。
// user.surname = 'Smith';
// // 把键为 name 的属性的值改成 Pete。
// user.name = 'Peter';
// // 删除这个对象中键为 name 的属性。
// delete user.name;

// // 写一个 isEmpty(obj) 函数，当对象没有属性的时候返回 true，否则返回 false。

// function isEmpty(obj) {

//     let isEmpty = true;
//     for(let key in obj) {
//         isEmpty = false
//         break;
//     }
//     return isEmpty;
// }

// // 更好的答案
// function isEmpty(obj) {

//     for(let key in obj) {
//         return false;
//     }
//     return true;
// }



// let obj = {
//     name: 'alias',
//     age: 26,
// };

// let newObj = {};
// Object.assign(obnewObj, obj);



// let obj = {
//     [Symbol.toPrimitive]: function(hint) {
//         return hint === 'string' ? 'string' : 100;
//     },
//     toString() {
//         return 'string';
//     },
//     valueOf() {
//         return 200;
//     }
// }



// // 遍历对象 
// let obj = {
//     age: 33,
//     getAge() {
//         console.log(this.age);
//     },
// };

// let obj1 = {
//     name: 44,
//     __proto__: obj,
// }

// obj1.getAge();

// for (const key in obj1) {

//     const element = obj1[key];
//     console.log(key, element);

//     // if (Object.hasOwnProperty.call(object, key)) {
//     //     const element = object[key];
        
//     // }
// }



let obj = {
    name: 'John',
    getName: ()=> {
        alert(this.name);
    },
}

console.log(obj);

class NewObject {
    static getOther() {
        console.log('show other');
    }
    static className = '333';
    name = 'John'
    getName = ()=> {
        alert(this.name);
    }
}

class Second extends NewObject {
}

console.log(Second.__proto__);

// setTimeout(new NewObject().getName, 1000);


