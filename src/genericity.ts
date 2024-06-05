import { ArrayHelper } from "./ArrayHelper";

function take<T>(arr: T[], n: number): T[] {
    if (n >= arr.length) {
        return arr;
    }
    const newArr: T[] = [];
    for (let i = 0; i < n; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}
// 泛型
const newArr = take<number>([1, 2, 3, 4, 5], 3);
// 类型推导
const newArr2 = take([1, 2, 3, 4, 5], 3);

// 回调函数：判断数组中的元素是否满足条件
type callback<T> = (n: T, i: number) => boolean

function filter<T>(arr: T[], callback: callback<T>) {
    const newArr: T[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

const arr = [1, 2, 3, 4, 5]
const newArr3 = filter(arr, (n) => n % 2 !== 0);

const helper = new ArrayHelper([1, 2, 3, 4, 5]);
helper.shuffle();

/**
 * 泛型约束
 * 将对象中的属性名每个单词首字母转换为大写
 */
interface hasNameProperty {
    name: string;
}
function namToUppperCase<T extends hasNameProperty>(obj: T): T {
    obj.name = obj.name
        .split(' ')
        .map(item => item[0].toUpperCase() + item.substring(1))
        .join(' ');
    return obj
}
const o = {
    name: 'zhang san',
    age: 22,
    gender: 'male'
}
const newO = namToUppperCase(o);
console.log(newO);

// 多泛型
/**
 * 将多个数组进行顺序混合
 */
function mixinArray<T, K>(arr1: T[], arr2: K[]): (T | K)[] {
    if (arr1.length !== arr2.length) {
        throw new Error('arr1 and arr2 must have same length');
    }
    return arr1.map((item, i) => {
        return [item, arr2[i]]
    }).flat();
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = ['a', 'b', 'c', 'd', 'e'];
const newArr4 = mixinArray(arr1, arr2);
console.log(newArr4);