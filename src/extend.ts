enum Permisson {
    Read = 1,   // 0001
    Write = 2,  // 0010
    Create = 4, // 0100
    Delete = 8, // 1000
}

// 使用或运算组合权限
let p = Permisson.Read | Permisson.Write;

console.log(`十进制:${p.toString(10)}`, `二进制:${p.toString(2)}`,);

// 与运算判断是否有某个权限
function hasPermission(target: number, permission: Permisson): boolean {
    return (target & permission) === permission;
}

// 异或运算，删除某个权限
function removePermission(target: number, permission: Permisson): number {
    return target ^ permission;
}
