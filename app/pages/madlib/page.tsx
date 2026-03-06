"use client"
import ResponseBox from '@/app/components/ResponseBox';
import { GetMadLib } from '@/app/services/DataService';
import { Button } from 'flowbite-react';
import { redirect } from 'next/navigation';
import React, { useState } from 'react'

const page = () => {

  const [inputName, setInputName] = useState("");
  const [inputLocation, setInputLocation] = useState("");
  const [inputAdjective, setInputAdjective] = useState("");
  const [inputCreature, setInputCreature] = useState("");
  const [inputMood, setInputMood] = useState("");

  const [response, setResponse] = useState("");

  const BackToHomePage = () => {
    redirect("/")
  }
  const HandleResetBtn = () => {
    setInputName("");
    setResponse("");
    setInputLocation("");
    setInputAdjective("");
    setInputCreature("");
    setInputMood("");
  }

  //create a function to get a response with input validation!
  const HandleClick = async () => {
    if (inputName === "" || inputAdjective === "" || inputLocation === "" || inputCreature === ""|| inputMood === "") {
      setResponse("Please enter all input fields to generate story!")
    }
    else {
      setResponse("Thinking of a response!")
      setResponse(await GetMadLib(inputName, inputLocation, inputAdjective, inputCreature, inputMood));
      await setInputName("")
      await setInputAdjective("")
      await setInputLocation("")
      setInputCreature("")
      setInputMood("")
    }
  }

  
  return (
    <div className="min-h-screen bg-[#E6E9EE] font-sans dark:bg-[#E6E9EE]">
      <main className="text-black">

        <div className="mx-auto max-w-7xl text-center lg:py-16">
          <h1 className="py-8 mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl lg:text-6xl">MadLib</h1>

          <section className="flex justify-center">
            <div className="max-w-6xl p-6 card-color rounded-lg shadow-md ">
              <h5 className="lg:text-2xl xl:text-4xl font-normal tracking-tight text-left">Welcome to my Madlib! Please enter the following inputs and hit the play button to generate your unique story!</h5>
              <p className="my-6 lg:my-12 lg:text-2xl xl:text-4xl font-normal text-center"></p>
              <div className="grid sm:grid-cols-2 place-items-center gap-4">
                <input value={inputName} onChange={(e) => setInputName(e.target.value)} type="text" className="bg-white ps-4 p-2 w-[16rem] rounded-lg" placeholder="Enter a Name!" />
                <input value={inputLocation} onChange={(e) => setInputLocation(e.target.value)} type="text" className="bg-white ps-4 p-2 w-[16rem] rounded-lg" placeholder="Enter a Location!" />
                <input value={inputAdjective} onChange={(e) => setInputAdjective(e.target.value)} type="text" className="bg-white ps-4 p-2 w-[16rem] rounded-lg" placeholder="Enter an Adjective!" />
                <input value={inputCreature} onChange={(e) => setInputCreature(e.target.value)} type="text" className="bg-white ps-4 p-2 w-[16rem] rounded-lg" placeholder="Enter a Creature or animal!" />
                <input value={inputMood} onChange={(e) => setInputMood(e.target.value)} type="text" className="bg-white ps-4 p-2 w-[16rem] rounded-lg" placeholder="Enter a Mood ending in -ness!" />
                <Button onClick={HandleClick} className="w-35 md:w-40 lg:w-50 px-5 py-2">Enter</Button>
              </div>
            </div>
          </section>
        </div>

        <ResponseBox response={response} />

        <section className='flex flex-row gap-5 sm:gap-55 justify-center flex-wrap pb-5'>
          <Button className='min-w-44' onClick={HandleResetBtn}>Reset</Button>
          <Button className='min-w-44' onClick={BackToHomePage}>Back to Home Page</Button>
        </section>

      </main>
    </div>
  )
}

export default page