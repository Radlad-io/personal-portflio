import { motion } from "framer-motion";

const variants = {
  cardList: {
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
