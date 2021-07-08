import React, {useState} from "react"
import Head from 'next/head'
import Form from '../components/Form'
import Result from '../components/Result'
import fetch from 'isomorphic-unfetch'
import dayjs from 'dayjs'

const Index = ({data}) => {
  

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

  const getPreviousData = async() => {
    let currentdate = dayjs(result.date)
    console.log("date : ", currentdate)
    const newDate = currentdate.subtract(1, "day").format("YYYY-MM-DDTHH:mm:ss")
    console.log("new date : ", newDate)
    const res = await fetch('http://localhost:3000/api/daily?date=' +  newDate)
    const data = await res.json()
    console.log("Data : ", data)

    setResult(data)
    
  }

  const getNextData = async() => {
    let currentdate = dayjs(result.date)
    console.log("date : ", currentdate)
    const newDate = currentdate.add(1, "day").format("YYYY-MM-DDTHH:mm:ss")
    console.log("new date : ", newDate)
    const res = await fetch('http://localhost:3000/api/daily?date=' +  newDate)
    const data = await res.json()
    console.log("Data : ", data)

    setResult(data)
    
  }

  const updateData = async () => {
    const res = await fetch('http://localhost:3000/api/daily', {
      method: 'post',
      body: JSON.stringify(result)
    })

    console.log(res);
  }

  
  
  return (
    <div>
      <Head>
      <title>Home</title>
      <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
      </Head>

      <div className="container flex-wrap mx-auto">

        <div className="flex flex-wrap text-center">
        <div className="w-full m-4">
          <h1 className="text-4xl">
          Macro Compliance Tracker
          </h1>
        </div>
        </div>

        <div className="flex flex-wrap text-center">
        <div className="p-4 bg-gray-200 w-1/3 c-white"><button onClick={getPreviousData}>Previous Day</button></div>
        <div className="p-4  w-1/3"> {dayjs(result.date).format('MM/DD/YYYY')}</div>
        <div className="p-4 bg-gray-200 w-1/3"><button onClick={getNextData}>Next Day</button></div>
      </div>

        <div className="flex flex-wrap mb-4 text-center">
         <Result result={result.calories} />
         <Result result={result.carbs} />
         <Result result={result.fat} />
         <Result result={result.protein} />
        </div>

        <div className="flex flex-wrap">
        <Form item="Total" data={result} onChange={onChange}/>
        <Form item="Target" data={result} onChange={onChange}/>
        <Form item="Variant" data={result} onChange={onChange}/> 
          </div>


            <div className="flex text-center flex-wrap">
              <div className="w-full m-4">
              <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={updateData}>Save</button>
            </div>
            </div>
    
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/daily")
  const json  = await res.json()
  return{
    props:{
      data: json
    }   }
}
export default Index