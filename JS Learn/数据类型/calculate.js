
// all for happy 8


function factorial(start) {
    if (start == 1) {
        return 1;
    } else {
        return start * factorial(start - 1);
    }
}


let got10coin = [5000000, 8000, 800, 80, 5, 3]
let got9coin = [5000000, 8000, 800, 80, 5, 3]
let got8coin = [5000000, 8000, 800, 80, 5, 3]
let got7coin = [5000000, 8000, 800, 80, 5, 3]
let got6coin = [5000000, 8000, 800, 80, 5, 3]
let got5coin = [5000000, 8000, 800, 80, 5, 3]
let got4coin = [5000000, 8000, 800, 80, 5, 3]
let got3coin = [5000000, 8000, 800, 80, 5, 3]
let got2coin = [5000000, 8000, 800, 80, 5, 3]
let got1coin = [5000000, 8000, 800, 80, 5, 3]

function C(down, up) {
    return factorial(down)/(factorial(up)*factorial(down-up));
}


function expect(gotNumberCount, yourNumberCount, coins) {

    let totalCount = C(80, gotNumberCount);

    let gotCount = C(20, gotNumberCount);
    let extraNumber = yourNumberCount - gotNumberCount;
    if (extraNumber) {
        gotCount *= C(60, extraNumber)
    }
    

    return totalCount/gotCount;
}


// console.log(expect(10, 10));


console.log('10GAME' + (2 * 0.04579 + 3 * 0.05143 + 6 * 0.01148 + 80 * 0.00161 + 800 * 0.00014 + 8000 * 1/163381 + 500000 * 1/8911711));
console.log('9GAME' + (2 * 0.06375 + 3 * 0.11411 + 5 * 0.03260 + 20 * 0.00572 + 200 * 0.00059 + 2000 * 1/30682 + 300000 * 1/1380688));
console.log('8GAME' + (2 * 0.08827 + 3 * 0.08150 + 10 * 0.01830 + 88 * 0.00237 + 800 * 0.00016 + 50000 * 1/230115));
console.log('7GAME' + (2 * 0.12157 + 4 * 0.05219 + 5 * 0.00864 + 288 * 0.00073 + 10000 * 1/40979));
console.log('6GAME' + (3 * 0.12982 + 10 * 0.02854 + 30 * 0.00310 + 3000 * 0.00013));
console.log('5GAME' + (3 * 0.08394 + 21 * 0.01209 + 1000 * 0.00064));
console.log('4GAME' + (100 * 0.00306 + 5 * 0.04325 + 3 * 0.21264));
console.log('3GAME' + (0.13875 * 3 + 0.01388 * 53));
console.log('2GAME' + (0.06013 * 19));
console.log('1GAME' + (0.25 * 4.6));