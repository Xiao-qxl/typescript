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
console.log('combine函数调用', combine1, combine2);

function sum1(a: number, b: number, c?: number): number {
    return a + b + (c || 0);
}

// 枚举
enum Gender1 { // 默认从0开始
    Male = "男",
    Female = "女"
}
let gender: Gender1 = Gender1.Male;
console.log('gender', gender);

function printEnumObj(obj: object): void {
    Object.values(obj)
        .forEach(v => {
            console.log(v);
        })
}
printEnumObj(Gender1)

// 接口
// 接口的继承
// readly只读修饰符
interface Condition {
    (num: number): boolean;
}
interface Condition2 extends Condition {
    readonly msg: string;
}
interface Condition3 extends Condition, Condition2 {
    msg2: string;
}
// 类型别名定义
type C {
    T1: number[];
}
type C2 = {
    T2: number;
}
type C3 = {
    T3: boolean;
} & C & C2;
function sum2(numbers: number[], callback: Condition): number {
    let s = 0;
    numbers.forEach(n => {
        if (callback(n)) {
            s += n;
        }
    })
    return s
}

// 修饰符
// const arr5: readonly number[] = [1, 2, 3];
const arr5: ReadonlyArray<number> = [1, 2, 3];