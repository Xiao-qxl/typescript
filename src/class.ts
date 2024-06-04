class UserClass {
    readonly id: number // z只读
    gender: "男" | "女" = "男"
    pid?: string // 可选属性

    private _publicNumber: number = 3 // 每天一共可以发布多少文章
    private _curNumber: number = 1 // 当前已发布的文章数量
    // 属性简写
    constructor(public name: string, private _age: number) {
        this.id = Math.random()
    }
    // 访问器属性：控制属性的读写权限
    // 设置器
    set age(age: number) {
        if (age < 0) {
            throw new Error("年龄不能小于0")
        }
        if (age > 120) {
            throw new Error("年龄不能大于100")
        }
        this._age = age
        console.log("设置年龄：" + age)
    }
    // 读取器
    get age() {
        return Math.floor(this._age)
    }
    publish(title: string) {
        if (this._curNumber >= this._publicNumber) {
            console.log("今天已达发布上限")
            return
        }
        this._curNumber++
        console.log("发布成功：" + title)
    }
}

const user = new UserClass("张三", 18)
user.gender = "女"
user.age = 19
console.log(user.age)
user.publish("第1篇")
user.publish("第2篇")
user.publish("第3篇")
user.publish("第4篇")