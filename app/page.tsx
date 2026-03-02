import { Button, Card } from "flowbite-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#E6E9EE] font-sans dark:bg-[#E6E9EE]">
      <main className="">
        <h1>Welcome to the main page starting here!</h1>

        
    <Card className="max-w-sm  dark:bg-[#FFF1E8]">
      <h5 className="text-2xl text-[#1F2B2D]  tracking-tight ">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal  dark:text-black">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
      <Button className="dark:bg-[#1E6FB8]">
        Read more
        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </Card>
        
      </main>
    </div>
  );
}
