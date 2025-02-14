import { FC } from "react";
import styles from "./Featured.module.scss";
import { motion } from "framer-motion";
import variants from "./Featured.motion";

//Components
import Container from "@components/atoms/Container/Container";
import Heading from "@components/atoms/Heading/Heading";
import CardList from "@components/organisms/CardList/CardList";

interface Properties {
  children?: JSX.Element | JSX.Element[];
  posts: Array<String>;
  heading: string;
  limit?: number;
}

const Featured: FC<Properties> = (props) => {
  // Destructing
  const { children, posts, heading, limit } = props;

  return (
    <motion.section
      variants={variants.featured}
      initial={"initial"}
      whileInView={"in"}
      viewport={{ once: true }}
      exit={"out"}
    >
      <Container>
        <Heading size={1}>{heading}</Heading>
        <CardList posts={posts} limit={limit} />
      </Container>
    </motion.section>
  );
};

export default Featured;
