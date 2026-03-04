'use client'
import ResponseBox from '@/app/components/ResponseBox';
import { GetSum } from '@/app/services/DataService';
import { Button } from 'flowbite-react'
import { redirect } from 'next/navigation';

import React, { useState } from 'react'

const page = () => {

  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  const [display, setDisplay] = useState("")

  const HandleSubmit = async () => {
    if(inputValue === null || inputValue === "" || inputValue2 === null || inputValue2 ===""){
      console.log("Error: please input both fields!")
    }
    else{
      // console.log(inputValue + " : " + inputValue2)
      console.log( await GetSum(inputValue, inputValue2))
      setDisplay(await GetSum(inputValue, inputValue2))
    }
  }

  const HandleResetBtn = () => {
    setDisplay("");
    setInputValue("");
    setInputValue2("")
  }

  const BackToHomePage = () => {
    redirect("/")
  }

  return (
    <div className="min-h-screen bg-[#E6E9EE] font-sans dark:bg-[#E6E9EE]">
      <main className="text-black">

        <div className=" py-8 mx-auto max-w-7xl text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">Adding Numbers</h1>
        </div>

        <section className="flex justify-center">
          <div className="max-w-6xl p-6 card-color rounded-lg shadow-md ">
            <h5 className="lg:text-2xl xl:text-4xl font-normal tracking-tight">This program can take ANY two numbers and add them together!</h5>
            <p className="my-6 lg:my-12 lg:text-2xl xl:text-4xl font-normal text-center">Please enter Two numbers!</p>
            <div className="grid sm:grid-cols-2 place-items-center gap-4">
              <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" className="bg-white ps-4 p-2 w-[13rem] rounded-lg" placeholder="Enter your first number!" />
              <input value={inputValue2} onChange={(e) => setInputValue2(e.target.value)} type="text" className="bg-white ps-4 p-2 w-[13rem] rounded-lg" placeholder="Enter your first number!" />
              <Button onClick={HandleSubmit} className="w-35 md:w-40 lg:w-50 px-5 py-2">Enter</Button>
            </div>
          </div>
        </section>
        <ResponseBox response={display}/>

        <section className='flex flex-row gap-5 justify-center flex-wrap pb-5'>
          <Button className='min-w-44' onClick={HandleResetBtn}>Reset</Button>
          <Button className='min-w-44' onClick={BackToHomePage}>Back to Home Page</Button>
        </section>

      </main>
    </div>
  )
}

export default page