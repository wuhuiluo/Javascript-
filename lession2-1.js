//Array循环方式
// 1.for
const arr = [1, 2, 3, 4, 5]
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) {
        break;
    }
    // console.log(arr[i])
}
// 2.forEach
arr.forEach(item => {
    //不支持break 和 continue
    // console.log(item)
})
// 3.every
arr.every(item => {
    // console.log(item)
    return true
})
// arr.a = 8;
// console.log(arr)
// 4.for in  为object设计的
for(var index in arr) {
    //这里的index是字符串
    //  === : 既检查值也要检查类型所以该代码不起作用 if(index === 2) {
    //     continue;
    // }
    if(index == 1) {
        break;
    }
    // console.log(arr[index])
}
// 5. for of
for(let item of arr) {
    console.log(item)
}
const b = {
    A: [1,2],
    B: [1,2]
}
for(let index in b) {
    console.log(b[index])
}