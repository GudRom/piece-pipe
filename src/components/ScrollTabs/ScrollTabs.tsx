import { FC, SetStateAction, useState } from "react";
import { IUserModel } from "utils/types/model/IUserModel";
import Avatar from "elements/Avatar";
import { Tabs, Tab } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";
import styles from "./ScrollTabs.module.scss";

interface Props {
  list: IUserModel[];
}

const ScrollTabs: FC<Props> = ({ list }) => {
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
    </Tabs>
  );
};

export default ScrollTabs;
