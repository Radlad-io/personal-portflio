import { FC } from "react";
// import styles from "./NavList.module.scss";
import NavLink from "@components/atoms/NavLink/NavLink";

interface Properties {
  // Key: sting any allows for additional unknown types
  [key: string]: any;
  links: [text: string, route: string, year: string];
}

const NavList: FC<Properties> = (props) => {
  // Destructing
  const { links } = props;

  // State

  // Effects

  // Logic

  // Returns
  return (
    <nav>
      {links.map((link) => {
        return <NavLink text={link.text} route={link.route} year={link.year} />;
      })}
    </nav>
  );
};

export default NavList;
