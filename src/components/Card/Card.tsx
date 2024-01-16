import Text from "elements/Text";
import { FC } from "react";
import { IWigwamModel } from "utils/types/model/IWigwamModel";
import styles from "./Card.module.scss";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import IconButton from "elements/buttons/IconButton";
import MainCrossIcon from "elements/icons/MainCrossIcon";
import CheckmarkIcon from "elements/icons/CheckmarkIcon";

type Props = {
  card: IWigwamModel;
  className?: string;
  navlink?: string;
  hadnleDeny?: () => void;
  handleConfirm?: () => void;
};

const Card: FC<Props> = ({
  card,
  className,
  navlink,
  hadnleDeny,
  handleConfirm,
}) => {
  // ownerid сменить на объект owner
  const { name, ownerId } = card;
  const cardClass = classNames(className, styles.card);
  return (
    <article className={cardClass}>
      {navlink ? (
        <NavLink to={navlink}>
          <Text maxLines={3} view="p-18" weight="medium">
            {name}
          </Text>
        </NavLink>
      ) : (
        <>
          <div className={styles.card__textBox}>
            <Text maxLines={2} view="p-18" weight="bold">
              {name}
            </Text>
            <Text view="p-12">от: {ownerId}</Text>
          </div>
          <div className={styles.card__btnBox}>
            <IconButton onClick={hadnleDeny}>
              <MainCrossIcon color="accent" width={20} height={20}/>
            </IconButton>
            <IconButton onClick={handleConfirm}>
              <CheckmarkIcon width={23} height={20} />
            </IconButton>
          </div>
        </>
      )}
    </article>
  );
};

export default Card;
