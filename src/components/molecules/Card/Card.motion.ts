import { motion } from "framer-motion";
// import motionPresets from '@libs/motion'

const variants = {
  card: {
    initial: {
      opacity: 0,
      y: 10,
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        // [...motionPresets]
      },
    },
    out: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 0.5,
      },
    },
  },
};

export default variants;
