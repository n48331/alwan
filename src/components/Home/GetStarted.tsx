import PrimaryBtn from "../common/PrimaryBtn"


const GetStarted = () => {
    return (
        <div className="mx-4 my-12 border-2 primary text-white  py-8 px-6 rounded-2xl  text-center bg-primary flex justify-center flex-col items-center GetStartedToday">
        <h3 className="text-2xl font-semibold mb-4 font-montserrat">Let’s Build Your Success Together</h3>
        <p className="mb-6 max-w-[80%]">Ready to hire the best talent or find your next great career move? Get in touch for a personalized consultation with our team. We respond rapidly to every inquiry, helping businesses and jobseekers thrive.</p>
       <div className="flex justify-center">
        <PrimaryBtn 
           url="#"
        type="light">Find Opportunities</PrimaryBtn>

       </div>
    </div>
    )
}

export default GetStarted
