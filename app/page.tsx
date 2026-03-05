
import MenuCard from "./components/MenuCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#E6E9EE] font-sans dark:bg-[#E6E9EE]">
      <main className="text-black">

        <div className=" py-8 mx-auto max-w-7xl text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">All for One!</h1>

          <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48 ">Here are the first 10 applications I learned to create in the CodeStack Academy! These 10 projects are all using API endpoints that I created and hosted via Azure! Please enjoy playing with all of my projects !</p>

        </div>
        <div className="flex flex-wrap gap-x-9 gap-y-6 justify-center pb-10">
          <MenuCard path="/pages/helloworld" title="Hello World" description="Enter your name and get back a greeting!" />
          <MenuCard path="/pages/addingnumbers" title="Adding Numbers" description="Enter two numbers and get back the sum of the two numbers!" />
          <MenuCard path="/pages/askingquestions" title="Asking Questions" description="Enter your name and time you woke up today!" />
          <MenuCard path="/pages/oddoreven" title="Odd or Even" description="Enter a number and see if it’s odd or even! " />
          <MenuCard path="/pages/reversealpha" title="Reverse It (alphanum)" description="Enter a string of characters and see what the reverse string looks like!" />
          <MenuCard path="/pages/reversenumber" title="Reverse It (Numbers)" description="Enter a large number and see the digit order in reverse!" />
          <MenuCard path="/pages/madlib" title="MadLib" description="Enter some basic values to generate a unique story!" />
          <MenuCard path="/pages/magic8ball" title="Magic 8 Ball" description="Play with the magic 8 ball by asking it a question!" />
          <MenuCard path="/pages/greaterorless" title="Greater Or Less" description="Enter two numbers and test whether either number is greater, less than or equal to!" />
          <MenuCard path="/pages/restaurantpicker" title="Restaurant Picker" description="Pick a restaurant Category and it will randomly generate a restaurant you should eat at!" />
        </div>
      </main>
    </div>
  );
}
