import SongCard from "components/SongCard";
import { FC } from "react";
import { Song } from "utils/types/model/IWigwamModel";
import styles from "./SongList.module.scss";

interface Props {
  songs: Song[];
}

const SongList: FC<Props> = ({ songs }) => {
  return (
    <ul className={styles.songList}>
      {songs.map((song) => (
        <SongCard song={song.song} key={song.song.id} />
      ))}
    </ul>
  );
};

export default SongList;
