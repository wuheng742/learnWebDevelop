

class Obj {
    name = 'admin';
    constructor() {
        this._age = 33;
    }

    get age() {
        return this._age;
    }
}


let proxy = new Proxy(new Obj(), {
    get(target, propName, receiver) {
        console.log(target, propName, receiver);
        return Reflect.get(...arguments);
    }
});

console.log(proxy.age);

