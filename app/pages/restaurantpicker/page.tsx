'use client'
import ResponseBox from '@/app/components/ResponseBox';
import { GetRestaurant } from '@/app/services/DataService';
import { Button } from 'flowbite-react';
import { redirect } from 'next/navigation';
import { useState } from 'react'

const page = () => {

  const [response, setResponse] = useState("");

  const BackToHomePage = () => {
    redirect("/")
  }
  const HandleResetBtn = () => {
    setResponse("");
  }

  //create a function to get a response with input validation!
  const HandleClick = async (category: string) => {
    //Check for value of input field and verify value of input before fetching!
    setResponse(await GetRestaurant(category));
  }

  return (
    <div className="min-h-screen bg-[#E6E9EE] font-sans dark:bg-[#E6E9EE]">
      <main className="text-black">

        <div className="mx-auto max-w-7xl text-center lg:py-16">
          <h1 className="py-8 mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl lg:text-6xl">Restaurant Picker</h1>

          <section className="flex justify-center">
            <div className="max-w-6xl p-6 card-color rounded-lg shadow-md ">
              <h5 className="lg:text-2xl xl:text-4xl font-normal tracking-tight text-left">Select a Restaurant Category that will generate a restaurant of the respective category!</h5>
              <p className="my-6 lg:my-12 lg:text-2xl xl:text-4xl font-normal text-center"></p>
              <div className="grid sm:grid-cols-2 place-items-center gap-4">
                <Button onClick={() => HandleClick("Burger")} className="w-35 md:w-40 lg:w-50 px-5 py-2">Burger</Button>
                <Button onClick={() => HandleClick("pizza")} className="w-35 md:w-40 lg:w-50 px-5 py-2">Pizza</Button>
                <Button onClick={() => HandleClick("misc")} className="w-35 md:w-40 lg:w-50 px-5 py-2">Miscellaneous</Button>
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