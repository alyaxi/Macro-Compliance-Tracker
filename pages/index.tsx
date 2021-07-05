import Head from 'next/head'
import Image from 'next/image'
import React, {useState} from "react"
import Form from '../components/Form'
import Result from './../components/Result'
import fetch from 'isomorphic-unfetch'

const Home = ({data}) => {
  

  const [result, setResult] =useState(data)
  console.log(result);

  const onChange = (e) => {
    const data = {...result};
    let name = e.target.name

    let resultType = name.split(" ")[0].toLowerCase()
    let resultMacro = name.split(" ")[1].toLowerCase()
    

    data[resultMacro][resultType] = e.target.value;

    setResult(data)
  }
  
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

        <div className="flex text-center">
        <div className="p-4 bg-gray-200 w-1/3 c-white">Previous Day</div>
        <div className="p-4  w-1/3">Current Day</div>
        <div className="p-4 bg-gray-200 w-1/3">Next Day</div>
      </div>

        <div className="flex mb-4 text-center">
         <Result result={result.calories} />
         <Result result={result.carbs} />
         <Result result={result.fat} />
         <Result result={result.protein} />
        </div>

        <div className="flex">
        <Form item="Total" data={result} onChange={onChange}/>
        <Form item="Target" data={result} onChange={onChange}/>
        <Form item="Variant" data={result} onChange={onChange}/> 
          </div>


            <div className="flex text-center">
              <div className="w-full m-4">
              <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
            </div>
            </div>
    
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/daily")
  const json  = await res.json()
  return{
    props:{
      data: json
    }   }
}
export default Home