import Text from "elements/Text";
import { FC } from "react";
import { IWigwamModel } from "utils/types/model/IWigwamModel";
import styles from "./Card.module.scss";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "store/hooks";
import { setCurrentWigwam } from "store/slices/wigwam/slice";

type Props = {
  card: IWigwamModel;
  className?: string;
  navlink: string;
};

const Card: FC<Props> = ({ card, className, navlink }) => {
  // ownerid сменить на объект owner
  const { name } = card;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cardClass = classNames(className, styles.card);
  const navigateHandle = () => {
    dispatch(setCurrentWigwam(card));
    navigate(navlink);
  };
  return (
    <article className={cardClass} onClick={navigateHandle}>
      <Text maxLines={3} view="p-18" weight="medium">
        {name}
      </Text>
    </article>
  );
};

export default Card;
