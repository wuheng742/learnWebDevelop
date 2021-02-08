


function throwError() {
    throw new Error('get a error');
}



function aFunction() {

    try {
        throwError()
    } finally {
        console.log('always print aFunction');
    }

}

function bFunction() {

    try {
        aFunction()
    } catch(err) {
        console.log(err);
    } finally {
        console.log('always print bFunction');
    }

}

bFunction();

