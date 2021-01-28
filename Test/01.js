


let arrowFunc = (name) => {
    console.log(globalThis);
};

arrowFunc.bind({age:16});

arrowFunc();

// let i = 0;

// function count() {

//   // 做繁重的任务的一部分 (*)
//   do {
//     i++;
//     progress.innerHTML = i;
//   } while (i % 1e2 != 0);

//   if (i < 1e3) {
//     console.log(i);
//     queueMicrotask(count);
//   }

// }

// count();



// let event = new Event("click");
// elem.dispatchEvent(event);

// function handler(e) { 
//     alert('sadfdsaf');
//     console.log(e);
//     event.preventDefault();
// }

// let elem = document.querySelector('#main');
// console.log(elem);


// for (const node of document.body.childNodes) {
//     console.log(node);
// }

// let bodyStyle = getComputedStyle(document.body);

// let centerX = document.documentElement.clientWidth/2;
// let centerY = document.documentElement.scrollHeight/2;

// console.log(centerX, '-', centerY);
// let centerElm = document.elementFromPoint(centerX, centerY);


// centerElm.style.background = 'yellow';


// let p = new Promise(resolve => {
//     throw new error("hahaha");
// });

// p.finally(()=>{
//     console.log('enter finally function');
//     return new Promise(resolve=>setTimeout(resolve(20)))
// }).then(result=>{
//     console.log(result);
// });



// let newP = Promise.resolve(p).then(
//     result=>{
//         return {status: "fulfilled", result};
// }, 
//     error=> {
//         return {status: "rejected", error};
// })

// newP.then(result=>{
//     console.log(result);
// })


// function F() {
//     this.name = "33";
//     this.age = 22;
// }

// function B() {}

// console.log(B.prototype.__proto__);


// let obj = {
//     name: 33,
//     age: 66
// };

// let newMap = new Map([
//     [obj, 22],
//     [name, "one"]
// ]);


// let newObj = Object.fromEntries(newMap);

// console.log(newObj);




