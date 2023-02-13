import Link from "next/link";
import { FC } from "react";
import styles from "./NavLink.module.scss";

interface Properties {
  // Key: sting any allows for additional unknown types
  [key: string]: any;
  text: string;
  route: string;
  year: string;
}

const NavLink: FC<Properties> = (props) => {
  // Destructing
  const { text, route, year } = props;

  // State

  // Effects

  // Logic

  // Returns
  return (
    <li className={styles.wrapper}>
      <hr />
      <div className={styles.content}>
        <Link href={route}>{text}</Link>
        <p>{year}</p>
      </div>
    </li>
  );
};

export default NavLink;
