import { FC } from "react";
import avatar from "assets/members/fire-girl.png";
import { IUserModel } from "utils/types/model/IUserModel";
import styles from "./Avatar.module.scss";
import classNames from "classnames";
import Text from "elements/Text";

interface Props {
  user: IUserModel;
  isList: boolean;
  className?: string;
}

const Avatar: FC<Props> = ({ user, isList, className }) => {
  const avatarClass = classNames(className, styles.avatar);
  return (
    <div className={avatarClass}>
      <img className={styles.avatar__img} src={avatar} alt={user.name} />
      {isList ? (
        <div className={styles.avatar__countBox}>
          <Text
            view={window.innerWidth < 400 ? "p-12" : "p-14"}
            tag="span"
            color="primary"
            weight='medium'
          >
            {5}
          </Text>
        </div>
      ) : null}
    </div>
  );
};

export default Avatar;
