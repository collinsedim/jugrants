import { Inter, Oxygen_Mono } from "next/font/google";
import { useContext } from "react";
import { motion } from "framer-motion";

import { GrantsContext } from "../providers/GrantsProvider";

import Link from "next/link";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = Oxygen_Mono({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-mono",
});

const Card = ({
  title,
  description,
  startAmount,
  endAmount,
  category,
  status,
  beneficiary,
  purpose,
  execution,
  payment_structure,
}) => {
  const { setFundedGrants } = useContext(GrantsContext);

  const handleClick = () => {
    setFundedGrants({
      title,
      description,
      startAmount,
      endAmount,
      category,
      status,
      beneficiary,
      purpose,
      execution,
      payment_structure,
    });
  };

  return (
    <Link
      onClick={handleClick}
      href={`/funded-grants/${title.replaceAll(" ", "-").toLowerCase()}`}
    >
      <motion.div
        whileTap={{ scale: 0.9 }}
        className="cursor-pointer bg-bgSecondary rounded-3xl "
      >
        <div className="h-[160px] bg-slate-900/95 rounded-3xl"></div>
        <div
          className={`text-left p-6 flex flex-col gap-3 text-sm ${inter.className}`}
        >
          <p className={`${mono.className} text-textTertiary`}>{category}</p>
          <h3 className="text-xl font-bold whitespace-nowrap overflow-hidden text-ellipsis">
            {title}
          </h3>
          <p className={`${mono.className} text-textTertiary`}>
            Funding amount: <span>{startAmount}</span> -{" "}
            <span>{endAmount}</span>
          </p>
          <p className="font-basker">{description.slice(0, 150) + "..."}</p>
          <div className="flex">
            {beneficiary.map((person, index) => (
              <div
                key={index}
                className="bg-textSecondary p-1 rounded-full group cursor-pointer border-2 border-slate-800 first-of-type:ml-0 -ml-4 hover:z-10 flex gap-2 items-center"
              >
                <Image
                  className="rounded-full object-center object-cover w-8 h-8"
                  src={person.image}
                  alt={person.name}
                />
                <p className="group-hover:inline-block hidden text-slate-950 font-semibold pr-2">
                  {person.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default Card;
