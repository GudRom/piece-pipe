import { FC } from "react";
import Text from "elements/Text";
import Button from "elements/buttons/Button";
import { useNavigate } from "react-router-dom";
import styles from "./DefendPage.module.scss";

interface Props {}

const DefendPage: FC<Props> = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.defendPage}>
      <Text view="title" tag="h1" className={styles.defendPage__text}>
        Несанкционированный вход!
      </Text>
      <Button onClick={() => navigate("/")} view={"contained"}>
        <Text view="button" color="primary">
          На главную
        </Text>
      </Button>
    </section>
  );
};

export default DefendPage;
