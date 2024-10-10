import React, { useState } from "react";
import { motion } from "framer-motion";
import arrow_north from "../assets/arrow_north.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.1, transition: { duration: 0.3, ease: "easeInOut" } },
    tap: { scale: 0.95 },
  };

  return (
    <div className="text-white">
      {submitted ? (
        <motion.h2
          className="font-bold text-5xl h-[79vh] flex items-center justify-center text-zinc-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Thank you! We'll get back to you soon!
        </motion.h2>
      ) : (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={formVariants}
          className="flex flex-col items-center gap-16 m-10"
        >
          <div className="flex flex-col gap-2 items-center text-4xl font-semibold">
            <span>Love to hear from you,</span>
            <span>Get in touch👋</span>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-10 bg-zinc-800 p-14 rounded-3xl justify-center shadow-inner shadow-green-300"
          >
            <div className="flex">
              <div>
                <label htmlFor="name" className="text-md">
                  Name :
                </label>
                <input
                  className="bg-zinc-700 p-2 rounded-md mx-3"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="text-md">
                  Email :
                </label>
                <input
                  className="bg-zinc-700 p-2 rounded-md mx-3"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="flex items-center">
              <label htmlFor="message" className="text-md w-[6vw]">
                Message :
              </label>
              <textarea
                className="bg-zinc-700 p-2 rounded-md mx-3 w-full"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <motion.button
              className="text-white flex justify-center font-semibold items-center gap-3 bg-gradient-to-tr from-green-500 to-green-400 rounded-full hover:cursor-pointer p-2"
              type="submit"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span>Submit</span>
              <img src={arrow_north} alt="arrow_north" />
            </motion.button>
          </form>
        </motion.div>
      )}
    </div>
  );
};

export default Contact;
