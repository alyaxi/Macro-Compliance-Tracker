import Head from 'next/head'
import Image from 'next/image'
import React, {useState} from "react"
import Form from '../components/Form'
import Result from './../components/Result'

export default function Home() {
  let data = {
    calories: {
      label: "Calories",
      total: 1840,
      target: 1850,
      variant: 150
    },
    carbs: {
      label: "Carbs",
      total: 190,
      target: 160,
      variant: 15
    },
    fat: {
      label: "Fat",
      total: 55,
      target: 60,
      variant: 10
    },
    protein: {
      label: "Protein",
      total: 120,
      target: 165,
      variant: 10
    }
  }

  const [result, setResult] =useState(data)
  console.log(result);

  const onChange = (e) => {
    const data = {...result};
    let name = e.target.name

    let resultType = name.split(" ")[0].toLowerCase()
    let resultMacro = name.split(" ")[1].toLowerCase()

    data[resultMacro][resultType] = parseInt(e.target.value);

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
              <div className="w-full m-4"></div>
              <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
            </div>
    
      </div>
    </div>
  )
}
