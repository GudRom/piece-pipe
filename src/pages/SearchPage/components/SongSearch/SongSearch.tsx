import Search from "components/Search/Search";
import { FC, FormEvent, useCallback, useState } from "react";
import { fetchSongs } from "store/slices/song/slice";
import { useAppDispatch, useAppSelector } from "store/hooks";
import SongList from "../SongList";
import Text from "elements/Text";
import styles from "../../SearchPage.module.scss";

interface Props {}

const SongSearch: FC<Props> = () => {
  const [text, setText] = useState("");

  const dispatch = useAppDispatch();

  const { songs, loading } = useAppSelector((state) => state.songReducer);
  const { currentWigwam } = useAppSelector((state) => state.wigwamReducer);

  const addedSongsIds = currentWigwam?.songs.map((song) => song.song.id);

  const handleInput = useCallback((value: string) => {
    setText(value);
  }, []);

  const handleForm = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      dispatch(fetchSongs(text));
      setText("");
    },
    [dispatch, text]
  );
  return (
    <>
      <Search handleForm={handleForm} setText={handleInput} text={text} />
      <Text view="p-18" className={styles.search__searchTitle}>
        Результат поиска:
      </Text>
      {loading ? (
        <Text view="p-14">Loading...</Text>
      ) : songs.length > 0 ? (
        <SongList songs={songs} addedSongsIds={addedSongsIds} />
      ) : (
        <Text view="p-14">
          Поиск не дал результатов <span>&#129302;</span>
        </Text>
      )}
    </>
  );
};

export default SongSearch;
