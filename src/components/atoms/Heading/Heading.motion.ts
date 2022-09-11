import { motion } from "framer-motion";

const variants = {
  initial: {
    y: 65,
  },
  in: {
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  out: {
    y: 65,
    transition: {
      duration: 0.5,
    },
  },
};

export default variants;
