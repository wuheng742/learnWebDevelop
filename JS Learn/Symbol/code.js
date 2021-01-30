"use strict";


// 不相等
let id1 = Symbol('id');
let id2 = Symbol('id');

// 相等
let id1 = Symbol.for('id');
let id2 = Symbol.for('id');

// 必须用中括号
let obj = {
    [id1]: '333',
    [Symbol.for('id')]: 333
};