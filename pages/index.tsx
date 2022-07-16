import type { NextPage } from 'next'

let obj1: {} = 1 // プリミティブ型でもなんでも受け入れてしまう
let obj2: object = [1,2,3,4] // 非プリミティブ型を受けれちゃうので良くない
let obj3: Record<string, unknown> = {}
let obj4: {[key: string]: unknown} = {} // 3,4は同じような書き方ができるがしまぶーさんはこっち推し
let obj5: {string: string; foo?: string; number: number} = {
  string: "string",
  number: 3
} 
let obj6: {
  object: 
    {
    type: string;
    key: string;
    foo: number;
    bar: boolean
    }
  } = {
  object: {
    type: "aaa",
    key: "test",
    foo: 1,
    bar: true
  }
} 


function Home() {
  return (
    <div>
      <Component />
    </div>
  )
}

const Component = (props: {foo?: true}) => {
  if (props.foo) {
    return (
      <div>s</div>
    )
  }

  return <div>Test</div>
}

export default Home
