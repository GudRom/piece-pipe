import { FC } from "react";
import avatar from "assets/members/abstract.png";
import { IUserModel } from "utils/types/model/IUserModel";
import styles from "./Avatar.module.scss";
import classNames from "classnames";
import Text from "elements/Text";

interface Props {
  user: IUserModel;
  membersSongsCount?: number;
  className?: string;
}

const Avatar: FC<Props> = ({ user, className, membersSongsCount }) => {
  const avatarClass = classNames(className, styles.avatar);
  return (
    <div className={avatarClass}>
      <img
        className={styles.avatar__img}
        src={user.avatar ?? avatar}
        alt={user.name}
      />
      {membersSongsCount ? (
        <div className={styles.avatar__countBox}>
          <Text
            view={window.innerWidth < 400 ? "p-12" : "p-14"}
            tag="span"
            color="primary"
            weight="medium"
          >
            {membersSongsCount}
          </Text>
        </div>
      ) : null}
    </div>
  );
};

export default Avatar;
