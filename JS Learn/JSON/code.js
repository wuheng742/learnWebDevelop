
let obj = {
    name: 'John',
    age: 27,

}

let obj2 = {
    name: 'John',
    age: 27,

    toJSON() {
        return 'go away'
    }
}


let json = JSON.stringify(obj);

let json2 = JSON.stringify(obj, (key, value) => {
    if (key === 'name') {
        return 'wuheng'
    }
    return value;
});
let json3 = JSON.stringify(obj2);

console.log(json);
console.log(json2);
console.log(json3);