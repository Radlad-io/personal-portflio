import { motion } from "framer-motion";

const variants = {
  bg: {
    initial: {
      y: "-100vh",
    },
    in: {
      y: 0,
      transition: {
        duration: 0.75,
        delayChildren: 0.75,
      },
    },
    out: {
      y: "-100vh",
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  },
  body: {
    initial: {
      y: 10,
      opacity: 0,
    },
    in: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    out: {
      y: 10,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  },
};

export default variants;
