
const data = [
 { title: "At Alwan Manpower Solutions, we provide a full range of HR outsourcing and staffing solutions designed for companies of all sizes.",
  description: "Source and hire full-time employees from accountants and developers to managers and specialists.",
  img: "/imageuaechart.jpg"},
  { title: "Recruitment Outsourcing",
  description: "Let us manage your entire hiring process while you focus on running your business.",
  img: "/Recruitmentoutsourcing.jpg"},
  { title: "Onboarding & HR Support",
  description: "From offer letters to the first 90 days, we ensure a smooth integration for every new hire.",
  img: "/onboardhr.jpg"},

]
const Visas = () => {
  return (
    <section id="services" className="flex flex-col gap-12 md:gap-24 items-center justify-center p-8 md:p-12 text-center md:text-left">
         {data.map((item, index) => (
         <div className={`flex  flex-col-reverse ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 w-full items-center`} key={index}>  
          <img src={item.img} alt={item.title}
            className="w-[90%] md:w-96 rounded-3xl border-2 border-primary  shadow-lg transition-transform " />
        <div className="md:ml-8 mt-4 md:mt-0 w-full flex flex-col gap-4">
          <h2 className="text-primary text-2xl md:text-3xl font-semibold underline underline-offset-4 font-montserrat">{item.title}</h2>
          <p className="text-md md:text-lg mt-2 font-opensans ">{item.description}</p>
        </div>
      </div>
         ))  
        }

    </section>
  );
}


export default Visas;