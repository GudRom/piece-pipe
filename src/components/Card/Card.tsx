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
  // ownerid сменить на объект owner
  const { name } = card;
  const cardClass = classNames(className, styles.card);
  return (
    <article className={cardClass}>
      <NavLink to={navlink}>
        <Text maxLines={3} view="p-18" weight="medium">
          {name}
        </Text>
      </NavLink>
    </article>
  );
};

export default Card;
