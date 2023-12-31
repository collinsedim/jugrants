"use client";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const Button = ({
  buttonImg,
  buttonName,
  buttonNameSpan,
  buttonLocation,
  buttonBgColor,
  textColor,
}) => {
  return (
    <Link href={buttonLocation} className={inter.className}>
      <motion.button
        whileTap={{ scale: 0.9 }}
        className={`${buttonBgColor} ${
          textColor && textColor
        } hover:bg-bgButtonHover font-semibold p-4 rounded-xl whitespace-nowrap shadow-md flex items-center justify-center gap-1 sm:text-lg text-base group`}
      >
        {buttonName}{" "}
        <span className="md:inline-block hidden"> {buttonNameSpan}</span>
        {buttonImg && (
          <Image
            src={buttonImg}
            alt=""
            className="group-hover:translate-x-1 duration-150"
            width={20}
            height={20}
          />
        )}
      </motion.button>
    </Link>
  );
};

export default Button;
