import { FC } from "react";
import "./header.scss";
import LogoIcon from "elements/icons/LogoIcon";
import BurgerIcon from "elements/icons/BurgerIcon";
import IconButton from "elements/buttons/IconButton";

interface Props {}

const Header: FC<Props> = () => {
  return (
    <header className="header">
      <LogoIcon />
      <IconButton>
        <BurgerIcon />
      </IconButton>
    </header>
  );
};

export default Header;
