import Text from "elements/Text";
import { FC } from "react";
import { IWigwamModel } from "utils/types/model/IWigwamModel";
import styles from "./Card.module.scss";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

type Props = {
  card: IWigwamModel;
  className?: string;
  navlink: string;
};

const Card: FC<Props> = ({ card, className, navlink }) => {
  const { name } = card;
  const cardClass = classNames(className, styles.card);
  return (
    <NavLink to={navlink}>
      <article className={cardClass}>
        <Text maxLines={3} view="p-18" weight="medium">
          {name}
        </Text>
      </article>
    </NavLink>
  );
};

export default Card;
