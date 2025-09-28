import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const contactInfo = [{
    title: "Business Bay, Dubai, UAE",
    icon: <FaMapMarkerAlt className="text-primary h-5 w-5" />,
    isClickable: false
},
{
    title: "+971 56965 0142",
    icon: <FaPhone className="text-primary h-5 w-5" />,
    isClickable: true,
    href: "tel:+971569650142"
},
{
    title: "alwanmanpoweruae@gmail.com",
    icon: <FaEnvelope className="text-primary h-5 w-5" />,
    isClickable: true,
    href: "mailto:alwanmanpoweruae@gmail.com"
}
]
const socials = [
    {
        link: "#",
        icon: <FaFacebook className="text-primary h-5 w-5" />
    },
    {
        link: "#",
        icon: <FaInstagram className="text-primary h-5 w-5" />
    },
    {
        link: "#",
        icon: <FaXTwitter className="text-primary h-5 w-5" />
    }
]

const Snackbar = () => {
    return (
        <div className="hidden lg:flex bg-[rgba(255,255,255,0.807)] z-[1] justify-between items-center px-20 py-2">
            <div className="flex">
                {contactInfo.map((info, index) => (
                    info.isClickable ? (
                        <a 
                            key={index} 
                            href={info.href}
                            className="flex items-center justify-center gap-2 p-2 hover:bg-gray-100 rounded transition-colors duration-200 cursor-pointer"
                        >
                            {info.icon}
                            <span className="text-sm">{info.title}</span>
                        </a>
                    ) : (
                        <div key={index} className="flex items-center justify-center gap-2 p-2">
                            {info.icon}
                            <span className="text-sm">{info.title}</span>
                        </div>
                    )
                ))}

            </div>
            <div className="flex">
                {socials.map((social, index) => (
                    <a href={social.link} key={index} className="flex items-center justify-center gap-2 p-2">
                        {social.icon}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Snackbar;