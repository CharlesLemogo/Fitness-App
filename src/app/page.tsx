import { currentUser, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Partners from "@/components/partners/partners";
import Offers from "@/components/Offers/Offers";

export default async function Home() {
  // const { isLoaded, isSignedIn, user } = useUser();
  const user = await currentUser();
  console.log(user);
  return (
    <section>
    <div className="relative  w-full h-screen bg-custom-bg bg-cover bg-blend-multiply bg-neutral-600">
      <Navbar />
      <div className=" w-full pt-[20vh]  p-4"></div>
      <div className="flex flex-col justify-center items-center mt-20  w-3/4  mx-auto">
        <h1 className=" text-center text-white sm:text-lg md:text-2xl lg:text-8xl xl:text-8xl 2xl:text-12xl leading-[2.4rem] mb-7 ">Achieve Your Fitness Goals</h1>
        <p className="text-white mb-7 text-center">Join us for personalized workouts and reset your health with experts by your side.</p>
        <button className="p-4 rounded-xl bg-[red] text-white">Join us</button>
      </div>
    </div>
    <Partners/>
    <Offers/>
    </section>
  );
}
