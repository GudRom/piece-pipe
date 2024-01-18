import AddWigwamIcon from "elements/icons/AddWigwamIcon";
import IconButton from "elements/buttons/IconButton";
import { FC, FormEvent, useCallback, useEffect, useRef, useState } from "react";
import Text from "elements/Text";
import Card from "components/Card";
import ListWithTitle from "pages/AllWigwamsPage/components/ListWithTitle";
import styles from "./AllWigwamsPage.module.scss";
import TriangleDialog, { ITriangleDialog } from "elements/TriangleDialog";
import TextInput from "elements/TextInput";
import Button from "elements/buttons/Button";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getWigwams } from "store/slices/wigwam/slice";
import Invite from "components/Invite";
import { fetchInvites } from "store/slices/invite/slice";

interface Props {}
const AllWigwamsPage: FC<Props> = () => {
  const [text, setText] = useState("");
  const ref = useRef<ITriangleDialog>(null);
  const handleOpenDialog = useCallback(() => {
    ref?.current?.show();
  }, []);
  const dispatch = useAppDispatch();
  const { wigwams } = useAppSelector((state) => state.wigwamReducer);
  const { invites } = useAppSelector((state) => state.inviteReducer);
  useEffect(() => {
    dispatch(getWigwams(1));
    dispatch(fetchInvites({ type: "to", userId: 1 }));
  }, [dispatch]);

  // const handleChange = (e: FormEvent<HTMLInputElement>) => {
  //   setText(e.currentTarget.value);
  // };
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    ref.current?.hide();
    setText("");
  };
  return (
    <section className={styles.wigwams}>
      <div className={styles.wigwams__header}>
        <IconButton
          className={styles.wigwams__createBtn}
          onClick={handleOpenDialog}
          text="создать"
        >
          <AddWigwamIcon width={40} height={40} />
        </IconButton>
      </div>
      {invites.length > 0 && (
        <ListWithTitle title="Приглашения">
          {invites.map((invite) => (
            <Invite
              key={invite.id}
              invite={invite}
              hadnleDeny={() => {}}
              handleConfirm={() => {}}
            />
          ))}
        </ListWithTitle>
      )}
      <ListWithTitle title="Ваши вигвамы">
        {wigwams.map((wigwam) => (
          <Card key={wigwam.id} card={wigwam} navlink={`${wigwam.id}`} />
        ))}
      </ListWithTitle>
      <TriangleDialog ref={ref}>
        <form className={styles.wigwams__form} onSubmit={submitHandler}>
          <TextInput
            value={text}
            onChange={setText}
            variant={"standard"}
            placeholder="Название"
          />
          <Button
            view="contained"
            type="submit"
            className={styles.wigwams__form__btn}
          >
            <Text view="button" color="primary">
              Создать
            </Text>
          </Button>
        </form>
      </TriangleDialog>
    </section>
  );
};

export default AllWigwamsPage;
