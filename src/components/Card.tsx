import React,{useState, useEffect} from 'react'
import {flashCardDatas} from "../data.js"

const Card = () => {
    const [clicked, setClicked] = useState<boolean>(false)
    const [cardIndex, setCardIndex] = useState<number>(0)
    useEffect(()=>{
        console.log(cardIndex)
    },[cardIndex])
    const handleClicked = ()=>{
        setClicked(!clicked)
    }
    const handleButton = ()=>{
       if(cardIndex < flashCardDatas.length-1 ){
        setCardIndex(cardIndex + 1)
        setClicked(false)
       }else{
        setCardIndex(0)
        setClicked(false)
       }
    }
    return (
        <div className='container sm:mt-24 md:mt-20 p-0 lg:w-4/5'>
        {/* Card container */}
        <div onClick={handleClicked} className='container sm:h-72 md:h-96 border-2 py-5 border-black flex flex-col items-center justify-evenly cursor-pointer'>
                {!clicked ? <h2 className="japanese text-3xl">{flashCardDatas[cardIndex].Japanese}</h2>:<h2 className="japanese text-3xl">{flashCardDatas[cardIndex].english}</h2>}
                {clicked ?<p className="description text-2xl text-center">{flashCardDatas[cardIndex].description}</p>:null}
        </div>

        {/* button container */}
        <div className="container md:p-4 flex items-center sm:p-0 sm:justify-evenly md:justify-between sm:h-16 md:h-24 border-2 border-black mt-5">
            <button onClick={handleButton} className=" rounded bg-red-400 flex items-center justify-center h-12 sm:w-12 md:w-20 lg:w-32">
                Again
            </button>
            <button onClick={handleButton} className=" rounded bg-orange-400 flex items-center justify-center h-12 sm:w-12 md:w-20 lg:w-32">
                Hard
            </button>
            <button onClick={handleButton} className=" rounded bg-blue-400 flex items-center justify-center h-12 sm:w-12 md:w-20 lg:w-32">
                Good
            </button>
            <button onClick={handleButton} className=" rounded bg-green-400 flex items-center justify-center h-12 sm:w-12 md:w-20 lg:w-32">
                Easy
            </button>
        </div>
    </div>
    )
}

export default Card
