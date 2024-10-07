let arr: number[] = [1, 2, 3]

let arr2: (string | number)[] = []
arr2.push(5)
arr2.push('hello')

console.log(arr2.length);

let arr3: Array<number | string> = []
arr3.push(9)
arr3.push('tgus')
console.log(arr3);

let arr4: (string | number)[]
arr4 = []
arr4.push(9)
arr4.push('tgusss')
console.log(arr4);

// 推断类型为 number[]
const arr5 = [123]

// 报错
// arr.push('sttt')

const arr6: readonly number[] = [0, 1]
// 报错
// arr6[1] = 2
// arr6.push(3)
// delete arr6[0]

//只读数组
const a1: ReadonlyArray<number> = [0, 1]
const a2: Readonly<number[]> = [0, 1]
const a3 = [0, 1] as const  // const断言，只读
// a3[0] = [2]

// 多维数组
// 上面示例中，变量multi的类型是number[][]，表示它是一个二维数组，最底层的数组成员类型是number。
var multi: number[][] = [[1, 2, 3], [23, 24, 25]]


