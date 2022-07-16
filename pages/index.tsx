import type { NextPage } from 'next'

const Home: NextPage = () => {
  const foo : number = 123
  let baz = {} as { bar: number }; // 型アサーション
  // let baz = <{ bar: number }>{}; // jsxファイルなどでは、こんな風に記述する

  baz.bar = 1;

  const double = (x: number ): number | undefined => {
    if (x > 0) {
      return
    }

    return x * 2
  }

  double(foo)

  return (
      <div>Test</div>
  )
}

export default Home
