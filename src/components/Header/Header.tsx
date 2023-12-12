import { FC } from "react";
import "./header.scss";
import LogoIcon from "elements/icons/LogoIcon";
import BurgerIcon from "elements/icons/BurgerIcon";

interface Props {}

const Header: FC<Props> = () => {
  return (
    <header className="header">
      <LogoIcon />
      <BurgerIcon />
    </header>
  );
};

export default Header;
