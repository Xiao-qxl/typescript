let say: string = "hello";

function sum(a: number, b: number): number {
    return a + b;
}

function isOdd(num: number): boolean {
    return num % 2 === 1;
}

// 数组
let nums: number[] = [1, 2, 3, 4, 5, 6];
let nums2: Array<number> = [1, 2, 3, 4, 5, 6];

// 对象
let obj: object = {
    name: "zhangsan",
    age: 18
}
function printValues(obj: Object): void {
    for (let key in obj) {
        console.log(obj[key]);
    }
}

let name: string | undefined;
if (typeof name === "string") {
    // 类型保护
    console.log(name.length);
}

function throwError(msg: string): never {
    throw new Error(msg);
}

// 字面量约束
let num: 1 | 2 | 3;

// 元组类型
let user2: [string, number, '男' | '女'] = ['zhangsan', 18, '男'];

// 类型别名
type Gender = '男' | '女';
type User = {
    name: string,
    age: number,
    gender: Gender
}
let u: User = {
    name: 'zhangsan',
    age: 18,
    gender: '男'
}

// 函数
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: number | string, b: number | string): number | string {
    if (typeof a === 'number' && typeof b === 'number') {
        return a * b;
    } else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    throwError("a和b必须是相同类型")
}
const combine1 = combine("a", "b")
const combine2 = combine(2, 3)
console.log(combine1, combine2);

function sum1(a: number, b: number, c?: number): number {
    return a + b + (c || 0);
}