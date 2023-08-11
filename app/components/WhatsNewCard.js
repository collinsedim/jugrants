import { Oxygen_Mono } from "next/font/google";
import { motion } from "framer-motion";

const mono = Oxygen_Mono({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-mono",
});

const WhatsNewCard = ({ fRound, title, titleBreak, date, titleFull }) => {
  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      className="bg-bgSecondary w-80 rounded-3xl overflow-hidden cursor-pointer"
    >
      <div className="pattern-grid-md rounded-2xl">
        <div className="bg-slate-900/90 border-[5px] border-bgButton rounded-2xl py-10">
          <div className="flex flex-col items-center">
            <div className="relative">
              <p className={`${mono.className} text-textTertiary text-[10px]`}>
                {fRound}
              </p>
              <h2 className="text-2xl font-bold">
                {title}
                <br /> {titleBreak}
              </h2>
              <div className="h-24 w-[195px] border-[1px] border-bgButton rounded-full absolute -top-1 -left-4 -rotate-12"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="mb-20">
          <p className={`${mono.className} text-textTertiary text-xs mb-2`}>
            {fRound}
          </p>
          <h3 className="font-bold text-lg">{titleFull}</h3>
        </div>
        <p className={`${mono.className} text-textTertiary text-xs`}>{date}</p>
      </div>
    </motion.div>
  );
};

export default WhatsNewCard;
