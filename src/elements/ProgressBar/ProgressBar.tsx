import { FC, memo } from "react";
import styles from "./ProgressBar.module.scss";
import classNames from "classnames";

interface Props {
  maxAmount: number;
  currentAmount: number;
  className?: string;
}

const ProgressBar: FC<Props> = ({ maxAmount, currentAmount, className }) => {
  const progressClass = classNames(className, styles.progress);
  return (
    <progress
      className={progressClass}
      value={currentAmount}
      max={maxAmount}
    ></progress>
  );
};

export default memo(ProgressBar);
