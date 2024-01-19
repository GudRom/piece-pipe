import { Dispatch, FC, SetStateAction, useCallback } from "react";
import LogoIcon from "elements/icons/LogoIcon";
import BurgerIcon from "elements/icons/BurgerIcon";
import IconButton from "elements/buttons/IconButton";
import Button from "elements/buttons/Button";
import Text from "elements/Text";
import CrossLikeBoneIcon from "elements/icons/CrossLikeBoneIcon";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { fetchUser } from "store/slices/user/slice";
import { CURRENT_USER_ID } from "config/config";

interface Props {
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  isMenuOpen: boolean;
}

const Header: FC<Props> = ({ setIsMenuOpen, isMenuOpen }) => {
  const currentUser = useAppSelector((state) => state.userReducer.currentUser);
  const dispatch = useAppDispatch();
  const authorize = useCallback(
    () => !currentUser && dispatch(fetchUser(CURRENT_USER_ID)),
    [dispatch, currentUser]
  );
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <IconButton
        onClick={() => navigate("./")}
        className={styles.header__logoBtn}
      >
        <LogoIcon />
      </IconButton>
      {currentUser ? (
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
