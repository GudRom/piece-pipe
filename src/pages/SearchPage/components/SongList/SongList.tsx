import SongCard from "components/SongCard";
import { FC, useCallback, useState } from "react";
import styles from "./SongList.module.scss";
import Button from "elements/buttons/Button";
import Text from "elements/Text";
import { MAX_SONGS_FOR_SLICE } from "config/config";
import { useSlice } from "hooks/useSlice";
import { ISongModel } from "utils/types/model/ISongModel";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { updateWigwam } from "store/slices/wigwam/slice";
import { PatchWigwamDto } from "utils/types/dto/wigwam/PatchWigwamDto";
// import ActionSlotCard from "./components/ActionSlotCard";

interface Props {
  songs: ISongModel[];
  addedSongsIds?: number[];
}

const SongList: FC<Props> = ({ songs, addedSongsIds }) => {
  const { currentSlice, getMore, getLess } = useSlice();
  const [currentSongId, setCurrentSongId] = useState<number | null>(null);

  const dispatch = useAppDispatch();

  const { currentWigwam, loading } = useAppSelector(
    (state) => state.wigwamReducer
  );
  const { currentUser } = useAppSelector((state) => state.userReducer);

  const handleAddSong = useCallback(
    (song: ISongModel) => {
      if (currentWigwam && currentUser) {
        const dto: PatchWigwamDto = {
          id: currentWigwam?.id,
          songs: [...currentWigwam.songs, { memberId: currentUser.id, song }],
        };
        setCurrentSongId(song.id);
        dispatch(updateWigwam(dto));
      }
    },
    [currentUser, currentWigwam, dispatch]
  );
  const handleRemoveSong = useCallback(
    (id: number) => {
      if (currentWigwam && currentUser) {
        const dto: PatchWigwamDto = {
          id: currentWigwam?.id,
          songs: currentWigwam.songs.filter((song) => song.song.id !== id),
        };
        setCurrentSongId(id);
        dispatch(updateWigwam(dto));
      }
    },
    [currentUser, currentWigwam, dispatch]
  );
  return (
    <ul className={styles.list}>
      {songs.slice(0, currentSlice).map((song) => (
        <SongCard
          song={song}
          key={song.id}
          loading={loading && currentSongId === song.id}
          handleAddSong={handleAddSong}
          handleRemoveSong={handleRemoveSong}
          addedSongsIds={addedSongsIds}
          withActionSlot={true}
        />
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
