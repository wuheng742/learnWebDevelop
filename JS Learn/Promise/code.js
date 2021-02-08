let pos = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(40);
    }, 1000);
});

// 自己创建的thenable 类
class DesignThenable {

    constructor(result) {
        this.result = result;
    }
    // promise 看到这个then方法，就会将这俩方法传递过来.
    then(resolve, reject) {

        setTimeout(() => {
            console.log('DesignThenable');
            resolve(this.result * 10);
        }, 2000);

    }

}

// pos.then((result)=>{
//     console.log(result);
//     return new DesignThenable(result);
// }).then(result=> {
//     console.log(result);
// })

// fetch('https://api.github.com/users/solomonxie')
// .then(response=> {
//     console.log('header 被返回', response);
//     return response.json();
// }).then(data=> {
//     console.log('data 返回', data);
// })


let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p1');
    }, 3000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p2');
    }, 2000);
});

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p3');
    }, 1000);
}).then(result => {
    return result + 'then';
});

Promise.all([p1, p2, p3]).then(results => {
    for (let result of results) {
        console.log(result);
    }
})

// Promise.all([p1, p2, p3].map((value) => {
//     return Promise.resolve(value).then((result) => {
//         return {state: 'fulfilled', value: result};
//     }, error => {
//         return {state: 'reject', value: error}
//     });
// })).then(results => {
//     for(let result of results) {
//         console.log(result);
//     }
// })