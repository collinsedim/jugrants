"use client";
import "./globals.css";
import { Inter, Libre_Baskerville } from "next/font/google";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import "pattern.css";

import Button from "./components/Button";
import { headerMenu, footerMenu, socialProfiles } from "./components/data/data";
import { GrantsProvider } from "./providers/GrantsProvider";
import { BlogProvider } from "./providers/BlogProvider";

import open from "/public/assets/open.png";
import close from "/public/assets/close.png";
import rightColor from "/public/assets/right.png";

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

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-basker",
});

export const metadata = {
  title: "JuGrants",
  description: "Let's help fund that great business/idea you have!",
};

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
      <body
        className={`${libreBaskerville.className} pattern-grid-md text-white`}
      >
        <section className="bg-slate-900/95 min-h-screen">
          <main className="max-w-[1440px] mx-auto">
            {/* Header */}
            <header
              className={`sm:px-5 px-3 mb-20 ${
                isMenuOpen && "bg-bgSecondary text-white"
              }`}
            >
              <div className="flex justify-between items-center z-40 py-5">
                <Link href="/">
                  <p>JuGrants</p>
                </Link>
                <div className="flex gap-7 md:flex-row flex-col items-center justify-center">
                  {/* Desktop Menu */}
                  <nav className="lg:block hidden">
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
                          <Link href={menu.link}>{menu.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  {/* Desktop Menu */}
                  <div className="flex lg:block items-center gap-5">
                    <Button
                      buttonBgColor="bg-bgButton"
                      buttonLocation="/apply"
                      buttonName="Apply"
                      buttonNameSpan="for grant"
                    />
                    <Image
                      src={isMenuOpen ? close : open}
                      alt=""
                      className="cursor-pointer lg:hidden block"
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
                        className={`z-30 absolute bg-bgSecondary w-full left-0 top-24 h-[90%] flex flex-col gap-28 justify-center items-center lg:hidden`}
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
                                <Link href={menu.link}>{menu.title}</Link>
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
            <GrantsProvider>
              <BlogProvider>
                <main className="mt-32 sm:px-5 px-3">{children}</main>
              </BlogProvider>
            </GrantsProvider>
            {/* Main Content */}
            {/* Footer section */}
            <footer className="mt-36 pb-4 sm:px-5 px-3">
              {/* Footer Banner */}
              <div className="mb-28">
                <div className="max-w-5xl mx-auto overflow-hidden rounded-3xl">
                  <div className="bg-gradient-to-b from-[#2c2c3d] to-[#1a1a27] shadow-md">
                    <div className="bg-gradient-to-br from-bgButton/40 to-bgButton flex justify-center">
                      <div className="text-center py-9 px-2">
                        <p>Have a project in mind?</p>
                        <h2 className="text-3xl font-bold mt-3">
                          Let's create something awesome.
                        </h2>
                        <div className="flex justify-center mt-9">
                          <Button
                            buttonBgColor="bg-white"
                            buttonName="Apply for grant"
                            buttonLocation="#"
                            textColor="text-bgButton"
                            buttonImg={rightColor}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Footer Banner */}
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
          </main>
        </section>
      </body>
    </html>
  );
}
