import { motion } from "framer-motion";

const variants = {
  featured: {
    initial: {},
    in: {
      transition: {
        staggerChildren: 0.05,
      },
    },
    out: {
      transition: {
        staggerChildren: 0.015,
      },
    },
  },
};

export default variants;
