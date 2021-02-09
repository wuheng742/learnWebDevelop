// "use strict";



// let generator = {

//     *[Symbol.iterator]() {
//         for(let i = 0; i < 100; i ++) {
//             yield i;
//         }
//     }
// };

let range = {
    from: 1,
    to: 5,

    // 这一行等价于 [Symbol.asyncIterator]: async function*() {
    async *[Symbol.asyncIterator]() {
        for (let value = this.from; value <= this.to; value++) {

            // 在 value 之间暂停一会儿，等待一些东西
            // await new Promise(resolve => setTimeout(resolve, 1000));

            yield new Promise(resolve => {
                setTimeout(()=>{
                    resolve(value);
                }, 1000)
            });
        }
    }
};

// for(let value of range) {
//     alert(value); // 1，然后 2，然后 3，然后 4，然后 5
// }

(async () => {

    for await (let value of range) {
        console.log(value);
        // alert(value); // 1，然后 2，然后 3，然后 4，然后 5
    }

})();