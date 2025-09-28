const cardData = [
  {
    title: "Fast Hiring",
    description:
      "Delivering vetted shortlists within 72 hours to meet urgent hiring needs."
  },
  {
    title: "Full HR Outsourcing",
    description:
      "From recruitment to payroll, visas, and onboarding everything under one roof."
  },
  {
    title: "Industry Expertise",
    description:
      "Specialized recruiters for finance, IT, healthcare, hospitality, retail, and more."
  },
  {
    title: "Quality Talent Pool",
    description:
      "Access to a wide network of pre-screened professionals ready to join."
  },
  {
    title: "Proven Track Record",
    description:
      "Since 2021, helping companies in India and UAE build reliable teams."
  },
  {
    title: "Compliant Processes",
    description:
      "Ensuring every hire follows UAE labor laws, visa regulations, and HR standards."
  },
  {
    title: "Client-Centric Approach",
    description:
      "Tailored staffing solutions designed to meet your unique business goals."
  },
  {
    title: "Commitment to Excellence",
    description:
      "Measuring success by the satisfaction of our clients and the careers we help shape."
  }
];

const TheSecretofSuccess = () => {
  return (
    <section className="flex flex-col gap-12 items-center my-10">
      <div className="flex flex-col gap-2 items-center text-center px-4 md:px-8 lg:px-16">
        <h2 className="text-2xl md:text-3xl font-bold text-primary">
          Why Choose Alwan Manpower Solutions
        </h2>
        <p className="text-sm md:text-md">
          Your Partner in HR Outsourcing & Recruitment Excellence
        </p>
      </div>
      <div className="w-full gap-24 flex flex-col">
        <div className="flex gap-8">
          <div className="lg:w-[20%] h-56 hidden lg:block"></div>
          <div className="relative flex flex-col lg:flex-row w-full lg:w-[80%] justify-center lg:justify-end gap-8 px-10 pt-5 ">
            {cardData.slice(0, 4).map((card, index) => (
              <Card key={index} title={card.title} description={card.description} />
            ))}
            <div className="absolute bg-primary w-full h-5/6 right-0 -z-10 top-0 lg:rounded-l-3xl"></div>
          </div>
        </div>
        <div className="flex gap-8 ">
          <div className="relative flex flex-col lg:flex-row w-full lg:w-[80%] justify-center lg:justify-end gap-8 px-10 pt-5 ">
            {cardData.slice(4, 8).map((card, index) => (
              <Card key={index} title={card.title} description={card.description} />
            ))}
            <div className="absolute bg-primary w-full h-5/6 left-0 -z-10 top-0 lg:rounded-r-3xl"></div>
          </div>
          <div className="lg:w-[20%] h-56 hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ title, description }: any) => {
  return (
    <div className="bg-white w-full p-6 rounded-3xl border-[3px] teal-500 shadow-lg text-center transition-transform duration-300 ease-in-out hover:shadow-2xl hover:scale-105">
      <h3 className="text-primary font-semibold text-lg mb-2 font-sans">
        {title}
      </h3>
      <p className="text-gray-700 text-sm font-opensans m-[12px]">{description}</p>
    </div>
  );
};

export default TheSecretofSuccess;
