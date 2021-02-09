
// // 静态导入
// // 默认导出可以没有名字 假装这是 module.js
// export default class {

// }
// // 命名导出必须有名字 假装这是 module.js
// export let user = {};


// // 默认导出的导入不需要大括号，并且命名自己定
// import User from './module.js'
// import NewUser from './module.js'


// // 命名导出需要大括号，名字不能改
// import {user} from './module.js'
// // 同时导出默认的和命名的, 需要给默认的一个名字
// import {user, default as NewUser} from './module.js'
// // 这是全部导出了，默认的就是default
// import * as module from './module.js'
// module.user;
// module.default;

// // 导入之后 直接导出 这样子只能导出命名的
// export * from './module.js'
// export {default as NewUser} from './module.js'



// // 动态导入
// // 返回一个promise
// // import不是一个函数，只是看起来像，别使用apply/call
// import('./module.js').then(result=>{
//     result.user;
// });


// async function imp() {
//     let {user} = await import('./module.js');
// }
