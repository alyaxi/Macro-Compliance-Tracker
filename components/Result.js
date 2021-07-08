import React, {useState, useEffect} from 'react'

export default function Result({result}) {
    console.log(result);
    
    let[bg, setBg] = useState("")

    useEffect(()=>{
        setBackground()
    })

    const setBackground = () => {
        let min = result.target - result.variant

        let max = result.target + result.variant

        if(result.total >= min && result.total <= max){
            setBg("bg-green-500");
        }else if (result.total < min){
            setBg("bg-blue-500")
        }else{
            setBg("bg-red-500")
        }
    }


    return (
        <div className={`${bg} w-1/4 p-4 text-white`}>
            <h2 className="text-3xl font-bold">{result.total}
            <div className="flex text-sm p-4">
                <div className="w-1/3">{result.target - result.variant}</div>
                <div className="w-1/3 font-bold">{result.target}</div>
                <div className="w-1/3">{result.target + result.variant}</div>
            </div>
            </h2>
            <h3 className="text-xl">{result.label}</h3>
            
            
        </div>
    )
}
