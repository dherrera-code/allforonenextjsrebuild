"use client"
import ResponseBox from '@/app/components/ResponseBox';
import { GetAskingQuestions } from '@/app/services/DataService';
import { Button } from 'flowbite-react';
import { redirect } from 'next/navigation';
import React, { useState } from 'react'

const page = () => {



  const [inputName, setInputName] = useState("");
  const [inputTime, setInputTime] = useState("06:00");

  const [display, setDisplay] = useState("")

  const HandleSubmit = async () => {
    if (inputName === null || inputName === "" || inputTime === null || inputTime === "")  {
      setDisplay("Error: Please input a name and time");
    }
    else {
      setDisplay(await GetAskingQuestions(inputName, inputTime))
    }
  }

  const HandleResetBtn = () => {
    setDisplay("");
    setInputName("");
    setInputTime("06:30");

  }

  const BackToHomePage = () => {
    redirect("/")
  }
  
  return (
    <div className="min-h-screen bg-[#E6E9EE] font-sans dark:bg-[#E6E9EE]">
      <main className="text-black">

        <div className=" py-8 mx-auto max-w-7xl text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl lg:text-6xl">Asking Questions!</h1>
        </div>

        <section className="flex justify-center">
          <div className="max-w-6xl p-6 card-color rounded-lg shadow-md ">
            <h5 className="lg:text-2xl xl:text-4xl font-normal tracking-tight">This program prompts the user to enter their name and the time the user woke up today!</h5>
            <p className="my-6 lg:my-12 lg:text-2xl xl:text-4xl font-normal text-center">What is your name and what time did you wake up?</p>
            <div className="grid sm:grid-cols-2 place-items-center gap-4">
              <input value={inputName} onChange={(e) => setInputName(e.target.value)} type="text" className="bg-white ps-4 p-2 w-[16rem] rounded-lg" placeholder="Enter your Name!" />
              <input value={inputTime} onChange={(e) => setInputTime(e.target.value)} type="time" className="bg-white ps-4 p-2 w-[16rem] rounded-lg" placeholder="Enter the time you woke up!" />

              <Button onClick={HandleSubmit} className="w-35 md:w-40 lg:w-50 px-5 py-2">Enter</Button>
            </div>
          </div>
        </section>
        <ResponseBox response={display} />

        <section className='flex flex-row gap-5 sm:gap-55 justify-center flex-wrap pb-5'>
          <Button className='min-w-44' onClick={HandleResetBtn}>Reset</Button>
          <Button className='min-w-44' onClick={BackToHomePage}>Back to Home Page</Button>
        </section>

      </main>
    </div>
  )
}

export default page