"use client";
import React from "react";
import Image from "next/image";
import { FaLocationPin } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import PrimaryBtn from "../common/PrimaryBtn";
import { TbHandClick } from "react-icons/tb";
import { 
    FaCode, 
    FaUniversity, 
    FaHardHat, 
    FaUserMd, 
    FaShoppingCart, 
    FaOilCan, 
    FaIndustry, 
    FaBuilding 
} from "react-icons/fa";

const data = [
    {
        title: "Technology & ",
        icon: FaCode,
        description:
            "We Source Developers, It Specialists, And Digital Experts, Helping Companies Build Innovative Teams That Accelerate Transformation And Growth.",
        jobs: [
            {
                title: "Software Developers",
                description:
                    "Experienced in building applications and solutions to meet business needs."
            },
            {
                title: "IT Support Specialists",
                description: "Providing technical support and system maintenance for smooth operations."
            }
        ]
    },

    {
        title: "Finance & Banking",
        icon: FaUniversity,
        description:
            "From Accountants To Compliance Officers, We Provide Financial Institutions With Skilled Professionals To Strengthen Their Operations And Trust.",
        jobs: [
            {
                title: "Accountants",
                description: "Managing financial records, reporting, and compliance for businesses."
            },
            {
                title: "Bank Tellers",
                description: "Handling customer transactions and front-desk banking services."
            },
            {
                title: "Financial Analysts",
                description: "Evaluating data to guide investment and business decisions."
            }
    
        ]
    },
    {
        title: "Construction & Engineering",
        icon: FaHardHat,
        description:
            "Our recruitment solutions deliver engineers, project managers, and skilled laborers to support companies in executing complex infrastructure projects.",
        jobs: [
            {
                title: "Civil Engineers",
                description: "Designing and overseeing construction projects with safety and efficiency."
            },
            {
                title: "Project Managers",
                description: "Leading construction projects from planning to completion."
            },
            {
                title: "Skilled Laborers",
                description: "Supporting construction sites with hands-on expertise."
            }
    
        ]
    },
    {
        title: "Healthcare",
        icon: FaUserMd,
        description:
            "We connect healthcare providers with nurses, technicians, and specialists, ensuring qualified staff for reliable and efficient patient care.",
        jobs: [
            {
                title: "Nurses",
                description: "Providing compassionate patient care and medical support."
            },
            {
                title: "Laboratory Technicians",
                description: "Conducting tests and assisting in accurate diagnoses."
            },
            {
                title: "Healthcare Assistants",
                description: "Supporting doctors and nurses in daily operations."
            }

        ]
    },
    {
        title: "Retail & Hospitality",
        icon: FaShoppingCart,
        description:
            "By sourcing customer service teams, sales staff, and hospitality professionals, we enable companies to deliver excellent service experiences.",
        jobs: [
            {
                title: "Sales Associates",
                description: "Engaging customers and driving retail sales."
            },
            {
                title: "Waiters & Waitresses",
                description: "Delivering quality dining service to guests."
            },
            {
                title: "Hotel Staff",
                description: "Ensuring smooth hospitality operations and customer satisfaction."
            }
    
        ]
    },
    {
        title: "Oil & Gas",
        icon: FaOilCan,
        description:
            "We recruit engineers, safety officers, and technicians with the expertise needed to support vital operations in the oil and gas sector.",
        jobs: [
            {
                title: "Petroleum Engineers",
                description: "Designing and developing methods for oil and gas extraction."
            },
            {
                title: "Safety Officers",
                description: "Ensuring workplace safety and compliance in oilfields."
            },
            {
                title: "Technicians",
                description: "Maintaining and repairing equipment to support operations."
            }
    
        ]
    },
    {
        title: "Manufacturing",
        icon: FaIndustry,
        description:
            "Our manpower solutions supply experienced workers and specialists who enhance production efficiency and ensure compliance in manufacturing industries.",
        jobs: [
            {
                title: "Machine Operators",
                description: "Operating equipment to maintain efficient production lines."
            },
            {
                title: "Quality Control Inspectors",
                description: "Monitoring product quality to meet industry standards."
            },
            {
                title: "Assembly Line Workers",
                description: "Supporting mass production with precision and speed."
            }
    
        ]

    },
    {
        title: "Semi & Government ",
        icon: FaBuilding,
        description:
            "We partner with government entities to provide skilled administrative, IT, and project management talent that supports national growth and initiatives.",
        jobs: [
            {
                title: "Administrative Staff",
                description: "Managing records, documentation, and office support functions."
            },
            {
                title: "IT Specialists",
                description: "Supporting digital transformation and government systems."
            },
            {
                title: "Project Coordinators",
                description: "Assisting in the delivery of government and public projects."
            }
    
        ]
    },
];
const Flags = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState<any>({});
    const modalRef = useRef<HTMLDivElement>(null);

    function toggleModal(flag: any) {
        setShowModal(!showModal);
        setModalContent(flag);
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setShowModal(false);
            }
        }

        if (showModal) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showModal]);

    return (
        <section className="flex flex-wrap justify-center gap-4 items-center ">
            {data.map((item, index) => (
                <Flag openModal={() => toggleModal(item)} key={index} icon={item.icon} title={item.title} desc={item.description} />
            ))}
            <motion.div
                tabIndex={-1}
                aria-hidden="true"
                className={`${showModal ? '' : 'hidden'} fixed inset-0 z-50 flex justify-center items-center w-full h-full `}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: showModal ? 1 : 0, scale: showModal ? 1 : 0.8 }}
                transition={{ duration: 0.3 }}
            >
                <div ref={modalRef} className="relative p-4 w-full max-w-md max-h-full ">
                    <div className="relative bg-white rounded-lg shadow-lg">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                            <h3 className="text-xl font-ibold text-gray-900 flex items-center gap-4">
                                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full">
                                    {modalContent.icon && React.createElement(modalContent.icon, { size: 24, className: "text-primary" })}
                                </div>
                                {modalContent.title}
                            </h3>
                            <button
                                onClick={() => setShowModal(!showModal)}
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                                data-modal-hide="default-modal"
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-4 md:p-5 space-y-4">
                            <p className="text-base leading-relaxed text-gray-500 ">
                                {modalContent.description}
                            </p>
                            <ul className="flex flex-col gap-4">
                                {modalContent.jobs?.map((job: any, index: any) => (
                                    <li key={index} className="flex flex-col">
                                        <h4 className="text-lg font-semibold text-primary">{job.title}</h4>
                                        <p className="text-sm text-gray-500">{job.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b ">

                            <PrimaryBtn
                                url={`https://wa.me/971569650142?text=Hello, I would like to know about jobs in UAE.`}
                            >Know More</PrimaryBtn>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Flags;

const Flag = ({ icon, title, desc, openModal }: any) => {
    return (
        <div onClick={openModal} className="cursor-pointer flex flex-col items-center px-4 md:px-8 lg:px-16 lg:max-w-[32%] mt-4 max-w-[100%] gap-5">
            <motion.div className="relative flex justify-center items-center ">
                <TbHandClick className="absolute -right-2 top-16 -rotate-12" size={20} />
                <FaLocationPin size={100} className="text-primary" />
                <div className="w-12 h-12 absolute top-4 rounded-full bg-white flex items-center justify-center shadow-lg">
                    {icon && React.createElement(icon, { size: 24, className: "text-primary" })}
                </div>
            </motion.div>
            <div className="flex flex-col gap-4 text-center">
                <h2 className="font-montserrat text-2xl md:text-3xl font-semibold text-primary underline underline-offset-8">
                    {title}
                </h2>
                <p className="text-sm md:text-md">
                    {desc}
                </p>
            </div>
        </div>
    );
};
