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

const testWigwam = {
  id: 1,
  name: "Пати на хате",
  ownerId: 1,
  maxSongForMember: 5,
  songs: [
    {
      memberId: 2,
      song: {
        id: 1,
        name: "Shape of You",
        artist: "Ed Sheeran",
        duration: 233,
      },
    },
    {
      memberId: 2,
      song: {
        id: 27,
        name: "Stronger (What Doesn't Kill You)",
        artist: "Kelly Clarkson",
        duration: 220,
      },
    },
    {
      memberId: 2,
      song: {
        id: 23,
        name: "Fix You",
        artist: "Coldplay",
        duration: 294,
      },
    },
    {
      memberId: 3,
      song: {
        id: 26,
        name: "Cheap Thrills",
        artist: "Sia",
        duration: 211,
      },
    },
    {
      memberId: 3,
      song: {
        id: 20,
        name: "Radio Ga Ga",
        artist: "Queen",
        duration: 345,
      },
    },
    {
      memberId: 3,
      song: {
        id: 24,
        name: "I Will Always Love You",
        artist: "Whitney Houston",
        duration: 273,
      },
    },
    {
      memberId: 3,
      song: {
        id: 22,
        name: "Take Me to Church",
        artist: "Hozier",
        duration: 241,
      },
    },
    {
      memberId: 4,
      song: {
        id: 18,
        name: "Shake It Off",
        artist: "Taylor Swift",
        duration: 219,
      },
    },
    {
      memberId: 1,
      song: {
        id: 7,
        name: "Rolling in the Deep",
        artist: "Adele",
        duration: 228,
      },
    },
    {
      memberId: 1,
      song: {
        id: 2,
        name: "Bohemian Rhapsody",
        artist: "Queen",
        duration: 367,
      },
    },
  ],
  members: [
    {
      id: 1,
      name: "John Smith",
      avatar:
        "https://images.unsplash.com/photo-1701872182933-2774ca26399b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    },
    {
      id: 2,
      name: "Emily Johnson",
      avatar:
        "https://images.unsplash.com/photo-1702017653546-e67a25511d7c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Michael Williams",
      avatar:
        "https://images.unsplash.com/photo-1639090869991-632afb8a544c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    },
    {
      id: 4,
      name: "Emma Jones",
      avatar:
        "https://images.unsplash.com/photo-1702017634883-8392c239ea2c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    },
    {
      id: 5,
      name: "Daniel Brown",
      avatar:
        "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG1hbiUyMGFsb25lfGVufDB8fDB8fHwy",
    },
  ],
};

interface Props {}

const WigwamPage: FC<Props> = () => {
  const { name, members, maxSongForMember, songs } = testWigwam;
  const navigate = useNavigate();
  const ref = useRef<ITriangleDialog>(null);
  const inviteRef = useRef<ITriangleDialog>(null);
  const snackbarRef = useRef<ISnackbar>(null);
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
  return (
    <section className={styles.wigwam}>
      <div className={styles.wigwam__header}>
        <IconButton text="слушать" onClick={handleOpenSnackbar}>
          <VynilIcon width={48} height={40} />
        </IconButton>
        <Text view="title">{name}</Text>
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
        <Button view={"contained"} onClick={handleCloseDialog}>
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
