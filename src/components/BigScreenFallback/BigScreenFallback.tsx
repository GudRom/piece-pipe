import Text from "elements/Text";
import styles from "./BigScreenFallback.module.scss";

const BigScreenFallback = () => {
  return (
    <Text tag="h1" view="title" className={styles.text}>
      Это приложение пока поддерживает только ширину экранов мобильных
      устройств.
    </Text>
  );
};

export default BigScreenFallback;
