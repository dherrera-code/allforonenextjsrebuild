import { Button, Card } from "flowbite-react";
import Image from "next/image";
import { GetAskingQuestions, GetGreaterOrLess, GetHelloName, GetMadLib, GetMagic8Ball, GetOddOrEven, GetRestaurant, GetReverseAlpha, GetReverseNum, GetSum } from "./services/DataService"
export default function Home() {
  return (
    <div className="min-h-screen bg-[#E6E9EE] font-sans dark:bg-[#E6E9EE]">
      <main className="text-black">

      <div className="px-5 sm:px-20 md:px-40">
        <h1 className="text-[36px] text-center py-8">All For One!</h1>

        <p className="text-center">Here are the first 10 applications I learned to create in the CodeStack Academy! These 10 projects are all using API endpoints that I created and hosted via Azure! Please enjoy playing with all of my projects!</p>

      </div>

        {/* <h1>Welcome to the main page starting here!</h1>
        <p>{GetSum(3,5)}</p>
        <p>{GetAskingQuestions("Daniel", 3)}</p>
        <p>{GetGreaterOrLess(5,52)}</p>
        <p>{GetHelloName("Daniel")}</p>
        <br />
        <p>{GetMadLib("Dan", "DMV", "Silly", "Gator", "Sad")}</p><br />
        <p>{GetMagic8Ball("Yes?")}</p>
        <p>{GetOddOrEven(5)}</p>
        <p>{GetRestaurant("burger")}</p>
        <p>{GetReverseAlpha("qwerty")}</p>
        <p>{GetReverseNum("234561")}</p>
        
    <Card className="max-w-sm  dark:bg-[#FFF1E8]">
      <h5 className="text-2xl text-[#1F2B2D]  tracking-tight ">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal  dark:text-black">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
      <Button className="dark:bg-[#1E6FB8]">
        Read more
      </Button>
    </Card> */}
        
      </main>
    </div>
  );
}
