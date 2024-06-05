export class ArrayHelper<T> {
    constructor(private arr: T[]) {
    }
    take(n: number): T[] {
        if (n >= this.arr.length) {
            return this.arr;
        }
        const newArr: T[] = [];
        for (let i = 0; i < n; i++) {
            newArr.push(this.arr[i]);
        }
        return newArr;
    }

    shuffle(): T[] {
        const newArr: T[] = [];
        while (this.arr.length > 0) {
            const index = Math.floor(Math.random() * this.arr.length);
            newArr.push(this.arr[index]);
            this.arr.splice(index, 1);
        }
        return newArr;
    }
}