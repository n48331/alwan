"use client";
import Countries from "@/components/Home/Countries";
import Experience from "@/components/Home/Experience";
import Features from "@/components/Home/Features";
import GetStarted from "@/components/Home/GetStarted";
import Hero from "@/components/Home/Hero";
import TheSecretofSuccess from "@/components/Home/TheSecretofSuccess";
import Visas from "@/components/Home/Visas";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 -mt-2  w-full " id="home">
      
      {/* <div className="fixed top-0 left-0 w-full z-[99] flex items-center justify-center h-full bg-white">
<div className="relative loader rounded-full  animate-bounce flex justify-center items-center w-30">
<Image src="/common/logo-icon-green.svg" width={120} height={120} alt="Glide Way Migration Services" />
</div>
        </div> */}
        
      <Hero />
      <div className="max-w-7xl mx-auto flex flex-col">
        <Experience />
        <Countries />
        <GetStarted />
        <Features />
        <Visas />
      </div>
      <TheSecretofSuccess />
    </main>
  );
}
