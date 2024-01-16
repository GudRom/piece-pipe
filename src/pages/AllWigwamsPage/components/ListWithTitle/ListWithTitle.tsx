import { FC, ReactNode } from "react";
import Text from "elements/Text";
import style from "./ListWithTitle.module.scss";

interface Props {
  title: string;
  children: ReactNode;
}

const ListWithTitle: FC<Props> = ({ children, title }) => {
  return (
    <div className={style.box}>
      <Text view="title">{title}</Text>
      <ul className={style.box__list}>{children}</ul>
    </div>
  );
};

export default ListWithTitle;
