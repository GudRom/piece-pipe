import { FC, useCallback, useState } from "react";
import "./header.scss";
import LogoIcon from "elements/icons/LogoIcon";
import BurgerIcon from "elements/icons/BurgerIcon";
import IconButton from "elements/buttons/IconButton";
import Button from "elements/buttons/Button";
import Text from "elements/Text";

interface Props {}

const Header: FC<Props> = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const authorize = useCallback(() => setIsAuthorized(true), []);
  return (
    <header className="header">
      <LogoIcon />
      {isAuthorized ? (
        <IconButton>
          <BurgerIcon />
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
