import { FC } from "react";
import styles from "./Button.module.scss";
import Link from "next/link";

interface Properties {
  children: JSX.Element | JSX.Element[] | string;
  dark?: boolean;
}

const Button: FC<Properties> = (props) => {
  const { children, dark } = props;

  const classes: string = styles.btn;

  return (
    <Link href={"/posts"} scroll={false}>
      {/* <>
        <button className={classes}>{children}</button>;
      </> */}
      <a className={classes}>Posts</a>
    </Link>
  );
};

Button.defaultProps = {
  dark: false,
};

export default Button;
