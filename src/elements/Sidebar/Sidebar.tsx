import { FC, PropsWithChildren } from "react";
import styles from "./Sidebar.module.scss";
import classNames from "classnames";
type Props = PropsWithChildren & {
  isOpen: boolean;
};

const Sidebar: FC<Props> = ({ isOpen, children }) => {
  const sidebarClass = classNames(styles.sidebar, {
    ["visible"]: isOpen,
  });
  return <div className={sidebarClass}>{children}</div>;
};

export default Sidebar;
