import React, { useState } from "react";
import { motion } from "framer-motion";
import bento3 from "../assets/fastfood.jpg";
import bento2 from "../assets/24.jpg";
import bento1 from "../assets/wwo.svg";

const Services = () => {
  const [hoverBento2, setHoverBento2] = useState(false);
  const [hoverBento3, setHoverBento3] = useState(false);

  function handleOverBento2() {
    setHoverBento2(true);
  }

  function handleOutBento2() {
    setHoverBento2(false);
  }

  function handleOverBento3() {
    setHoverBento3(true);
  }

  function handleOutBento3() {
    setHoverBento3(false);
  }

  return (
    <>
      <div className="grid grid-rows-3 grid-flow-col gap-4 text-white h-[70vh] m-16">
        <motion.div
          className="flex justify-center items-center row-span-3 rounded-2xl col-span-1 bg-zinc-800"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={bento1} className="h-96" />
        </motion.div>

        <motion.div
          className="col-span-2 rounded-2xl bg-[#f6f6f6] flex justify-center items-center relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onMouseOver={handleOverBento2}
          onMouseOut={handleOutBento2}
        >
          <img
            src={bento2}
            className="w-full h-full object-cover rounded-xl z-0"
          />
          <div
            className={`bg-gradient-to-t from-black to-transparent rounded-xl z-40 h-full absolute bottom-0 w-full flex justify-center items-center text-6xl font-bold drop-shadow-xl transition-all duration-500 ease-in-out ${
              hoverBento2 ? "opacity-100" : "opacity-0"
            }`}
          >
            Fast Delivery
          </div>
        </motion.div>

        <motion.div
          className="row-span-2 relative col-span-2 rounded-2xl bg-gradient-to-br from-blue-400 to-sky-200"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onMouseOver={handleOverBento3}
          onMouseOut={handleOutBento3}
        >
          <img
            src={bento3}
            className="w-full h-full object-cover rounded-xl z-0"
          />
          <div
            className={`bg-gradient-to-t from-black to-transparent rounded-xl z-40 h-full absolute bottom-0 w-full flex justify-center items-center text-6xl font-bold drop-shadow-xl transition-all duration-500 ease-in-out ${
              hoverBento3 ? "opacity-100" : "opacity-0"
            }`}
          >
            Custom Meals
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Services;
