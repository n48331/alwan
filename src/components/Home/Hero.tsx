import Image from "next/image";
import Link from "next/link";
import PrimaryBtn from "../common/PrimaryBtn";


const Hero = () => {
  return (

    <section
      className="relative bg-[url(/uaebanner.jpg)] bg-cover bg-center bg-no-repeat py-28"
    >
      <img src="/Hero/transperant_logo.png"
      alt="Overlay Image"
      className="absolute right-0 top-0 w-half h-full object-cover lg:z-[51] z-0"  />
      <div  className="absolute bottom-0 left-0 w-1/2 z-50" >
      <svg  viewBox="0 0 1042 116" fill="" xmlns="http://www.w3.org/2000/svg">
  <path d="M26 0H945.383L1042 116H26V0Z" className="fill-primary"/>
  <path d="M0 0H919.383L1016 116H0V0Z" fill="#faf8ed" />
  </svg>
      </div>
      <div
      className="absolute inset-0 bg-black/20"
      ></div>
      <div
      className="absolute inset-0 bg-black opacity-50"
      ></div>

      <div
      className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 "
      >
      <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right z-[56]">
        <h2 className="text-3xl font-extrabold sm:text-5xl text-secondary">
        DRIVING GROWTH THROUGH RELIABLE MANPOWER SOLUTIONS IN THE UAE
        </h2>

        <div className="mt-8 flex flex-wrap gap-4 text-center">
        <PrimaryBtn url={`https://wa.me/971569650142?text=Hello, I would like to know about jobs in UAE.`}> APPLY NOW</PrimaryBtn>

        <PrimaryBtn type="light" url={`https://wa.me/971569650142?text=Hello, I would like to know about jobs in UAE.`}>
          CHAT WITH US
        </PrimaryBtn>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Hero;