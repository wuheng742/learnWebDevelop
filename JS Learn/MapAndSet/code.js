

let obj = {
    name: 'wuheng',
    age: 22,
};


let aMap = new Map()
aMap.set(obj, 13)
    .set('12', 13)
    .set(13, 13);

aMap.delete(13);

for (const entire of aMap) {
    console.log(entire);
    console.log(entire[0]);
    console.log(entire[1]);
}

console.log(aMap);


