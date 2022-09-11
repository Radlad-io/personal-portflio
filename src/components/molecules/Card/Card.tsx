import { FC } from "react";
import styles from "./Card.module.scss";
import { motion } from "framer-motion";
import variants from "./Card.motion";

// Utilities
import slugify from "@libs/util";

// Components
import Link from "next/link";

interface Properties {
  title: string;
  route: string;
}

const Card: FC<Properties> = (props) => {
  // Destructing
  const { title, route } = props;

  // Returns
  return (
    <Link href={slugify(route)} prefetch={false} scroll={false}>
      <motion.article className={styles.card} variants={variants.card}>
        <h2>{title}</h2>
        <p>read more</p>
      </motion.article>
    </Link>
  );
};

export default Card;
