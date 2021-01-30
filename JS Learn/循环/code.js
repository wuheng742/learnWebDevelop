

// 错误
code:for(;;) {
    break;
}

alert('first');

alert('second');

// 正确
code:for(;;) {

    break code;
}

alert('end');