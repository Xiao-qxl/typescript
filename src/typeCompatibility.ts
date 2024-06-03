// 鸭子辨型法
interface Duck {
    sound: "嘎嘎嘎",
    swim: () => void
}

let person = {
    name: "伪装成鸭子的人",
    age: 11,
    sound: "嘎嘎嘎" as "嘎嘎嘎", // 类型断言
    swim() {
        console.log(this.name + "正在游泳， 并发出了" + this.sound)
    }
}

let duck: Duck = person