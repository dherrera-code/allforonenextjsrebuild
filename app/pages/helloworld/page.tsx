'use client'
import ResponseBox from "@/app/components/ResponseBox";
import { GetHelloName } from "@/app/services/DataService";
import { Button, Card, TextInput } from "flowbite-react";
import Image from "next/image";
import { useState } from "react";


export default function HelloWorld() {

  const [response, setResponse] = useState("");
  //create a function to get a response with input validation!
  const HandleClick = async () => {
    //Check for value of input field and verify value of input before fetching!
    if(response === null || response === ""){
      console.log("Missing name!")
    }
    else{
      
      console.log( await GetHelloName(response))
    }
  }

  //Now I need a useEffect to update my response component!

  return (
    <div className="min-h-screen bg-[#E6E9EE] font-sans dark:bg-[#E6E9EE]">
      <main className="text-black">

        <div className=" py-8 mx-auto max-w-7xl text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">Hello World</h1>

          {/* <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48 ">Here are the first 10 applications I learned to create in the CodeStack Academy! These 10 projects are all using API endpoints that I created and hosted via Azure! Please enjoy playing with all of my projects !</p> */}
          <section className="flex justify-center">
            <div className="max-w-6xl p-6 card-color rounded-lg shadow-md ">
              <h5 className="lg:text-2xl xl:text-4xl font-normal tracking-tight">This program prompts the user to enter their
                name and greets the user!</h5>
              <p className="my-6 lg:my-12 lg:text-2xl xl:text-4xl font-normal text-center">Please enter your name!</p>
              <div className="grid sm:grid-cols-2 place-items-center gap-4">
                {/* <input type="text" className="bg-white ps-4 p-2 w-3xs rounded-lg" placeholder="Enter a Name" /> */}
                <TextInput onChange={(e) => setResponse(e.target.value)} className="!dark:text-black !dark:bg-white" placeholder="Please enter your name!"></TextInput>
                <Button onClick={HandleClick} className="w-35 md:w-40 lg:w-50 px-5 py-2">Enter</Button>
              </div>
            </div>
          </section>

        </div>
        <ResponseBox Response={response} />

      </main>
    </div>
  );
}
