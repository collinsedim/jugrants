"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const page = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <h2>Grants aplication page</h2>
      <motion.nav animate={isOpen ? "open" : "closed"} variants={variants}>
        <div onClick={() => setIsOpen((isOpen) => !isOpen)} />
        {/* <Items /> */}
      </motion.nav>
    </div>
  );
};

export default page;
