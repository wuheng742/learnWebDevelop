
// 会创建当前时区的对象，里面包含日期和时间
// let date = new Date();

// 传进去的是时间戳，也就是毫秒数，从utc时间1970年1月1日0点0分0秒加上这毫秒数，然后转成当前时区的时间。
// let utcDate = new Date(0);
// let utcNextDate = new Date(24 * 60 * 60 * 1000);
// alert(utcDate);
// alert(utcNextDate);

// 传进去字符串，将会按照字符串格式化进行解析
// let date = new Date('2020-12-20');
// alert(date);


// 同时传入多个数字，则是按照，年月日，时分秒，进行填入
let date = new Date(2020,12,20);
alert(date);

// 可以通过一系列的set方法灵活的更改时间, 还有自动校准的功能，如果时间超过，会自动帮你前进一天
let date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);
date.setSeconds(date.getSeconds() + 70);




Date.now() // 获取当前的时间
Date.parse('2012-01-26T13:51:50.417-07:00') // 通过字符串获取毫秒数