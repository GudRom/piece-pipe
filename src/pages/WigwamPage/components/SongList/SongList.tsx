import SongCard from "components/SongCard";
import { FC } from "react";
import { Song } from "utils/types/model/IWigwamModel";
import styles from "./SongList.module.scss";
import { MAX_SONGS_FOR_SLICE } from "config/config";
import Button from "elements/buttons/Button";
import { useSlice } from "hooks/useSlice";
import Text from "elements/Text";

interface Props {
  songs: Song[];
}

const SongList: FC<Props> = ({ songs }) => {
  const { currentSlice, getMore, getLess } = useSlice();
  return (
    <ul className={styles.songList}>
      {songs.slice(0, currentSlice).map((song) => (
        <SongCard song={song.song} key={song.song.id} />
      ))}

      {songs.length > MAX_SONGS_FOR_SLICE &&
        (currentSlice < songs.length ? (
          <Button onClick={getMore} view="text" className={styles.list__btn}>
            <Text view="button">Ещее</Text>
          </Button>
        ) : (
          <Button onClick={getLess} view="text" className={styles.list__btn}>
            <Text view="button">Меньше</Text>
          </Button>
        ))}
    </ul>
  );
};

export default SongList;
