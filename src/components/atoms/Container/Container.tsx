import { FC } from "react";
import styles from "./Container.module.scss";

interface Properties {
  size?: string;
  children: JSX.Element | JSX.Element[];
}

const Container: FC<Properties> = (props) => {
  // Destructing
  const { size, children } = props;

  // Returns
  return (
    <div
      className={
        size === "sm"
          ? styles.containerSm
          : size === "lg"
          ? styles.containerLg
          : size === "xl"
          ? styles.containerXl
          : styles.container
      }
    >
      {children}
    </div>
  );
};

export default Container;
