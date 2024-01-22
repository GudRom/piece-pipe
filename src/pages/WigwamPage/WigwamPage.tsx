import DeleteWigwam from "elements/icons/DeleteWigwam";
import VynilIcon from "elements/icons/VynilIcon";
import IconButton from "elements/buttons/IconButton";
import Text from "elements/Text";
import { FC, useCallback, useRef } from "react";
import ProgressBar from "elements/ProgressBar";
import Button from "elements/buttons/Button";
import styles from "./WigwamPage.module.scss";
import SongList from "./components/SongList";
import { useNavigate } from "react-router-dom";
import TriangleDialog, { ITriangleDialog } from "elements/TriangleDialog";
import Snackbar, { ISnackbar } from "elements/Snackbar";
import MembersList from "./components/MembersList";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { decimateWigwam } from "store/slices/wigwam/slice";
import { urlConfig } from "config/urlConfig";

interface Props {}

const WigwamPage: FC<Props> = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const ref = useRef<ITriangleDialog>(null);
  const inviteRef = useRef<ITriangleDialog>(null);
  const snackbarRef = useRef<ISnackbar>(null);

  const { currentWigwam } = useAppSelector((state) => state.wigwamReducer);

  const handleOpenDeleteDialog = useCallback(() => {
    ref?.current?.show();
  }, []);

  const handleCloseDialog = useCallback(() => {
    ref?.current?.hide();
  }, []);

  const handleOpenSnackbar = useCallback(() => {
    snackbarRef?.current?.show();
  }, []);

  const handleAddClick = useCallback(() => {
    inviteRef?.current?.show();
  }, []);

  const deleteWigwam = (id: number) => {
    handleCloseDialog();
    dispatch(decimateWigwam(id));
    navigate(urlConfig.WIGWAM);
  };

  if (!currentWigwam) return null;

  const { name, members, maxSongForMember, songs } = currentWigwam;
  return (
    <section className={styles.wigwam}>
      <div className={styles.wigwam__header}>
        <IconButton text="слушать" onClick={handleOpenSnackbar}>
          <VynilIcon width={48} height={40} />
        </IconButton>
        <Text
          view="title"
          className={styles.wigwam__header__title}
          maxLines={2}
        >
          {name}
        </Text>
        <IconButton text="сжечь" onClick={handleOpenDeleteDialog}>
          <DeleteWigwam width={40} height={40} />
        </IconButton>
      </div>
      <MembersList list={members} handleAddClick={handleAddClick} />
      <div className={styles.wigwam__progressBox}>
        <Text view="p-18" className={styles.wigwam__progressBox__text}>
          Песен в плейлисте: {songs.length}
        </Text>
        <ProgressBar
          maxAmount={maxSongForMember * members.length}
          currentAmount={songs.length}
        />
      </div>
      <Button
        view={"contained"}
        className={styles.wigwam__btn}
        onClick={() => navigate("/search")}
      >
        <Text view="button" color="primary">
          Добавить
        </Text>
      </Button>
      <SongList songs={songs} />
      <TriangleDialog ref={ref}>
        <Text view="p-18" color="primary" className={styles.wigwam__dialogText}>
          Подтвердите удаление
        </Text>
        <Button
          view={"contained"}
          onClick={() => deleteWigwam(currentWigwam.id)}
        >
          <Text view="button" color="primary">
            Удалить
          </Text>
        </Button>
      </TriangleDialog>
      <TriangleDialog ref={inviteRef}>
        <Text view="p-18" color="primary" className={styles.wigwam__dialogText}>
          Ссылка-приглашение внутри <span>&#128230;</span>
        </Text>
        <Button view={"contained"} onClick={handleCloseDialog}>
          <Text view="button" color="primary">
            Получить
          </Text>
        </Button>
      </TriangleDialog>
      <Snackbar ref={snackbarRef}>
        <Text view="p-12" color="primary" tag="span">
          Эта кнопка не работает
        </Text>
      </Snackbar>
    </section>
  );
};

export default WigwamPage;
