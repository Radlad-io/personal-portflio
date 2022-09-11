import { FC } from "react";
import styles from "./Grid.module.scss";

type GridItemsAlignment =
  | "flex-start"
  | "center"
  | "flex-end"
  | "stretch"
  | "baseline";

type GridJustify =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";

type GridSizes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface GridProps {
  column?: boolean;
  row?: boolean;
  alignItems?: GridItemsAlignment;
  justify?: GridJustify;
  xl?: GridSizes;
  lg?: GridSizes;
  md?: GridSizes;
  sm?: GridSizes;
  children: JSX.Element | JSX.Element[];
}

// TODO: Styling doesn't seem complete. Can't get the boxes to be the same size.

const Grid: FC<GridProps> = (props) => {
  const { alignItems, children, column, justify, xl, lg, md, row, sm } = props;

  const isRow: boolean = row || !column;

  const classes: string =
    (!isRow ? styles.column : styles.row) +
    // Row styling
    (isRow && justify ? ` ${styles[justify]}` : "") +
    (isRow && alignItems ? ` ${styles["align-" + alignItems]}` : "") +
    // Column styling
    (!isRow && sm ? ` ${styles["sm-" + sm]}` : "") +
    (!isRow && md ? ` ${styles["md-" + md]}` : "") +
    (!isRow && lg ? ` ${styles["lg-" + lg]}` : "") +
    (!isRow && xl ? ` ${styles["xl-" + xl]}` : "");

  return <div className={classes}>{children}</div>;
};

export default Grid;

// https://linguinecode.com/post/responsive-grid-layout-react-component
