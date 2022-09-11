import { FC } from "react";
import styles from "./slug.module.scss";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import variants from "./slug.motion";

// Components
import Link from "@components/atoms/Link/Link";
import Container from "@components/atoms/Container/Container";

export async function getStaticPaths() {
  const res = await fetch(`https://dummyjson.com/posts`);
  const data = await res.json();

  const paths = data.posts.map((post: object) => {
    return { params: { slug: `${post.id}` } };
  });

  return {
    paths: paths,
    fallback: true,
  };
}

// TODO: Add types declerations
export async function getStaticProps(context: object) {
  // TODO: Break this out into a api lib
  const res = await fetch(`https://dummyjson.com/posts/${context.params.slug}`);
  const data = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}

interface Properties {
  // Key: sting any allows for additional unknown types
  [key: string]: any;
  children: JSX.Element | JSX.Element[];
}

const index: FC<Properties> = (props) => {
  //  Destructuring
  const { id, title, body, userId, tags, reactions } = props.data;

  //  Fallback routing
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // Returns
  return (
    <motion.div
      className={styles.wrapper}
      variants={variants.bg}
      initial={"initial"}
      animate={"in"}
      exit={"out"}
    >
      <Container>
        <Link route={"/posts"}>Return to post list</Link>
        <div className={styles.flex}>
          <motion.p variants={variants.body}>{body}</motion.p>
        </div>
      </Container>
    </motion.div>
  );
};

export default index;
