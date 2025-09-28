import PrimaryBtn from "../common/PrimaryBtn";


const Experience = () => {
    return (
        <section className="p-8 md:p-12 ">
            <div className="flex flex-col md:flex-row items-center justify-center lg:gap-12">
                <img src="/alwanbanner.png" alt="Logo" className=" h-80 w-70 mb-4 md:mb-0 md:ml-20" />

                <div className="flex flex-col gap-8">
                    <h1 className="text-2xl md:text-4xl font-bold text-primary" >We Blend Startup Agility With Professional Hr Systems For Tailored B2B Staffing And Hr Outsourcing. Our Recruiters Screen For Skills, Culture Fit, And Compliance, Cutting Hire Time And Risk.</h1>
                         
                   
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Fast, compliant hires: vetted shortlists within 72 hours for urgent roles.</li>
                    <li>Full HR outsourcing: recruitment, payroll, visas & onboarding with a single partner.</li>
                    <li>Industry expertise: specialized teams for finance, IT, healthcare, hospitality, and more.</li>
                    </ul>
                    

                    <div className="flex">
                        <PrimaryBtn url="https://wa.me/971569650142?text=Hello, I would like to get in touch regarding your services.">LEARN MORE</PrimaryBtn></div>
                </div>
            </div>
        </section>
    );
};

export default Experience;