import TriangleDialog from "elements/TriangleDialog";
import Button from "elements/buttons/Button";
import Text from "elements/Text";
import { FC, useCallback, useRef } from "react";
import { ITriangleDialog } from "elements/TriangleDialog";
// import ProgressBar from "elements/ProgressBar";
// import ScrollTabs from "components/ScrollTabs";
// import Search from "components/Search";
// import { IWigwamModel } from "utils/types/model/IWigwamModel";
import styles from "./StartPage.module.scss";
import { useNavigate } from "react-router-dom";

interface Props {}
const StartPage: FC<Props> = () => {
  const navigate = useNavigate();
  const ref = useRef<ITriangleDialog>(null);
  const handleOpenDialog = useCallback(() => {
    ref?.current?.show();
  }, []);
  const handleNavigate = useCallback(() => {
    navigate("./wigwams");
  }, [navigate]);
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
        onClick={handleOpenDialog}
        className={styles.startPage__button}
      >
        <Text view="button" tag="span" color="primary">
          {"Попробовать"}
        </Text>
      </Button>
      <TriangleDialog ref={ref}>
        <div className={styles.startPage__dialogContent}>
          <Text view="p-18" color="primary">
            {"Волшебный вход"}
            <span role="img" aria-label="magic">
              &#10024;
            </span>
          </Text>
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
        </div>
      </TriangleDialog>
    </section>
  );
};

export default StartPage;
