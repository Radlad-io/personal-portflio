import { motion } from "framer-motion";
// import motionPresets from '@libs/motion'

const variants = {
  link: {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
      transition: {
        duration: 0.5,
        // [...motionPresets]
      },
    },
    out: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  },
};

export default variants;
