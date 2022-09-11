import { motion } from "framer-motion";

const variants = {
  bg: {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delayChildren: 0.5,
      },
    },
    out: {
      opacity: 0,
      transition: {
        duration: 0.5,
        when: "afterChildren",
      },
    },
  },
  title: {
    initial: {
      opacity: 0,
      transition: {
        delayChildren: 0.15,
      },
    },
    in: {
      opacity: 1,
      transition: {
        delayChildren: 0.15,
      },
    },
    out: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  },
};

export default variants;
