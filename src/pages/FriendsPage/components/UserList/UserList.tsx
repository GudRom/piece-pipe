import Text from "elements/Text";
import Avatar from "elements/Avatar";
import Loader from "elements/Loader";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { useEffect } from "react";
import { fetchUsers } from "store/slices/user/slice";
import styles from "./UserList.module.scss";

const UserList = () => {
  const dispatch = useAppDispatch();

  const { allUsers = [], loading } = useAppSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : allUsers.length > 0 ? (
    <ul className={styles.list}>
      {allUsers.map((user) => (
        <Avatar key={user.id} user={user}></Avatar>
      ))}
    </ul>
  ) : (
    <Text view="p-16">У вас нет друзей 😢</Text>
  );
};

export default UserList;
