import HorizontScroller from "elements/HorizontScroller";
import Avatar from "elements/Avatar";
import AddCircledIcon from "elements/icons/AddCircledIcon";
import IconButton from "elements/buttons/IconButton";
import { FC } from "react";
import { IUserModel } from "utils/types/model/IUserModel";

interface Props {
  list: IUserModel[];
  handleAddClick: () => void;
}

const MembersList: FC<Props> = ({ list, handleAddClick }) => {
  return (
    <HorizontScroller>
      {list.map((el) => (
        <li key={el.id}>
          <Avatar user={el} isList={true} />
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
