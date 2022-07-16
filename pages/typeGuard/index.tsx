import { User } from "./about"

export const foo = (value: string | number | boolean) => {
    // typeofで型の絞り込みを行う、returnしていく事で、他の型の可能性を消すことができる
    
    if(typeof value === "string") {
        return value
    }

    if(typeof value === "number") {
        return value
    }
    return value
}

const bar = (value: string | string[]) => {
    // 配列かどうか判定する事で絞り込んでいる

    if(Array.isArray(value)) {
        return value
    }
    return value
}

const baz = (value?: string) => {
    // falsyな値かどうかを判定

    if(!value) {
        return null
    }
    return value
}

type userA = {name: "山田"}
type userB = {name: "山川"; nickName: "やまぴー"}

const bal = (value: userA | userB) => {
    // in演算子を使って、プロパティを持っているかを判定

    if("nickName" in value) {
        return value
    }
    return value
}

type userC = {name: "浜田"; from: "japan"}
type userD = {name: "佐敷"; from: "northAmerika"}
type userE = {name: "佐敷"; from: "china"}

const bam = (value: userC | userD | userE) => {
    // 値で条件分岐

    switch (value.from) {
        case "japan":
            return value
        case "northAmerika":
            return value
        case "china":
            return value
        default:
            throw new Error('ありえない値の混入がありました。')
    }
}
