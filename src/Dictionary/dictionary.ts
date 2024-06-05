export type Callback<T, U> = (key: T, value: U) => void;

export class Dictionary<K, V> {
    private keys: K[] = [];
    private values: V[] = [];
    private _size: number = 0;

    get size() {
        return this.keys.length;
    }
    set(key: K, value: V) {
        const i = this.keys.indexOf(key);
        if (i < 0) {
            this.keys.push(key);
            this.values.push(value);
        } else {
            this.values[i] = value;
        }
        return this;
    }

    forEach(callbackfn: Callback<K, V>) {
        for (let i = 0; i < this.keys.length; i++) {
            callbackfn(this.keys[i], this.values[i]);
        }
    }

    has(key: K): boolean {
        return this.keys.includes(key);
    }

    delete(key: K) {
        const i = this.keys.indexOf(key);
        if (i >= 0) {
            this.keys.splice(i, 1);
            this.values.splice(i, 1);
            console.log(key + '删除成功');
            return this;
        } else {
            throw new Error(`key ${key} not found`);
        }
    }

}