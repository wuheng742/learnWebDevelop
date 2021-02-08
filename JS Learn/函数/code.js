
// // 对于声明这样是可以的，表达式就不行
// getAge('alias')

// // 函数声明
// function getAge(name) {
//     if (name === 'alias') return 18;
// }

// // 函数表达式
// let getAge = function (name){
//     return 18;
// };

// // 箭头函数的三种
// let getAge = n => alert(n);
// let getAge = (n, m) => alert(n + m);
// let getAge = (n, m) => {
//     return alert(n + m);
// };


// // 构造函数
// function User() {

//     // 如果使用的是new 关键字调用的函数，target就是函数本身，否则是undefined,很少使用，作为了解
//     if(new.target) {
//         this = {};
//     }

//     // this = {} 隐式
//     this.name = 'Joseph';
//     // return this 隐式
// }



// let user = new User();



// function rest(a, b, ...c) {
//     return c;
// }

// // 复制
// let array1 = [1, 2, 3];
// let array2 = [...array1];
// let obj1 = {
//     a: 3,
//     b: 4,
// };
// let obj2 = {...obj1};


// // 闭包   总是可以取得外部词法环境中声明的变量和参数 
// function a() {
//     let count = 0;
//     return () => {
//         count++;
//         console.log(count);
//     }
// }

// let b = a();
// let c = a();
// let d = a();

// console.log(b(),c(),d());


let obj = {
    age: 33,
    getAge() {
        console.log(this.age);
    },
};



let f = partial(obj.age);
f();



