'use client'
import ResponseBox from "@/app/components/ResponseBox";
import { GetHelloName } from "@/app/services/DataService";
import { Button } from "flowbite-react";
import { redirect } from "next/navigation";
import { useState } from "react";


export default function HelloWorld() {

  const [inputValue, setInputValue] = useState("");
  const [response, setResponse] = useState("");

  const BackToHomePage = () => {
    redirect("/")
  }
  const HandleResetBtn = () => {
    setInputValue("");
    setResponse("");
  }

  //create a function to get a response with input validation!
  const HandleClick = async () => {
    //Check for value of input field and verify value of input before fetching!
    if (inputValue === null || inputValue === "") {
      setResponse("Please Input a name before submitting!")
    }
    else {
      // setResponse("Thinking of a response!")
      setResponse(await GetHelloName(inputValue));
    }
  }

  return (
    <div className="min-h-screen bg-[#E6E9EE] font-sans dark:bg-[#E6E9EE]">
      <main className="text-black">
        <div className="mx-auto max-w-7xl text-center lg:py-16">
          <h1 className="py-8 mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl lg:text-6xl">Hello World!</h1>

          <section className="flex justify-center">
            <div className="max-w-6xl p-6 card-color rounded-lg shadow-md ">
              <h5 className="lg:text-2xl xl:text-4xl font-normal tracking-tight text-left">This program prompts the user to enter their
                name and greets the user!</h5>
              <p className="my-6 lg:my-12 lg:text-2xl xl:text-4xl font-normal text-center">Please enter your name!</p>
              <div className="grid sm:grid-cols-2 place-items-center gap-4">
                <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" className="bg-white ps-4 p-2 w-[16rem] rounded-lg" placeholder="Enter a Name" />
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
  );
}
