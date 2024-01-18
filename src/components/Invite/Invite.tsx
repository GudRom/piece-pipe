import Text from "elements/Text";
import { FC } from "react";
import styles from "./Invite.module.scss";
import classNames from "classnames";
import IconButton from "elements/buttons/IconButton";
import MainCrossIcon from "elements/icons/MainCrossIcon";
import CheckmarkIcon from "elements/icons/CheckmarkIcon";
import { IInviteModel } from "utils/types/model/IInviteModel";
interface Props {
  invite: IInviteModel;
  className?: string;
  hadnleDeny: () => void;
  handleConfirm: () => void;
}

const Invite: FC<Props> = ({
  invite,
  hadnleDeny,
  handleConfirm,
  className,
}) => {
  const { name, from } = invite;
  const inviteClass = classNames(className, styles.invite);
  return (
    <article className={inviteClass}>
      <div className={styles.invite__textBox}>
        <Text maxLines={2} view="p-18" weight="bold">
          {name}
        </Text>
        <Text view="p-12">от: {from.name}</Text>
      </div>
      <div className={styles.invite__btnBox}>
        <IconButton onClick={hadnleDeny}>
          <MainCrossIcon color="accent" width={20} height={20} />
        </IconButton>
        <IconButton onClick={handleConfirm}>
          <CheckmarkIcon width={23} height={20} />
        </IconButton>
      </div>
    </article>
  );
};

export default Invite;
