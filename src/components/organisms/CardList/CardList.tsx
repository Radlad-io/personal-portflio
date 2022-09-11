import { FC } from "react";
import styles from "./CardList.module.scss";
import { motion } from "framer-motion";
import variants from "./CardList.motion";

// Components
import Card from "@components/molecules/Card/Card";
import Container from "@components/atoms/Container/Container";
import Grid from "@components/atoms/Grid/Grid";

interface Properties {
  // Key: sting any allows for additional unknown types
  [key: string]: any;
}

const CardList: FC<Properties> = (props) => {
  const { posts, limit } = props;
  // Returns
  return (
    <motion.div className={styles.wrapper} variants={variants.cardList}>
      <Grid>
        {posts.map(
          ({ title, id }: { title: string; id: number }, index: number) =>
            (limit > index || limit === undefined) && (
              <Grid column={true} sm={12} lg={6} xl={4} key={id}>
                <Card title={title} route={`/posts/${id}`} />
              </Grid>
            )
        )}
      </Grid>
    </motion.div>
  );
};

export default CardList;
