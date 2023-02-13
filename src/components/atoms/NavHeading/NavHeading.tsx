import { FC } from "react";
import styles from "./NavHeading.module.scss";

interface Properties {
  // Key: sting any allows for additional unknown types
  [key: string]: any;
  children: JSX.Element | JSX.Element[];
}

const NavHeading: FC<Properties> = (props) => {
  // Destructing
  const { children } = props;

  // State

  // Effects

  // Logic

  // Returns
  return (
    <div className={styles.wrapper}>
      <h2>{children}</h2>
    </div>
  );
};

export default NavHeading;
