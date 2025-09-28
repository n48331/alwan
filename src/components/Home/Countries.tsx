import Image from "next/image"
import Flags from "./Flags"


const Countries = () => {
    return (
        <section className="flex flex-col gap-8 items-center p-8 md:p-12 ">
            <div className="flex flex-col gap-2 items-center text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">INDUSTRIES WE SERVE</h2>
            <p className="text-sm md:text-md">Complete Hr Outsourcing And Manpower Solutions</p>
            </div>
            <div className="w-full flex justify-center">
            <Image src="/industiespurple.png" alt="Flags" width={1000} height={500} className="w-full h-auto max-w-screen-lg" />
            </div>
            <div>
                <Flags />
            </div>
        </section>
    )
}

export default Countries