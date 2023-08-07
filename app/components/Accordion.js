import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import plusIcon from "/public/assets/plus-sign.png";
import minusIcon from "/public/assets/minus-sign.png";

const Accordion = ({ title, faq, index, expanded, setExpanded }) => {
  const isOpen = index === expanded;
  //   const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="mb-2 cursor-pointer bg-slate-900/50 rounded-md group"
      onClick={() => setExpanded(isOpen ? false : index)}
    >
      <div
        className={`flex justify-between items-center py-5 px-2 ${
          isOpen && "bg-slate-700"
        }`}
      >
        <p className="font-semibold">{title}</p>
        <Image
          className="group-hover:rotate-90 duration-500"
          width={16}
          height={16}
          src={isOpen ? minusIcon : plusIcon}
          alt=""
        />
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.p
            className="text-textTertiary ml-5 "
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{
              duration: 0.8,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
          >
            {faq}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
