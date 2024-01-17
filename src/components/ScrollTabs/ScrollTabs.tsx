import { FC, SetStateAction, useState } from "react";
import { IUserModel } from "utils/types/model/IUserModel";
import Avatar from "elements/Avatar";
import { Tabs, Tab } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";
import styles from "./ScrollTabs.module.scss";
import IconButton from "elements/buttons/IconButton";
import AddCircledIcon from "elements/icons/AddCircledIcon";

interface Props {
  list: IUserModel[];
  handleAddClick: () => void;
}

const ScrollTabs: FC<Props> = ({ list, handleAddClick }) => {
  const [activeTab, setActiveTab] = useState(1);
  const onTabClick = (_e: unknown, index: SetStateAction<number>) => {
    setActiveTab(index);
  };
  return (
    <Tabs activeTab={activeTab} onTabClick={onTabClick}>
      {list.map((el) => (
        <Tab key={el.id} className={styles.tab}>
          <Avatar user={el} isList={true} />
        </Tab>
      ))}
      <Tab className={styles.tab}>
        <IconButton onClick={handleAddClick}>
          <AddCircledIcon className={styles.tab__icon} />
        </IconButton>
      </Tab>
    </Tabs>
  );
};

export default ScrollTabs;
