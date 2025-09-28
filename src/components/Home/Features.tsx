import { HiLightBulb } from "react-icons/hi";
import PrimaryBtn from "../common/PrimaryBtn";
import { HiUserGroup } from "react-icons/hi2";
import { FaHandshake } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { PiBuildingOfficeBold } from "react-icons/pi";
import { GrDocumentLocked } from "react-icons/gr";
import styles from "./features.module.css";
import GetStarted from "./GetStarted";
const featuresList = [
    {
        title: "Our Mission",
        description:
            "To empower companies by sourcing the best people and to empower people by creating meaningful career paths.",
        icon: <HiLightBulb  className={"h-12 w-12 inline-block text-white " + styles.icon} />,
    },
    {
        icon: <HiUserGroup  className={"h-12 w-12 inline-block text-white " + styles.icon} />,
        title: "Our Values",
        description:
            "Integrity Transparent hiring practices.Commitment Dedicated to both clients and candidates.Excellence Delivering quality in every placement.",
    },
    {
        icon: <FaHandshake  className={"h-12 w-12 inline-block text-white " + styles.icon} />,
        title: "Our Impact",
        description:
            "Hundreds of professionals placed since 2021. Dozens of companies served across India and UAE. Countless lives improved through the right job placements.",
    },
   
];

const Features = () => {
    return (
        <section className="text-center p-8 md:p-12 " id="about">
            <h2 className="text-4xl font-bold feature-title mb-2 text-primary">About Alwan Manpower Solutions</h2>
            <p className="text-gray-500 mb-8">WHO WE ARE
            FOUNDED IN 2021, ALWAN MANPOWER SOLUTIONS BEGAN IN INDIA AND EXPANDED INTO THE UAE TO BRIDGE THE GAP BETWEEN BUSINESSES SEEKING TALENT AND PROFESSIONALS SEARCHING FOR OPPORTUNITIES.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mx-auto px-4">
                {featuresList.map((feature, index) => (
                    <div key={index} className={`p-8 px-12 border-2 primary rounded-3xl ${styles.card} flex flex-col items-center`}>
                        <div className="mb-4 inline-block p-3 rounded-full bg-primary">
                            {feature.icon || <HiLightBulb className={"h-12 w-12 inline-block text-white " + styles.icon} />}
                        </div>
            <div className="mb-4 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black to-white to-70% opacity-15 w-14 h-2"></div>

                        <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                    </div>
                ))}


            </div>

          
        </section>
    );
};

export default Features;