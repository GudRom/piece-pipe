import { Dispatch, FC, SetStateAction, useCallback, useState } from "react";
import "./header.scss";
import LogoIcon from "elements/icons/LogoIcon";
import BurgerIcon from "elements/icons/BurgerIcon";
import IconButton from "elements/buttons/IconButton";
import Button from "elements/buttons/Button";
import Text from "elements/Text";
import CrossLikeBoneIcon from "elements/icons/CrossLikeBoneIcon";

interface Props {
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  isMenuOpen: boolean;
}

const Header: FC<Props> = ({ setIsMenuOpen, isMenuOpen }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const authorize = useCallback(() => setIsAuthorized(true), []);
  return (
    <header className="header">
      <LogoIcon />
      {isAuthorized ? (
        <IconButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <CrossLikeBoneIcon /> : <BurgerIcon />}
        </IconButton>
      ) : (
        <Button onClick={authorize} view="text">
          <Text view="p-16" tag="span" color="secondary">
            {"Войти"}
          </Text>
        </Button>
      )}
    </header>
  );
};

export default Header;
