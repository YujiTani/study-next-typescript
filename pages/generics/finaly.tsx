export const multyArguments = <T extends string, K extends number, U extends boolean >(foo: T, bar: K, baz: U) => {
    // Generics型の複数引数定義

    return {
        foo,
        bar,
        baz
    };
};

const myFunc = multyArguments("test", 123, true);

const getProperty = <T, K extends keyof T >(object: T, key: K,) => {
    // object　の値を取得

    return object[key]
};

const object = {
    name: "山田",
    age: 21,
    job: "creater"
}

const myFunc2 = getProperty(object, "age" );


const setProperty = <T, K extends keyof T >(object: T, key: K, value: T[K]) => {
    // objectに値をセット

    object[key] = value
};

const myFunc3 = setProperty(object, "age", 30);
