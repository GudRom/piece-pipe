import { menuNavLinks } from "config/config";
import Button from "elements/buttons/Button";
import Sidebar from "elements/Sidebar";
import Text from "elements/Text";
import { FC, memo } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Menu.module.scss";
interface Props {
  isOpen: boolean;
  closeMenu: () => void;
}

const Menu: FC<Props> = ({ isOpen, closeMenu }) => {
  return (
    <Sidebar isOpen={isOpen}>
      <div className={styles.menu}>
        <nav className={styles.menu__navigation}>
          {menuNavLinks.map((el, index) => (
            <li key={index}>
              <NavLink
                to={el.link}
                className={styles.menu__navlink}
                onClick={closeMenu}
                style={({ isActive }) => {
                  return { textDecoration: isActive ? "underline" : "none" };
                }}
              >
                <Text view="button" tag="span">
                  {el.name}
                </Text>
              </NavLink>
            </li>
          ))}
        </nav>
        <Button view="text" className={styles.menu__btn}>
          <Text tag="span" view="button" color="extra">
            {"Выйти"}
          </Text>
        </Button>
      </div>
    </Sidebar>
  );
};

export default memo(Menu);
