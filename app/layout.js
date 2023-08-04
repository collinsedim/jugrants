"use client";
import "./globals.css";
import { Inter, Libre_Baskerville } from "next/font/google";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const inter = Inter({ subsets: ["latin"] });
const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
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
    icon: "",
    social: "X",
  },
  {
    icon: "",
    social: "Discord",
  },
];

export default function RootLayout({ children }) {
  const [activeMenu, setActiveMenu] = useState();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className={`${libreBaskerville.className}`}>
        <main className="appColor min-h-screen">
          <div className="max-w-[1440px] mx-auto sm:px-5 px-3">
            {/* Header */}
            <header className="py-5">
              <div className="flex justify-between items-center">
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
                    <Link href="/grants-application">
                      <button className="bg-bgButton hover:bg-bgButtonHover font-bold p-4 rounded-xl whitespace-nowrap">
                        Apply{" "}
                        <span className="md:inline-block hidden">
                          {" "}
                          for grant
                        </span>
                      </button>
                    </Link>
                    <p
                      className="cursor-pointer md:hidden block"
                      onClick={() => setIsMenuOpen((prev) => !prev)}
                    >
                      Menu
                    </p>
                  </div>
                  {/* Mobile Navigation */}
                  <motion.div
                    animate={isMenuOpen ? "open" : "closed"}
                    variants={variants}
                    className={` z-40 absolute bg-slate-900 w-full left-0 top-24 h-[88%] flex justify-center items-center md:hidden `}
                  >
                    <nav className="transition ease-in-out delay-100 duration-300">
                      <ul className="text-3xl text-center flex flex-col gap-14">
                        {headerMenu.map((menu, index) => (
                          <li onClick={() => setIsMenuOpen(false)} key={index}>
                            {menu.title}
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </motion.div>
                  {/* Mobile Navigation */}
                </div>
              </div>
            </header>
            {/* Header */}
            {/* Main Content */}
            {children}
            {/* Main Content */}
            {/* Footer section */}
            <footer>
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

                <div className="flex gap-2">
                  {socialProfiles.map((profile, index) => (
                    <p key={index}>{profile.social}</p>
                  ))}
                </div>
              </div>
            </footer>
            {/* Footer section */}
          </div>
        </main>
      </body>
    </html>
  );
}
