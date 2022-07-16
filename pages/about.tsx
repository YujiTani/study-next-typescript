export type User = {
    name : string
    [key: string]: string | number
} & PersonalData


type PersonalData = {
    [key in "height" | "weight"]?: number | string

}

const user: User = {
    name: "山田",
    account: "yamada",
    tel: "08029835658",
    age: 36,
    // height: 170,
    // weight: "ひみつ",
}