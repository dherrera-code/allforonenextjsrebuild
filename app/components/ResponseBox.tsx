'use client'
import { Button } from 'flowbite-react';
import { redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react'

interface dataPassed {
  Response: string,
}

const ResponseBox = (response : dataPassed) => {

  // let [response, setResponse] = useState("");

  // useEffect(() => {

    
  // }, [])

  const BackToHomePage = () => {
    redirect("/")
  }
  


  return (
    <div>

      <section className="flex justify-center my-9">
        <div className=" lg:min-w-xl xl:min-w-4xl py-6 px-20 card-color rounded-lg shadow-md">
          <h2 className="text-xl sm:text-[40px] text-center mb-6">Response!</h2>
          <p id="displaySum" className="sm:text-[30px] text-center">{response.Response}</p>
        </div>
      </section>

      <section className='grid grid-cols-2 gap-20 px-10 place-items-center'>
        <Button className='min-w-45'>Reset</Button>
        <Button className='min-w-45' onClick={BackToHomePage}>Back to Home Page</Button>
      </section>

    </div>
  )
}

export default ResponseBox