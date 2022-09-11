import { FC } from "react";
import styles from "./Heading.module.scss";
import { motion } from "framer-motion";
import variants from "./Heading.motion";

type headingSizes = 1 | 2 | 3 | 4 | 5 | 6;

interface Properties {
  children: JSX.Element | JSX.Element[] | string;
  size?: headingSizes;
}

const Heading: FC<Properties> = (props) => {
  const { children, size } = props;
  return (
    <motion.div
      className={styles.mask}
      whileInView={variants.in}
      viewport={{ once: true }}
    >
      <motion.div
        variants={variants}
        initial={variants.initial}
        animate={variants.in}
        exit={variants.out}
      >
        {size == 1 && <h1 className={styles.heading}>{children}</h1>}
        {size == 2 && <h2 className={styles.heading}>{children}</h2>}
        {size == 3 && <h3 className={styles.heading}>{children}</h3>}
        {size == 4 && <h4 className={styles.heading}>{children}</h4>}
        {size == 5 && <h5 className={styles.heading}>{children}</h5>}
        {size == 6 && <h6 className={styles.heading}>{children}</h6>}
      </motion.div>
    </motion.div>
  );
};

Heading.defaultProps = {
  size: 1,
};

export default Heading;
