import React from "react";
import { motion } from "framer-motion";

// This component handles the tab button on smaller screens

const variants = {
  default: { width: 0 },
  active: { width: "calc(90% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? 
  "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600  " : 
  "text-black";

  return (
    <button onClick={selectTab}>
      <p className={`mr-7 font-semibold text-xl hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-gradient-to-r from-purple-400 to-pink-600 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;