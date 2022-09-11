import { FC } from "react";
import { default as NextLink } from "next/link";
import styles from "./Link.module.scss";
import { motion } from "framer-motion";
import variants from "./Link.motion";

interface Properties {
  scroll?: boolean;
  passHref?: boolean;
  prefetch?: boolean;
  route: string;
  children: JSX.Element | JSX.Element[] | string;
}

const Link: FC<Properties> = (props) => {
  // Destructing
  const { scroll, passHref, prefetch, route, children } = props;

  // Returns
  return (
    <motion.div
      variants={variants.link}
      initial={variants.link.initial}
      whileInView={variants.link.in}
      exit={variants.link.out}
    >
      <NextLink
        href={route}
        scroll={scroll}
        passHref={passHref}
        prefetch={prefetch}
      >
        <a className={styles.link}>{children}</a>
      </NextLink>
    </motion.div>
  );
};

Link.defaultProps = {
  scroll: false,
  passHref: false,
  prefetch: false,
};

export default Link;
