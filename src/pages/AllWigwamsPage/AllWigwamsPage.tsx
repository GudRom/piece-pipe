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
import { createWigwam, getWigwams } from "store/slices/wigwam/slice";
import Invite from "components/Invite";
import { fetchInvites } from "store/slices/invite/slice";
import { PostWigwamDto } from "utils/types/dto/wigwam/PostWigwamDto";
import { MAX_SONGS_FOR_MEMBER } from "config/config";
import Snackbar, { ISnackbar } from "elements/Snackbar";

interface Props {}
const AllWigwamsPage: FC<Props> = () => {
  const [text, setText] = useState("");

  const dispatch = useAppDispatch();

  const ref = useRef<ITriangleDialog>(null);
  const snackbarRef = useRef<ISnackbar>(null);

  const { wigwams } = useAppSelector((state) => state.wigwamReducer);
  const { invites } = useAppSelector((state) => state.inviteReducer);
  const currentUser = useAppSelector((state) => state.userReducer.currentUser);
  
  const loadWigwams = useCallback(() => dispatch(getWigwams()), [dispatch]);
  const getInvites = useCallback(
    () => dispatch(fetchInvites({ type: "to", userId: currentUser!.id })),
    [currentUser, dispatch]
  );

  useEffect(() => {
    loadWigwams();
    getInvites();
  }, [getInvites, loadWigwams]);

  const handleOpenDialog = useCallback(() => {
    ref?.current?.show();
  }, []);

  const userWigwams = wigwams?.filter((wigwam) =>
    wigwam.members?.find((member) => member.id === 1)
  );

  const handleDeny = useCallback(() => {
    return;
  }, []);

  const handleConfirm = useCallback(() => {
    return;
  }, []);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dto: PostWigwamDto = {
      name: text.trim(),
      ownerId: currentUser!.id,
      maxSongForMember: MAX_SONGS_FOR_MEMBER,
      songs: [],
      members: [currentUser!],
    };
    if (text) {
      dispatch(createWigwam(dto));
      ref.current?.hide();
      setText("");
    } else {
      snackbarRef.current?.show();
    }
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
              hadnleDeny={handleDeny}
              handleConfirm={handleConfirm}
            />
          ))}
        </ListWithTitle>
      )}
      {userWigwams.length > 0 ? (
        <ListWithTitle title="Ваши вигвамы">
          {userWigwams.map((wigwam) => (
            <Card key={wigwam.id} card={wigwam} navlink={`${wigwam.id}`} />
          ))}
        </ListWithTitle>
      ) : (
        <Text view="p-16">У вас пока нет вигвамов</Text>
      )}
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
      <Snackbar ref={snackbarRef}>
        <Text view="p-12" color="primary" tag="span">
          Это поле обязательное
        </Text>
      </Snackbar>
    </section>
  );
};

export default AllWigwamsPage;
