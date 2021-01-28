
function sayHello(person: string) {
    return 'Hello, ' + person;
}

let user = 'Tom';

console.log(sayHello(user));

function feb() {
    let args: {
        [i: number]: any,
        length: number,
        callee: Function,
    } = arguments;
}

interface aaa {
    age: number;
    name: string;
    add(x: number, y: number):number;
}

let newA: aaa = {
    age: 44,
    name: 'sdf',
    add(x: number, y: number): number {
        return 3
    }
}


