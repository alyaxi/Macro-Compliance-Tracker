import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
      </Head>

      <div className="container mx-auto">
        <div className="flex text-center">
        <div className="w-full m-4">
          <h1 className="text-4xl">
          Macro Compliance Tracker
          </h1>
        </div>
        </div>

      </div>
    </div>
  )
}
