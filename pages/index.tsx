import type { NextPage } from 'next'

// Arrayの書き方
const foo : (number | string )[] = [1,"2","3",1,3]
const bar : [string, number, boolean] = ["1",2,false,false]

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
