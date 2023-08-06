"use client";
import "./globals.css";
import { Inter, Libre_Baskerville } from "next/font/google";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import "pattern.css";

import Button from "./components/Button";

import open from "/public/assets/open.png";
import close from "/public/assets/close.png";
import discord from "/public/assets/discord-white.png";
import twitter from "/public/assets/twitter-white.png";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const menuContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerDirection: -1,
      when: "beforeChildren",
    },
  },
};

// const itemInMenu = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1 },
// };

// Fonts

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-basker",
});

export const metadata = {
  title: "JuGrants",
  description: "Let's help fund that great business/idea you have!",
};

const headerMenu = [
  {
    title: "Discover initatives",
  },
  {
    title: "Funded grants",
  },
  {
    title: "Program expenses",
  },
  {
    title: "Blog",
  },
  {
    title: "FAQ",
  },
];

const footerMenu = [
  {
    title: "About",
  },
  {
    title: "FAQ",
  },
  {
    title: "Brand assets",
  },
  {
    title: "JuGrant Foundation",
  },
  {
    title: "JuGrant trading",
  },
];

const socialProfiles = [
  {
    icon: discord,
    social: "Discord",
  },
  {
    icon: twitter,
    social: "Twitter",
  },
];

const siteSocials = socialProfiles.map((profile, index) => (
  <Link key={index} href="#">
    <Image src={profile.icon} alt={profile.social} />
  </Link>
));

export default function RootLayout({ children }) {
  const [activeMenu, setActiveMenu] = useState();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(true);
    }
  }, [isMenuOpen]);

  return (
    <html lang="en">
      <body className={`${libreBaskerville.className} pattern-grid-md`}>
        <main
          className={`${
            isMenuOpen ? "bg-bgSecondary text-white" : "bg-slate-900/95"
          } min-h-screen`}
        >
          <div className="max-w-[1440px] mx-auto sm:px-5 px-3">
            {/* Header */}
            <header className="py-5 mb-20">
              <div className="flex justify-between items-center z-40">
                <Link href="/">
                  <p>JuGrants</p>
                </Link>
                <div className="flex gap-7 md:flex-row flex-col items-center justify-center">
                  {/* Desktop Menu */}
                  <nav className="md:block hidden">
                    <ul className="text-base flex gap-7 items-center">
                      {headerMenu.map((menu, index) => (
                        <li
                          key={index}
                          onClick={() => setActiveMenu(index)}
                          className={` hover:text-textSecondary ${
                            activeMenu === index
                              ? "text-textPrimary"
                              : "text-textTertiary"
                          }`}
                        >
                          {menu.title}
                        </li>
                      ))}
                    </ul>
                  </nav>
                  {/* Desktop Menu */}
                  <div className="flex md:block items-center gap-5">
                    <Button
                      buttonBgColor="bg-bgButton"
                      buttonLocation="/grants-application"
                      buttonName="Apply"
                      buttonNameSpan="for grant"
                    />
                    <Image
                      src={isMenuOpen ? close : open}
                      alt=""
                      className="cursor-pointer md:hidden block"
                      onClick={() => setIsMenuOpen((prev) => !prev)}
                    />
                  </div>
                  {/* Mobile Navigation */}
                  <AnimatePresence>
                    {isMenuOpen && (
                      <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={variants}
                        className={`z-30 absolute bg-bgSecondary w-full left-0 top-24 h-[90%] flex flex-col gap-28 justify-center items-center md:hidden `}
                      >
                        <nav className="">
                          <motion.ul
                            variants={menuContainer}
                            className="text-3xl text-center flex flex-col gap-12"
                          >
                            {headerMenu.map((menu, index) => (
                              <motion.li
                                initial={{ x: -500 }}
                                animate={{ x: 0 }}
                                exit={{ x: -500 }}
                                transition={{
                                  ease: "easeOut",
                                  duration: 0.4,
                                  delay: index * 0.2,
                                }}
                                onClick={() => setIsMenuOpen(false)}
                                key={index}
                              >
                                {menu.title}
                              </motion.li>
                            ))}
                          </motion.ul>
                        </nav>
                        <div className="flex gap-10">{siteSocials}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  {/* Mobile Navigation */}
                </div>
              </div>
            </header>
            {/* Header */}
            {/* Main Content */}
            <main className="mt-32">{children}</main>
            {/* Main Content */}
            {/* Footer section */}
            <footer className="mt-20">
              <div className="sm:flex justify-between items-center">
                <div className="flex justify-between gap-7">
                  <p className="text-red-600">logo</p>
                  <nav>
                    <ul className="text-base md:flex gap-7 items-center">
                      {footerMenu.map((menu, index) => (
                        <li key={index}>{menu.title}</li>
                      ))}
                    </ul>
                  </nav>
                </div>

                <div className="flex gap-5">{siteSocials}</div>
              </div>
            </footer>
            {/* Footer section */}
          </div>
        </main>
      </body>
    </html>
  );
}
