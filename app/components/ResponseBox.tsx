'use client'
import { Button } from 'flowbite-react';
import { redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react'

interface dataPassed {
  response: string,
}

const ResponseBox = (data: dataPassed) => {

  return (
    <div>
      <section className="flex justify-center my-9">
        <div className=" lg:min-w-xl xl:min-w-4xl py-6 px-20 card-color rounded-lg shadow-md">
          <h2 className="text-xl sm:text-[40px] text-center mb-6">Response!</h2>
          <p className="sm:text-[20px] md:text-[30px] text-center">{data.response}</p>
        </div>
      </section>
    </div>
  )
}

export default ResponseBox