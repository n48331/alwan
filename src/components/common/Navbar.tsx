"use client"
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./navbar.module.css";
const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  }
  const mobileMenuVariant = {
    opened: {
      y: "0%",
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02]
      }
    },
    closed: {
      y: "-100%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02]
      }
    }
  }
  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 1.2
      }
    },
    closed: { opacity: 0 }
  }
  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.18
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1
      }
    }
  }

  const liVariant = {
    opened: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.65,
        ease: "easeOut"
      }
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut"
      }
    }
  }
  const MOBILE_NAV_ITEMS = [
    {
      id: 0,
      navTitle: "Home",
      href: "#home"
    },
    {
      id: 1,
      navTitle: "About",
      href: "#about"
    },
    {
      id: 2,
      navTitle: "Services",
      href: "#services"
    },
    {
      id: 3,
      navTitle: "Contact",
      href: "#contact"
    }
  ]
  
  const fadeInStart = { opacity: 0 }
  const fadeInEnd = { opacity: 1 }
  const fadeInTransition = { duration: 1 }
 const handleClick = (href:any) => {
    setMobileNavOpen(false)
    document.getElementById(href)?.scrollIntoView({ behavior: "smooth" })
  }
    return (
        <header className="mb-2 shadow bg-primary font-montserrat GetStartedToday sticky -top-1 z-[80]">
  <div className="relative items-center  flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 sm:mx-auto sm:flex-row">
  <div className="flex items-center gap-4">
  {/* <Image 
    src="/common/logo.png" 
    alt="menu" 
    width={80} 
    height={80} 
    className="w-[50px] h-[40px] object-contain"
  />
  <Image 
    src="/common/logo.svg" 
    alt="menu" 
    width={110} 
    height={80}  
    className="w-[100px] h-[40px] object-contain"
  /> */

  
  }
</div>
    <nav aria-labelledby="header-navigation" className=" flex max-h-0 w-full flex-col items-center justify-end overflow-hidden transition-all sm:ml-24 sm:max-h-full sm:flex-row sm:items-center ">
      <h2 className="sr-only" id="header-navigation">Header navigation</h2>
      <ul className="flex flex-col items-center text-secondary sm:flex-row">

        {MOBILE_NAV_ITEMS.map(navItem => (
            <li key={navItem.id} className="hidden md:block sm:mr-12">
            <a href={navItem.href}>{navItem.navTitle}</a>
            </li>
        ))}
      </ul>
      
      {/* Desktop Contact Info */}
      <div className="hidden lg:flex items-center gap-6 ml-8">
        <a 
          href="tel:+971569650142" 
          className="text-secondary hover:text-white transition-colors duration-200 cursor-pointer flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
          </svg>
          <span className="text-sm">+971 56965 0142</span>
        </a>
        <a 
          href="mailto:alwanmanpoweruae@gmail.com" 
          className="text-secondary hover:text-white transition-colors duration-200 cursor-pointer flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
          </svg>
          <span className="text-sm">alwanmanpoweruae@gmail.com</span>
        </a>
      </div>
    <label 
    onClick={() => setMobileNavOpen(!mobileNavOpen)}
    className="absolute right-4 top-5 cursor-pointer sm:hidden" htmlFor="navbar-open">
      <span className="sr-only">Toggle menu</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </label>

    </nav>
    <motion.nav
    className={`${mobileNavOpen ? 'sm:hidden' : 'hidden'} ${styles.nav}`}
        initial="closed"
        animate={mobileNavOpen ? "opened" : "closed"}
      >
        
        <motion.div variants={mobileMenuVariant} className={`${styles["mobile-menu"]} `}>
          <motion.button
            variants={fadeInVariant}
            onClick={() => setMobileNavOpen(false)}
          >
            Close
          </motion.button>
          <motion.ul variants={ulVariant} className="text-white">
            {MOBILE_NAV_ITEMS.map(navItem => (
              <a key={navItem.id} onClick={() => handleClick(navItem.href)} href={navItem.href}>
              <motion.li whileTap={{ scale: 0.95 }} >
                <motion.div variants={liVariant}>{navItem.navTitle}</motion.div>
              </motion.li>
              </a>
            ))}
          </motion.ul>
          <motion.div variants={fadeInVariant} className={`${styles["contact"]} text-gray-400 flex flex-col gap-4`}>
            <a 
              href="tel:+971569650142" 
              className="hover:text-white transition-colors duration-200 cursor-pointer"
            >
              <h5>+971 56965 0142</h5>
            </a>
            <a 
              href="mailto:alwanmanpoweruae@gmail.com" 
              className="hover:text-white transition-colors duration-200 cursor-pointer"
            >
              <h5>alwanmanpoweruae@gmail.com</h5>
            </a>
          </motion.div>
        </motion.div>
      </motion.nav>
  </div>
</header>
    );
    }

export default Navbar;