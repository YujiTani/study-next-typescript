
function myFunc(arg: string) {
    // 型定義したいけど、従来の方法だと関数を定義した時点で型を書いておかないといけない
    return {value: arg}
}

export function foo<T>(arg: T) {
    // Generics型であれば、型の定義は遅延させることができる
    // 型情報を入れる場所は、引数の前
    return { value: arg}
}

export function union<T extends string | number >(arg: T) {
    // Generics型であれば、型の定義は遅延させることができる
    // 型情報を入れる場所は、引数の前

    if (typeof arg === "string") {
        return arg.toLocaleUpperCase()
    }

    return arg.toFixed()
}

const foo1 = foo<number[]>([1,2,3])
const foo2 = foo<string[]>(["a","b","c"])
const foo3 = foo<boolean>(false)
const foo4 = foo<["foo", "bar", "baz"]>(["foo","bar","baz"])
const foo5 = union<string>("yamato")