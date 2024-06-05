import { Dictionary } from "./dictionary";
const dict = new Dictionary<string, number>();
// 设置
dict.set("a", 1);
dict.set("b", 2);
dict.set("a", 3);
console.log(dict);
// 遍历
dict.forEach((key, value) => {
    console.log(key, value);
});
// 判断是否存在键
console.log(dict.has("a"));
// 删除键
dict.delete("a");
