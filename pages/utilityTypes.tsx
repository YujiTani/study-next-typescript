type User = {
    name: String,
    age: number | null,
    countory?: "US" | "UK" | "JP"
}

// Readonly 読み込み専用の型にすることができる。
type readOnlyUser = Readonly<User>

export const user: readOnlyUser = {
    name: "ゆーじ",
    age: 36,
    countory: "JP"
} 

// ReadOnlyにしていると代入できない
user.age = 40

// Partial 全てをOptional(任意)プロパティに変換してくれる
type partialUser = Partial<User>

export const user2: partialUser = {
    // 他のプロパティがなくてもエラーがでない
    name: "優志",
} 

// Required 全てを必須プロパティに変換する
type requiredUser = Required<User>

export const user3: requiredUser = {
    // 全てのプロパティが必須になっている

    // name: "優志",
    age: null,
    countory: "US"
} 

// Pick 欲しいプロパティを選択できる
type pickUser = Pick<User, "name">

export const user4: pickUser = {
    // 選択されたプロパティのみ求められる

    name: "優志",
} 

// Omit 指定されたプロパティ以外を除外する
type omitUser = Omit<User, "name">

export const user5: omitUser = {
    // 選択されたプロパティを除外する

    age: 15,
    countory: "JP"
}
