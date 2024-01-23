import TriangleDialog from "elements/TriangleDialog";
import Button from "elements/buttons/Button";
import Text from "elements/Text";
import { FC, useCallback, useEffect, useRef } from "react";
import { ITriangleDialog } from "elements/TriangleDialog";
import styles from "./StartPage.module.scss";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { fetchUser } from "store/slices/user/slice";
import { CURRENT_USER_ID } from "config/config";
import Snackbar, { ISnackbar } from "elements/Snackbar";
import Loader from "elements/Loader";

interface Props {}
const StartPage: FC<Props> = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const ref = useRef<ITriangleDialog>(null);
  const snackRef = useRef<ISnackbar>(null);
  const { currentUser, error, loading } = useAppSelector(
    (state) => state.userReducer
  );

  const handleMainButtonClick = useCallback(() => {
    if (currentUser) {
      navigate("/wigwams");
    } else {
      dispatch(fetchUser(CURRENT_USER_ID));
      ref?.current?.show();
    }
  }, [currentUser, dispatch, navigate]);

  const handleNavigate = useCallback(() => {
    navigate("./wigwams");
  }, [navigate]);

  useEffect(() => {
    if (error) {
      snackRef.current?.show();
    }
  }, [error]);

  return (
    <section className={styles.startPage}>
      <Text view="title" tag="h1" color="secondary">
        Создай идеальный плейлист вместе с{" "}
        <Text tag="span" color="accent">
          Piece Pipe
        </Text>
      </Text>
      <Button
        view="contained"
        onClick={handleMainButtonClick}
        className={styles.startPage__button}
      >
        <Text view="button" tag="span" color="primary">
          {currentUser ? "К вигвамам" : "Попробовать"}
        </Text>
      </Button>
      {loading ? <Loader width={50} height={50} /> : null}
      <TriangleDialog ref={ref}>
        <div className={styles.startPage__dialogContent}>
          <Text view="p-18" color="primary">
            {"Волшебный вход"}
            <span role="img" aria-label="magic">
              &#10024;
            </span>
          </Text>
          {loading ? (
            <Loader width={50} height={50} />
          ) : (
            <>
              <Text tag="span" view="p-8" color="primary">
                сделали вид, что залогинились
              </Text>

              <Button
                onClick={handleNavigate}
                view={"contained"}
                className={styles.startPage__dialogContent__button}
              >
                <Text view="button" tag="span" color="primary">
                  Ok!
                </Text>
              </Button>
            </>
          )}
        </div>
      </TriangleDialog>
      <Snackbar ref={snackRef}>
        <Text view="p-14" color="extra">
          {error?.name}: {error?.message}
        </Text>
      </Snackbar>
    </section>
  );
};

export default StartPage;
