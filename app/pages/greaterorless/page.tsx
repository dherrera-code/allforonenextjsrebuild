"use client"

import ResponseBox from "@/app/components/ResponseBox";
import { GetGreaterOrLess } from "@/app/services/DataService";
import { Button } from "flowbite-react";
import { redirect } from "next/navigation";
import { useState } from "react";

const page = () => {

  const [inputNumber1, setInputNumber1] = useState("");
  const [inputNumber2, setInputNumber2] = useState("");

  const [response, setResponse] = useState("");

  const BackToHomePage = () => {
    redirect("/")
  }
  const HandleResetBtn = () => {
    setInputNumber1("");
    setResponse("");
  }

  //create a function to get a response with input validation!
  const HandleClick = async () => {
    //Check for Number1 of input field and verify Number1 of input before fetching!
    if (inputNumber2 === "" || inputNumber1 === "") {
      setResponse("Please input a number for both values!")
    }
    else {
      setResponse(await GetGreaterOrLess(inputNumber1, inputNumber2));
      setInputNumber1("")
      setInputNumber2("")
    }
  }


  return (
    <div className="min-h-screen bg-[#E6E9EE] font-sans dark:bg-[#E6E9EE]">
      <main className="text-black">

       <div className="mx-auto max-w-7xl text-center lg:py-16">
          <h1 className="py-8 mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl lg:text-6xl">Greater or Less</h1>

          <section className="flex justify-center">
            <div className="max-w-6xl p-6 card-color rounded-lg shadow-md ">
              <h5 className="lg:text-2xl xl:text-4xl font-normal tracking-tight text-left">This program allows the user enter two numbers and the program will compare the two numbers and return the resulting comparison!</h5>
              <p className="my-6 lg:my-12 lg:text-2xl xl:text-4xl font-normal text-center">Please enter two number to be compared!</p>
              <div className="grid sm:grid-cols-2 place-items-center gap-4">
                <input value={inputNumber1} onChange={(e) => setInputNumber1(e.target.value)} type="number" className="bg-white ps-4 p-2 w-[16rem] rounded-lg" placeholder="Enter a Number" />
                <input value={inputNumber2} onChange={(e) => setInputNumber2(e.target.value)} type="number" className="bg-white ps-4 p-2 w-[16rem] rounded-lg" placeholder="Enter a Second Number" />
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