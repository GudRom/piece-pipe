import HorizontScroller from "elements/HorizontScroller";
import Avatar from "elements/Avatar";
import AddCircledIcon from "elements/icons/AddCircledIcon";
import IconButton from "elements/buttons/IconButton";
import { FC } from "react";
import { IUserModel } from "utils/types/model/IUserModel";
import { useAppSelector } from "store/hooks";

interface Props {
  list: IUserModel[];
  handleAddClick: () => void;
}

const MembersList: FC<Props> = ({ list, handleAddClick }) => {
  const currentWigwam = useAppSelector(
    (state) => state.wigwamReducer.currentWigwam
  );

  const getMembersSongsCount = (userId: number) => {
    return currentWigwam?.songs.filter((song) => song.memberId === userId)
      .length;
  };
  return (
    <HorizontScroller>
      {list.map((user) => (
        <li key={user.id}>
          <Avatar
            user={user}
            membersSongsCount={getMembersSongsCount(user.id)}
          />
        </li>
      ))}
      <li>
        <IconButton onClick={handleAddClick}>
          <AddCircledIcon />
        </IconButton>
      </li>
    </HorizontScroller>
  );
};

export default MembersList;
