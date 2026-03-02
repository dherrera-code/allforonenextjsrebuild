import { Button, Card } from "flowbite-react";
import Image from "next/image";
import { GetAskingQuestions, GetGreaterOrLess, GetHelloName, GetMadLib, GetMagic8Ball, GetOddOrEven, GetRestaurant, GetReverseAlpha, GetReverseNum, GetSum } from "./services/DataService"
import MenuCard from "./components/MenuCard";
export default function Home() {
  return (
    <div className="min-h-screen bg-[#E6E9EE] font-sans dark:bg-[#E6E9EE]">
      <main className="text-black">

        <div className=" py-8 mx-auto max-w-7xl text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">All for One!</h1>

          <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48 ">Here are the first 10 applications I learned to create in the CodeStack Academy! These 10 projects are all using API endpoints that I created and hosted via Azure! Please enjoy playing with all of my projects !</p>

        </div>
        <div className="flex flex-wrap gap-x-9 gap-y-6 justify-center mb-5">
          <MenuCard title="Hello World" description="Enter your name and get back a greeting!" />
          <MenuCard title="Adding Numbers" description="Enter two numbers and get back the sum of the two numbers!" />
          <MenuCard title="Asking Questions" description="Enter your name and time you woke up today!" />
          <MenuCard title="Odd or Even" description="Enter a number and see if it’s odd or even! " />
          <MenuCard title="Reverse It (alphanum)" description="Enter a string of characters and see what the reverse string looks like!" />
          <MenuCard title="Reverse It (Numbers)" description="Enter a large number and see the digit order in reverse!" />
          <MenuCard title="MadLib" description="Enter some basic values to generate a unique story!" />
          <MenuCard title="Magic 8 Ball" description="Play with the magic 8 ball by asking it a question!" />
          <MenuCard title="Greater Or Less" description="Play with the CPU to guess it’s generated number! Can you guess it on your first try?" />
          <MenuCard title="Restaurant Picker" description="Pick a restaurant Category and it will randomly generate a restaurant you should eat at!" />

        </div>

      </main>
    </div>
  );
}
