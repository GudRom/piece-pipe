import { FC, ReactNode } from "react";
import styles from "./HorizontScroller.module.scss";
import classNames from "classnames";

interface Props {
  children: ReactNode;
  className?: string;
}

const HorizontScroller: FC<Props> = ({ children, className }) => {
  const scrollerClass = classNames(styles.scroller, className);
  return <ul className={scrollerClass}>{children}</ul>;
};

export default HorizontScroller;
