import { FC } from "react";
import styles from "./Matrix.module.css";

interface Props {
  value: number;
}

export const ItemMatrix: FC<Props> = ({ value }) => {
  return <div className={styles.itemContent}>{value}</div>;
};
