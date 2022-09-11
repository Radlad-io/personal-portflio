import { FC } from "react";
import styles from "./Paragraph.module.scss";

interface Properties {
  children: JSX.Element;
}

const Paragraph: FC<Properties> = ({ children }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <p>{children}</p>
      </div>
    </>
  );
};

export default Paragraph;
