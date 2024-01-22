import ProgressBar from "elements/ProgressBar";
import Text from "elements/Text";
import { FC } from "react";
import SongList from "./components/SongList";
import styles from "./SearchPage.module.scss";
import { useAppSelector } from "store/hooks";
import SongSearch from "./components/SongSearch";
import { ISongModel } from "utils/types/model/ISongModel";

interface Props {}

const SearchPage: FC<Props> = () => {
  const currentUser = useAppSelector((store) => store.userReducer.currentUser);
  const { currentWigwam } = useAppSelector((state) => state.wigwamReducer);

  if (!currentWigwam)
    return (
      <Text view="title" tag="h1">
        Ошибка! Нет текущего вигвама
      </Text>
    );

  const memberSongs: ISongModel[] =
    currentWigwam?.songs
      .filter((song) => song.memberId === currentUser!.id)
      ?.map((song) => ({
        id: song.song.id,
        name: song.song.name,
        artist: song.song.artist,
        duration: song.song.duration,
      })) ?? [];

  return (
    <section className={styles.search}>
      <Text view="title" tag="h1" className={styles.search__title}>
        Ваши песни
      </Text>
      <div className={styles.search__progressBox}>
        <Text className={styles.search__progressBox__text}>
          Можно добавить еще:{" "}
          {currentWigwam.maxSongForMember - memberSongs.length}
        </Text>
        <ProgressBar
          maxAmount={currentWigwam.maxSongForMember}
          currentAmount={memberSongs.length}
        />
      </div>
      <SongList songs={memberSongs} />
      <SongSearch />
    </section>
  );
};

export default SearchPage;
