import classNames from "classnames";
import { HTMLAttributes } from "react";
import styles from "./Loader.module.scss";

type Loader = HTMLAttributes<HTMLSpanElement> & {
  width?: number;
  height?: number;
};

const Loader = ({ className, width, height, ...props }: Loader) => {
  const classLoader = classNames(styles.loader, className);
  return (
    <span
      className={classLoader}
      style={{ width: width, height: height }}
      {...props}
    ></span>
  );
};

export default Loader;
