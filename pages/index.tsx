import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>tanay</title>
        <meta name="description" content="pog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-black mt-36 ml-60">
        <Image src="https://i.imgur.com/4D8PDeU.png"                
               alt="pfp"
               width={128} 
               height={128} />
        <h1 className="text-5xl mt-2">Hey I&apos;m Tanay!</h1>
        <h2 className="text-xl mt-2">14 year old student and developer</h2>
        <div className="flex">
        <a href="https://github.com/tnb24" target="_blank" rel="noreferrer" className="mt-2">
        <Image
               src="https://i.imgur.com/lq1Wrk3.png" 
               alt="gh img"
               width={32} 
               height={32} 
        />       
        </a>
        <a href="https://keybase.io/tanaybhardwaj" target="_blank" rel="noreferrer" className="ml-2 mt-2">
        <Image
               src="https://i.imgur.com/s32JJ6J.png"
               alt="muh gpg"  
               width={32} 
               height={32} 
        />
        </a>
        </div>
      </div>
    </div>
  )
}


export default Home
