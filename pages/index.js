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

        <div className="flex text-center">
        <div className="p-4 bg-gray-200 w-1/3 c-white">Previous Day</div>
        <div className="p-4  w-1/3">Current Day</div>
        <div className="p-4 bg-gray-200 w-1/3">Next Day</div>
      </div>

        <div className="flex mb-4 text-center">
          <div className="w-1/4 p-4 bg-green-500 text-white">
            <h2 className="text-3xl font-bold">1850
            <div className="text-sm flex p-4">
              <div className="w-1/3" >1750</div>
              <div className="w-1/3 font-bold" >1850</div>
              <div className="w-1/3" >3000</div>
            </div>
            </h2>
            <h3 className="text-xl">Calories</h3>
             </div>

             <div className="w-1/4 p-4 bg-red-500 text-white">
            <h2 className="text-3xl font-bold">195
            <div className="text-sm flex p-4">
              <div className="w-1/3" >150</div>
              <div className="w-1/3 font-bold" >160</div>
              <div className="w-1/3" >170</div>
            </div>
            </h2>
            <h3 className="text-xl">Carbs</h3>
             </div>

             <div className="w-1/4 p-4 bg-green-500 text-white">
            <h2 className="text-3xl font-bold">55
            <div className="text-sm flex p-4">
              <div className="w-1/3" >50</div>
              <div className="w-1/3 font-bold" >60</div>
              <div className="w-1/3" >70</div>
            </div>
            </h2>
            <h3 className="text-xl">Fat</h3>
             </div>

             <div className="w-1/4 p-4 bg-blue-500 text-white">
            <h2 className="text-3xl font-bold">120
            <div className="text-sm flex p-4">
              <div className="w-1/3" >145</div>
              <div className="w-1/3 font-bold" >160</div>
              <div className="w-1/3" >175</div>
            </div>
            </h2>
            <h3 className="text-xl">Protien</h3>
             </div>
        </div>

        <div className="flex">
          <div className="w-1/3">
            <h2 className="text-3xl p-4">Result</h2>
            <div className="p-4">
              <label className="block">Calories</label>
              <input type="number" className="bg-gray-200 text-green-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
            </div>
            <div className="p-4">
              <label className="block">Carbs</label>
              <input type="number" className="bg-gray-200 text-green-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
            </div>
            <div className="p-4">
              <label className="block">Fat</label>
              <input type="number" className="bg-gray-200 text-green-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
            </div>
            <div className="p-4">
              <label className="block">Protien</label>
              <input type="number" className="bg-gray-200 text-green-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
            </div>
            <div className="p-4">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-10 rounded">Save</button>
            </div>
          </div>

          <div className="w-1/3">
            <h2 className="text-3xl p-4">Target</h2>
            <div className="p-4">
              <label className="block">Calories</label>
              <input type="number" className="bg-gray-200 text-red-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
            </div>
            <div className="p-4">
              <label className="block">Carbs</label>
              <input type="number" className="bg-gray-200 text-red-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
            </div>
            <div className="p-4">
              <label className="block">Fat</label>
              <input type="number" className="bg-gray-200 text-red-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
            </div>
            <div className="p-4">
              <label className="block">Protien</label>
              <input type="number" className="bg-gray-200 text-red-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
            </div>
            <div className="p-4">
              <button className="bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-10 rounded">Save</button>
            </div>
          </div>
          <div className="w-1/3">
            <h2 className="text-3xl p-4">Variance</h2>
            <div className="p-4">
              <label className="block">Calories</label>
              <input type="number" className="bg-gray-200 text-blue-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
            </div>
            <div className="p-4">
              <label className="block">Carbs</label>
              <input type="number" className="bg-gray-200 text-blue-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
            </div>
            <div className="p-4">
              <label className="block">Fat</label>
              <input type="number" className="bg-gray-200 text-blue-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
            </div>
            <div className="p-4">
              <label className="block">Protien</label>
              <input type="number" className="bg-gray-200 text-blue-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
            </div>
            <div className="p-4">
              <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded">Save</button>
            </div>
          </div>

          

          

        </div>
      </div>
    </div>
  )
}
