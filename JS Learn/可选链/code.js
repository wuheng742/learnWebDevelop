"use strict";


let user = {
    name: 'Joseph',
    address: null,
    getAge: null,
}

// 报错
user.address.street;

// 返回undefined
user.address?.street;
user['address']?.street;
user.getAge?.();