import type { NextPage } from 'next'
import { TwitterCard } from '../components/TwitterCard'

function Home() {
  return (
    <div>
      <p className='text-red-500'>Typescript</p>
      <TwitterCard
      retweetedUser={"田中"} 
      user={{
        name: "山田",
        accountName: "yamada",
        image: "https://prcm.jp/list/%E3%83%90%E3%83%BC%E3%83%90%E3%83%91%E3%83%91%20%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3"
      }
    }
      body={{text: "テスト"}}
      analytics={
        [
         {
           path: "sss",
           count: 1,
         },
         {
           path: "a",
           count: 222,
         },
       ]
      }
      type= "retweet"
      />
    </div>
  )
}

export default Home
