import Text from "elements/Text";
import UserList from "./components/UserList";
import styles from "./FriendsPage.module.scss";

const FriendsPage = () => {
  return (
    <section className={styles.page}>
      <Text tag="h1" view="title" className={styles.page__text}>
        Ваши друзья
      </Text>
      <UserList />
    </section>
  );
};

export default FriendsPage;
