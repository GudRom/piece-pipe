import { FC, memo } from "react";
import styles from "./ProgressBar.module.scss";
import classNames from "classnames";

interface Props {
  maxAmount: number;
  currentAmount: number;
  className?: string;
}

const ProgressBar: FC<Props> = ({ maxAmount, currentAmount, className }) => {
  const progressLineWidth = (currentAmount / maxAmount) * 100;
  const progressClass = classNames(className, styles.progress);
  return (
    <div className={progressClass}>
      <div
        className={styles.progress__line}
        style={{ width: `${progressLineWidth}%` }}
      ></div>
    </div>
  );
};

export default memo(ProgressBar);
