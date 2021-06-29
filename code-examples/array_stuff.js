function ArrayStuff() {
    console.log('')
    console.log('BEGIN ArrayStuff')
    let arrA = [1, 2, 3, 4];
    let arrB = arrA.flatMap(x => [x * 2]);
    console.log('let arrA = [1, 2, 3, 4];')
    console.log(arrA);
    console.log('let arrB = arrA.flatMap(x => [x * 2]);')
    console.log(arrB);
    console.log('END ArrayStuff')
    console.log('')
}
module.exports = ArrayStuff()
