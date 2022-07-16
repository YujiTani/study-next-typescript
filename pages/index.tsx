import type { NextPage } from 'next'

type foo = {
  name: "テキサスバーガー"
}

type bar = {
  name: "ハリウッドバーガー"
}

type fooBar = foo | bar 

const test: fooBar = {
  name: "テキサスバーガー"
}

if (test.name = "テキサスバーガー") {
 const res = true
} else {
  const res = false
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
