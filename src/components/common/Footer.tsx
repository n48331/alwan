import Image from "next/image";
import { FaInbox, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLinkedin, FaLocationDot, FaPhone, FaTwitter } from "react-icons/fa6";
import PrimaryBtn from "./PrimaryBtn";

const socialLinks = [
    {
        title: "Facebook",
        icon: <FaFacebookF />,
        link: "https://www.facebook.com/",
    },
    {
        title: "Instagram",
        icon: <FaInstagram />,
        link: "https://www.instagram.com/",
    },
    {
        title: "Twitter",
        icon: <FaTwitter />,
        link: "https://twitter.com/",
    },
    {
        title: "LinkedIn",
        icon: <FaLinkedin />,
        link: "https://www.linkedin.com/",
    },
];

const Footer = () => {
    return (


        <footer className="bg-primary text-secondary p-10 mt-8">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between ">
                    <div className="flex flex-wrap gap-8 sm:gap-6 justify-between w-full">
                        <div className="mb-6 md:mb-0 flex flex-col gap-12">
                            <a href="/" className="flex items-center">
                                <Image src="/alwanlogo.png" className="h-8 me-3 max-w-40" alt="Logo" width={100} height={100} layout="responsive" />
                            </a>
                            <div className="flex flex-col gap-4">
                                <p className="text-lg font-montserrat font-semibold">We are also social:</p>
                                <div className="flex gap-2">
                                    {socialLinks.map((link, index) => (
                                        <a href={link.link} key={index} className="me-3 bg-secondary text-primary p-3 rounded-full">
                                            {link.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="mb-6 text-lg  lg:text-2xl font-semibold uppercase font-montserrat">Quick Links</p>
                            <ul className="font-medium text-md lg:text-xl  font-roboto">
                                {quickLinks.map((link, index) => (
                                    <li className="mb-3 lg:mb-6" key={index}>
                                        <a href={link.link} >{link.title}</a>
                                    </li>
                                ))}

                            </ul>
                        </div>
                        <div>
                            <p className="mb-6 text-lg  lg:text-2xl font-semibold uppercase font-montserrat">Contact</p>
                            <ul className="font-medium text-md lg:text-xl font-roboto">
                                {contactOptions.map((link, index) => (
                                    <li className="mb-6 flex gap-2 items-start max-w-sm" key={index}>
                                      <span className="mt-1">  {link.icon}</span>
                                        <a href="#" >{link.title}</a>
                                    </li>
                                ))}


                            </ul>
                        </div>
                        <div className="   w-full lg:w-[30%]">
                            <p className="mb-6 text-lg  lg:text-2xl font-semibold uppercase ">Book a Call</p>
                            <ContactForm />
                        </div>
                    </div>
                </div>

            </div>
        </footer>

    );
}

export default Footer;
const quickLinks = [
    {
        title: "Home",
        link: "/",
    },
    {
        title: "About",
        link: "#about",
    },
    {
        title: "Services",
        link: "#services",
    },
    {
        title: "Contact",
        link: "#contact",
    },
];
const contactOptions = [
    {
        title: "+971 56965 0142",
        icon: <FaWhatsapp/>,
        link: "tel:971 56965 0142"
    },
    {
        title: "+971 56965 0142",
        icon: <FaPhone/>,
        link: "tel: +971 56965 0142"
    },
    {
        title: "alwanmanpoweruae@gmail.com",
        icon: <FaInbox />,
        link: "mailto:alwanmanpoweruae@gmail.com"
    },
    {
        title: "Dubai, UAE",
        icon: <FaLocationDot />,
        link: "#"
    },
];

const ContactForm = () => {
    return (
        <form className="mx-auto font-roboto" id="contact">
            <div className="mb-2">
                <label htmlFor="name" className="block mb-1 text-sm font-medium ">* Name</label>
                <input type="name" id="name" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-black" placeholder="Enter your name here" required />
            </div>
            <div className="mb-2">
                <label htmlFor="email" className="block mb-1 text-sm font-medium  ">* Email</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-black" required placeholder="Enter your email here" />
            </div>
            <div className="mb-2">
                <label htmlFor="message" className="block mb-1 text-sm font-medium  ">* Message</label>
                <textarea id="message" rows={5} placeholder="Enter your message here" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-black" required />
            </div>
            <div className="flex items-start mb-5">

            </div>
            <div className="w-32 flex justify-center">

            <PrimaryBtn type="light">
                Submit</PrimaryBtn>
            </div>
        </form>
    );
}

